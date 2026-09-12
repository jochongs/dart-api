# DS006 - DartSecuritiesRegistrationInfo

Provides key information extracted from securities registration statements (증권신고서). This module covers equity securities, debt securities, depositary securities (DR), mergers, comprehensive stock exchange/transfer, and spin-offs.

**OpenDart group:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS006](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS006)

```typescript
import { DartSecuritiesRegistrationInfo } from "dart-api";

const dart = new DartSecuritiesRegistrationInfo({ key: "YOUR_API_KEY" });
```

---

## Response Structure

This module uses a **different response structure** from all other modules. Instead of a flat `list` array, responses contain a `group` array where each element represents a named section of the filing.

```typescript
interface SecuritiesRegistrationResponse<T extends SecuritiesRegistrationGroup<any>[]> {
  result: {
    status: DartStatus;
    message: string;
  };
  group: T;
}

interface SecuritiesRegistrationGroup<T> {
  title: string;  // Section title (e.g. "일반사항", "증권의종류")
  list: T[];      // Array of records for this section
}
```

Status and error information is nested under `result`, not at the top level.

### Base Model Fields

All models in this module extend `SecuritiesRegistrationBase`:

| Field | Description |
|---|---|
| rcept_no | Filing receipt number |
| corp_cls | Market classification |
| corp_code | 8-digit corporation code |
| corp_name | Corporation name |

---

## Common Parameters

```typescript
interface SecuritiesRegistrationParams {
  corp_code: string;  // 8-digit corporation code
  bgn_de: string;     // Start date (YYYYMMDD)
  end_de: string;     // End date (YYYYMMDD)
}
```

---

## Methods

### `getEquitySecurities(params)`

Retrieve key information from equity securities registration statements.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054)

**Returns:** 6-group response

#### Group 0: `EquitySecuritiesGeneralAffairs` — General affairs

| Field | Description |
|---|---|
| sbd | Subscription period |
| pymd | Payment date |
| sband | Subscription announcement date |
| asand | Allocation announcement date |
| asstd | Allocation reference date |
| exstk | Warrant exercise target securities (existing shareholders) |
| exprc | Warrant exercise price (KRW) |
| expd | Warrant exercise period end date |
| rpt_rcpn | Major event report receipt number (14 digits) |

#### Group 1: `EquitySecuritiesType` — Securities type

| Field | Description |
|---|---|
| stksen | Securities type classification |
| stkcnt | Quantity |
| fv | Par value (KRW) |
| slprc | Offering/sales price (KRW) |
| slta | Total offering/sales amount (KRW) |
| slmthn | Offering/sales method |

#### Group 2: `UnderwriterInfo` — Underwriter information

| Field | Description |
|---|---|
| actsen | Underwriter classification |
| actnmn | Underwriter name |
| stksen | Securities type |
| udtcnt | Underwriting quantity |
| udtamt | Underwriting amount (KRW) |
| udtprc | Underwriting consideration |
| udtmth | Underwriting method |

#### Group 3: `FundUsage` — Fund usage

| Field | Description |
|---|---|
| se | Classification |
| amt | Amount (KRW) |

#### Group 4: `SalesHolder` — Sales holder information

| Field | Description |
|---|---|
| hdr | Holder name |
| rl_cmp | Relationship with company |
| bfsl_hdstk | Pre-sale holdings |
| slstk | Shares sold |
| atsl_hdstk | Post-sale holdings |

#### Group 5: `GeneralSubscriptionRedemption` — General subscription redemption right

| Field | Description |
|---|---|
| grtrs | Securities subject to redemption request |
| exavivr | Whether redemption request is available |
| grtcnt | Redemption request quantity |
| expd | Redemption request period |
| exprc | Redemption request price (KRW) |

**TypeScript Example:**

