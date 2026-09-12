# DS003 - DartPeriodicFinancialInfo

Provides financial statement data from periodic reports, including both major account summaries and full XBRL-based financial statements.

**OpenDart group:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS003](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS003)

```typescript
import { DartPeriodicFinancialInfo } from "dart-api";

const dart = new DartPeriodicFinancialInfo({ key: "YOUR_API_KEY" });
```

---

## Common Types

### ReportCodeType

| Value | Report |
|---|---|
| `11011` | Annual report |
| `11012` | Semi-annual report |
| `11013` | Q1 quarterly report |
| `11014` | Q3 quarterly report |

### fs_div — Financial Statement Division

| Value | Description |
|---|---|
| `"OFS"` | Separate (individual) financial statements |
| `"CFS"` | Consolidated financial statements |

### Common Response Structure

```typescript
interface BasicPeriodicFinancialInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
```

---

## Methods

### `getSingleCompanyAccountInfo(params)`

Retrieve major accounts (balance sheet and income statement) for a single company from a periodic report.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019016](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019016)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |
| bsns_year | string | Yes | 4-digit fiscal year |
| reprt_code | ReportCodeType | Yes | Report type code |

**Returns:** `BasicPeriodicFinancialInfoResponse<SingleCompanyAccountInfo>`

**SingleCompanyAccountInfo fields:**

| Field | Description |
|---|---|
| rcept_no | Filing receipt number |
| reprt_code | Report type code |
| bsns_year | Fiscal year |
| corp_code | Corporation code |
| sj_div | Financial statement type (BS, IS, etc.) |
| sj_nm | Financial statement name |
| account_id | Account XBRL ID |
| account_nm | Account name |
| account_detail | Account detail |
| thstrm_nm | Current period label |
| thstrm_amount | Current period amount |
| frmtrm_nm | Prior period label |
| frmtrm_amount | Prior period amount |
| bfefrmtrm_nm | Two periods ago label |
| bfefrmtrm_amount | Two periods ago amount |
| ord | Display order |
| currency | Currency code |

---

### `getMultipleCompanyAccountInfo(params)`

Retrieve major accounts for multiple companies in a single request.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019017](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019017)

**Parameters:** Same as `getSingleCompanyAccountInfo`. The `corp_code` field accepts multiple 8-digit codes separated by commas (e.g. `"00126380,00164779"`).

**Returns:** `BasicPeriodicFinancialInfoResponse<MultipleCompanyAccountInfo>`

---

### `getOriginalFinancialStateFile(params)`

Download the XBRL source file for a financial statement.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019019](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019019)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |
| bsns_year | string | Yes | 4-digit fiscal year |
| reprt_code | ReportCodeType | Yes | Report type code |
| rcept_no | string | Yes | 14-digit filing receipt number |
| fs_div | `"OFS"` \| `"CFS"` | Yes | Financial statement division |
| sj_div | string | Yes | Statement type (e.g. `"BS"`, `"IS"`) |

**Returns:** `Promise<ArrayBuffer>` — the raw XBRL file.

---

### `getFullFinancialStatements(params)`

Retrieve all accounts across all financial statements (full detail, not just major accounts).

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019020](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019020)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |
| bsns_year | string | Yes | 4-digit fiscal year |
| reprt_code | ReportCodeType | Yes | Report type code |
| fs_div | `"OFS"` \| `"CFS"` | Yes | Financial statement division |
| sj_div | string | Yes | Statement type |

**Returns:** `BasicPeriodicFinancialInfoResponse<FullFinancialStatements>`

The `FullFinancialStatements` model includes all fields from `SingleCompanyAccountInfo` plus additional XBRL-specific fields for the full account hierarchy.

---

### `getXbrlTaxonomyFormat(params)`

Retrieve the XBRL taxonomy format for a company's financial report.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=AE00037](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=AE00037)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |
| bsns_year | string | Yes | 4-digit fiscal year |
| reprt_code | ReportCodeType | Yes | Report type code |

**Returns:** `BasicPeriodicFinancialInfoResponse<XbrlTaxonomyFormat>`

---

### `getFinancialIndicatorsOfCompany(params)`

Retrieve key financial indicators (ratios and metrics) for a single company.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2022001](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2022001)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |
| bsns_year | string | Yes | 4-digit fiscal year |
| reprt_code | ReportCodeType | Yes | Report type code |

**Returns:** `BasicPeriodicFinancialInfoResponse<IndicatorCategoryCode>`

---

### `getFinancialIndicesOfCompanies(params)`

Retrieve key financial indicators for multiple companies in a single request.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2022002](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2022002)

**Parameters:**

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | Comma-separated 8-digit corporation codes |
| bsns_year | string | Yes | 4-digit fiscal year |
| reprt_code | ReportCodeType | Yes | Report type code |

**Returns:** `BasicPeriodicFinancialInfoResponse<FinancialIndicesOfCompanies>`

---

## Example

```typescript
// Get balance sheet and income statement accounts for Samsung Electronics (annual 2023)
const result = await dart.getSingleCompanyAccountInfo({
  corp_code: "00126380",
  bsns_year: "2023",
  reprt_code: 11011,
});

if (result.status === "000") {
  result.list.forEach((account) => {
    console.log(account.account_nm, account.thstrm_amount);
  });
}

// Compare financials across multiple companies
const multi = await dart.getMultipleCompanyAccountInfo({
  corp_code: "00126380,00164779",
  bsns_year: "2023",
  reprt_code: 11011,
});
```
