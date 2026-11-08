const assert = require('node:assert/strict');
const test = require('node:test');
const { DartDisclosureInfo, DartException } = require('../dist/index.js');

function clientWithResponse(contentType, body) {
  const client = new DartDisclosureInfo({ key: 'fixture-key' });
  const calls = [];
  client.axios.defaults.adapter = async (config) => {
    calls.push(config);
    return {
      status: 200,
      statusText: 'OK',
      headers: { 'content-type': contentType },
      config,
      data: typeof body === 'string' ? new TextEncoder().encode(body) : body,
    };
  };
  return { client, calls };
}

test('XML success status stays the declared string and is not thrown as an exception', async () => {
  const { client } = clientWithResponse(
    'application/xml;charset=UTF-8',
    '<?xml version="1.0" encoding="utf-8"?><result><status>000</status><message>정상</message></result>',
  );
  const body = await client.getOriginalDisclosureDocumentFile('20261028000001');
  assert.deepEqual(body, { status: '000', message: '정상' });
});

for (const status of ['020', '800']) {
  test(`XML error ${status} keeps the exact string status`, async () => {
    const { client } = clientWithResponse(
      'application/xml;charset=UTF-8',
      `<?xml version="1.0" encoding="utf-8"?><result><status>${status}</status><message>오류</message></result>`,
    );
    await assert.rejects(
      client.getOriginalDisclosureDocumentFile('20261028000001'),
      (error) => {
        assert.ok(error instanceof DartException);
        assert.equal(error.status, status);
        assert.equal(typeof error.status, 'string');
        assert.equal(error.message, '오류');
        return true;
      },
    );
  });
}

test('binary document ZIP bytes pass through unchanged', async () => {
  const zip = new Uint8Array([80, 75, 3, 4, 0, 255]);
  const { client, calls } = clientWithResponse('application/x-msdownload', zip);
  const body = await client.getOriginalDisclosureDocumentFile('20261028000001');
  assert.strictEqual(body, zip);
  assert.equal(calls[0].url, '/document.xml');
  assert.equal(calls[0].responseType, 'arraybuffer');
  assert.equal(calls[0].params.rcept_no, '20261028000001');
});

test('binary corporation-code ZIP bytes also pass through unchanged', async () => {
  const zip = new Uint8Array([80, 75, 3, 4]);
  const { client } = clientWithResponse('application/x-msdownload', zip);
  assert.strictEqual(await client.getDisclosureCorporationCode(), zip);
});

test('JSON numeric fields and strings keep their existing types', async () => {
  const expected = { status: '000', total_page: 2, list: [{ corp_code: '00123456' }] };
  const { client } = clientWithResponse('application/json', JSON.stringify(expected));
  assert.deepEqual(await client.searchDisclosures({ bgn_de: '20261001', end_de: '20261031' }), expected);
});

test('network errors propagate unchanged', async () => {
  const { client } = clientWithResponse('application/xml', '');
  const networkError = new Error('ECONNREFUSED');
  client.axios.defaults.adapter = async () => { throw networkError; };
  await assert.rejects(client.getOriginalDisclosureDocumentFile('20261028000001'), (error) => error === networkError);
});
