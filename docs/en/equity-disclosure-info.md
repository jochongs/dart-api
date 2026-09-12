# DS004 - DartEquityDisclosureInfo

Provides equity disclosure reports, including major shareholder reports (5% threshold filings) and executive/major shareholder stock change reports.

**OpenDart group:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS004](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS004)

```typescript
import { DartEquityDisclosureInfo } from "dart-api";

const dart = new DartEquityDisclosureInfo({ key: "YOUR_API_KEY" });
```

---

## Common Parameters

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |

## Common Response Structure

```typescript
interface BasicEquityDisclosureInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
```

All list item models include base fields: `rcept_no`, `corp_cls`, `corp_code`, `corp_name`.

---

## Methods

### `getMajorShareholdingReport(params)`

Retrieve reports filed when a shareholder crosses the 5% ownership threshold (major shareholder disclosure).

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=2019021](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=2019021)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |

**Returns:** `BasicEquityDisclosureInfoResponse<MajorShareholdingReport>`

Under Korean securities law, any person or group that acquires 5% or more of a listed company's shares must file a report within 5 business days. Subsequent changes of 1% or more also require filing.

**Example:**

```typescript
const result = await dart.getMajorShareholdingReport({
  corp_code: "00126380",
});

if (result.status === "000") {
  result.list.forEach((report) => {
    console.log(report.rcept_no, report.corp_name);
  });
}
```

---

### `getExecutiveMajorShareholderReport(params)`

Retrieve stock ownership change reports filed by executives and major shareholders.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=AE00040](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=AE00040)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |

**Returns:** `BasicEquityDisclosureInfoResponse<ExecutiveMajorShareholderReport>`

Executives (directors, auditors, etc.) and major shareholders holding 10% or more must report any change in their stock ownership. This method retrieves those filings.

**Example:**

```typescript
const result = await dart.getExecutiveMajorShareholderReport({
  corp_code: "00126380",
});

if (result.status === "000") {
  result.list.forEach((report) => {
    console.log(report.rcept_no, report.corp_name);
  });
}
```