```typescript
const response = await dart.getEquitySecurities({
  corp_code: "00126380",
  bgn_de: "20240101",
  end_de: "20241231",
});

if (response.result.status !== "000") {
  console.error(response.result.message);
} else {
  // Access each group by index — the type is fully inferred
  const generalAffairs = response.group[0];   // SecuritiesRegistrationGroup<EquitySecuritiesGeneralAffairs>
  const securitiesTypes = response.group[1];  // SecuritiesRegistrationGroup<EquitySecuritiesType>
  const underwriters = response.group[2];     // SecuritiesRegistrationGroup<UnderwriterInfo>
  const fundUsage = response.group[3];        // SecuritiesRegistrationGroup<FundUsage>
  const salesHolders = response.group[4];     // SecuritiesRegistrationGroup<SalesHolder>
  const redemptions = response.group[5];      // SecuritiesRegistrationGroup<GeneralSubscriptionRedemption>

  console.log("Section title:", generalAffairs.title);
  generalAffairs.list.forEach((item) => {
    console.log("Payment date:", item.pymd);
    console.log("Subscription period:", item.sbd);
    console.log("Exercise price:", item.exprc);
  });

  securitiesTypes.list.forEach((item) => {
    console.log("Type:", item.stksen, "Qty:", item.stkcnt, "Price:", item.slprc);
  });

  fundUsage.list.forEach((item) => {
    console.log("Purpose:", item.se, "Amount:", item.amt);
  });
}
```

---

### `getDebtSecurities(params)`

Retrieve key information from debt securities registration statements (bonds, notes, etc.).

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020055](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020055)

**Returns:** 4-group response

#### Group 0: `DebtSecuritiesGeneralAffairs` — General affairs

| Field | Description |
|---|---|
| tm | Issue name / series |
| bdnmn | Debt securities name |
| slmth | Offering/sales method |
| fta | Total issuance amount (KRW) |
| slta | Total sales amount (KRW) |
| isprc | Issuance/sales price (relative to par value) |
| intr | Coupon rate |
| isrr | Yield to maturity |
| rpd | Principal and interest payment agent |
| print_pymint | Interest payment after issuance date |
| mngt_cmp | Issuing company name |
| cdrt_int | Credit rating (credit rating agency) |
| sbd | Subscription period |
| pymd | Payment date |
| sband | Subscription announcement date |
| asand | Allocation announcement date |
| asstd | Allocation reference date |
| dpcrn | Depository institution (trustee) name |
| dpcr_amt | Trust/deposit amount (KRW) |
| usarn | Intended use/purpose |
| usntn | Usage plan notes |
| wnexpl_at | Whether principal/interest payment history explanation exists |
| udtintnm | Underwriting intermediary name |
| grt_int | Guarantee interest rate |
| grt_amt | Total guarantee amount (KRW) |
| icmg_mgknd | Early redemption structure management type (guarantor type) |
| icmg_mgamt | Early redemption structure management amount (KRW) |
| estk_exstk | Stock linkage |
| estk_exrt | Conversion/exchange ratio |
| estk_exprc | Conversion/exchange price (KRW) |
| estk_expd | Conversion/exchange period |
| rpt_rcpn | Major event report receipt number (14 digits) |
| drcb_at | Whether covered bond (dual recourse bond) |
| drcb_uast | Covered bond underlying asset |
| drcb_optknd | Covered bond option type |
| drcb_mtd | Covered bond method |

#### Group 1: `UnderwriterInfo` — Underwriter information (same fields as equity securities)

#### Group 2: `FundUsage` — Fund usage (same fields as equity securities)

#### Group 3: `SalesHolder` — Sales holder information (same fields as equity securities)

**Example:**

```typescript
const response = await dart.getDebtSecurities({
  corp_code: "00126380",
  bgn_de: "20240101",
  end_de: "20241231",
});

if (response.result.status === "000") {
  const generalAffairs = response.group[0];
  generalAffairs.list.forEach((item) => {
    console.log("Bond name:", item.bdnmn);
    console.log("Coupon rate:", item.intr);
    console.log("Total issuance:", item.fta);
    console.log("Credit rating:", item.cdrt_int);
  });
}
```

---

### `getDepositarySecurities(params)`

Retrieve key information from depositary securities (DR — Depositary Receipt) registration statements.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020056](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020056)

**Returns:** 5-group response

