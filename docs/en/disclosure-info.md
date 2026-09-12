# DS001 - DartDisclosureInfo

Provides general disclosure search and corporate overview information.

**OpenDart group:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS001](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS001)

```typescript
import { DartDisclosureInfo } from "dart-api";

const dart = new DartDisclosureInfo({ key: "YOUR_API_KEY" });
```

---

## Methods

### `searchDisclosures(params)`

Search for disclosure filings by various criteria.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | No | 8-digit corporation code |
| bgn_de | string (YYYYMMDD) | No | Search start date |
| end_de | string (YYYYMMDD) | No | Search end date |
| last_reprt_at | `"Y"` \| `"N"` | No | Latest report only |
| pblntf_ty | PublicNotificationType | No | Disclosure type (A through J) |
| corp_cls | `"Y"` \| `"K"` \| `"N"` \| `"E"` | No | Market classification |
| page_no | number | No | Page number (default: 1) |
| page_count | number (1–100) | No | Results per page (default: 10) |
| sort | `"date"` \| `"crp"` \| `"rpt"` | No | Sort field |
| sort_mth | `"desc"` \| `"asc"` | No | Sort direction |

**Returns:** `SearchDisclosuresResponse<Disclosure>`

```typescript
interface SearchDisclosuresResponse<T> {
  status: DartStatus;
  message: string;
  page_no: number;
  page_count: number;
  total_count: number;
  total_page: number;
  list: T[];
}

interface Disclosure {
  corp_cls: string;       // Market classification
  corp_name: string;      // Corporation name
  corp_code: string;      // 8-digit corporation code
  stock_code: string;     // Stock ticker code
  report_nm: string;      // Report title
  rcept_no: string;       // 14-digit receipt number
  flr_nm: string;         // Filer name
  rcept_dt: string;       // Filing date (YYYYMMDD)
  rm: string;             // Remarks
}
```

**Example:**

```typescript
const result = await dart.searchDisclosures({
  corp_code: "00126380",
  bgn_de: "20240101",
  end_de: "20241231",
  page_count: 20,
  sort: "date",
  sort_mth: "desc",
});

console.log(`Total filings: ${result.total_count}`);
result.list.forEach((d) => console.log(d.report_nm, d.rcept_dt));
```

---

### `getOverviewOfCorporate(corp_code)`

Retrieve general corporate overview information by corporation code.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019002](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019002)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |

**Returns:** `GetOverviewOfCorporateResponse<CorporateStatusOverview>`

```typescript
interface CorporateStatusOverview {
  corp_name: string;      // Corporation name (Korean)
  corp_name_eng: string;  // Corporation name (English)
  stock_name: string;     // Stock name
  stock_code: string;     // Stock ticker code
  ceo_nm: string;         // CEO name
  corp_cls: string;       // Market classification
  jurir_no: string;       // Corporate registration number
  bizr_no: string;        // Business registration number
  adres: string;          // Address
  hm_url: string;         // Homepage URL
  ir_url: string;         // IR website URL
  phn_no: string;         // Phone number
  fax_no: string;         // Fax number
  induty_code: string;    // Industry code
  est_dt: string;         // Establishment date
  acc_mt: string;         // Fiscal year end month
}
```

**Example:**

```typescript
const result = await dart.getOverviewOfCorporate("00126380");

if (result.status === "000") {
  const corp = result.list[0];
  console.log(corp.corp_name, corp.ceo_nm, corp.hm_url);
}
```

---

### `getOriginalDisclosureDocumentFile(rcept_no)`

Download the original disclosure document as a ZIP archive.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| rcept_no | string | Yes | 14-digit filing receipt number |

**Returns:** `Promise<ArrayBuffer>`

The returned `ArrayBuffer` contains a ZIP archive with the original disclosure document files.

**Example:**

```typescript
import { writeFileSync } from "fs";

const buffer = await dart.getOriginalDisclosureDocumentFile("20240115000001");
writeFileSync("disclosure.zip", Buffer.from(buffer));
```

---

### `getDisclosureCorporationCode()`

Download the complete DART corporation code list as a ZIP archive.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003)

**Parameters:** None

**Returns:** `Promise<ArrayBuffer>`

The returned `ArrayBuffer` contains a ZIP archive with an XML file and a text file mapping all DART corporation codes to company names. Use this to look up `corp_code` values for use in other API calls.

**Example:**

```typescript
import { writeFileSync } from "fs";

const buffer = await dart.getDisclosureCorporationCode();
writeFileSync("corp_codes.zip", Buffer.from(buffer));
```