| Group | Model | Description |
|---|---|---|
| 0 | `EquitySecuritiesGeneralAffairs` | General affairs (same as equity securities) |
| 1 | `EquitySecuritiesType` | Securities type (same as equity securities) |
| 2 | `UnderwriterInfo` | Underwriter information |
| 3 | `FundUsage` | Fund usage |
| 4 | `SalesHolder` | Sales holder information |

---

### `getMerger(params)`

Retrieve key information from merger securities registration statements.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057)

**Returns:** 3-group response

#### Group 0: `MergerGeneralAffairs` — General affairs

| Field | Description |
|---|---|
| stn | Classification/disclosure type |
| bddd | Board of directors resolution date |
| ctrd | Contract date (merger agreement date) |
| gmtsck_shddstd | Scheduled shareholders' meeting record date |
| ap_gmtsck | Scheduled shareholders' meeting date |
| aprskh_pd_bgd | Dissenting shareholder stock purchase request period start |
| aprskh_pd_edd | Dissenting shareholder stock purchase request period end |
| aprskh_prc | Dissenting shareholder stock purchase request price (KRW) |
| mgdt_etc | Special notes / merger details |
| rt_vl | Merger ratio valuation |
| exevl_int | External evaluation agency |
| grtmn_etc | Guarantor special notes |
| rpt_rcpn | Major event report receipt number (14 digits) |

#### Group 1: `SecuritiesIssued` — Securities issued

| Field | Description |
|---|---|
| kndn | Securities type |
| cnt | Quantity |
| fv | Par value (KRW) |
| slprc | Issuance/sales price (KRW) |
| slta | Total issuance/sales amount (KRW) |

#### Group 2: `CompanyInfo` — Company information

| Field | Description |
|---|---|
| cmpnm | Company name |
| sen | Classification (e.g. acquiring company, acquired company) |
| tast | Total assets (KRW) |
| cpt | Capital stock (KRW) |
| isstk_knd | Issued stock type |
| isstk_cnt | Issued stock quantity |

**Example:**

```typescript
const response = await dart.getMerger({
  corp_code: "00126380",
  bgn_de: "20200101",
  end_de: "20241231",
});

if (response.result.status === "000") {
  const generalAffairs = response.group[0];
  const companies = response.group[2];

  generalAffairs.list.forEach((item) => {
    console.log("Board resolution date:", item.bddd);
    console.log("Shareholders meeting:", item.ap_gmtsck);
  });

  companies.list.forEach((company) => {
    console.log(`${company.sen}: ${company.cmpnm} (assets: ${company.tast})`);
  });
}
```

---

### `getComprehensiveStockExchangeTransfer(params)`

Retrieve key information from comprehensive stock exchange and transfer (주식의포괄적교환·이전) registration statements.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020058](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020058)

**Returns:** 3-group response using the same model types as `getMerger`:

| Group | Model | Description |
|---|---|---|
| 0 | `MergerGeneralAffairs` | General affairs |
| 1 | `SecuritiesIssued` | Securities issued |
| 2 | `CompanyInfo` | Company information |

---

### `getSpinOff(params)`

Retrieve key information from spin-off (분할) securities registration statements.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020059](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020059)

**Returns:** 3-group response using the same model types as `getMerger`:

| Group | Model | Description |
|---|---|---|
| 0 | `MergerGeneralAffairs` | General affairs |
| 1 | `SecuritiesIssued` | Securities issued |
| 2 | `CompanyInfo` | Company information |

---

## Method Summary

| Method | Description | Groups | OpenDart |
|---|---|---|---|
| `getEquitySecurities` | Equity securities registration | 6 | [2020054](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054) |
| `getDebtSecurities` | Debt securities registration | 4 | [2020055](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020055) |
| `getDepositarySecurities` | Depositary securities (DR) registration | 5 | [2020056](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020056) |
| `getMerger` | Merger registration | 3 | [2020057](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057) |
| `getComprehensiveStockExchangeTransfer` | Stock exchange/transfer registration | 3 | [2020058](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020058) |
| `getSpinOff` | Spin-off registration | 3 | [2020059](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020059) |
