# DS005 - DartMajorIssuesInfo

Provides key information from major issues reports (주요사항보고서). These reports are filed when a listed company undergoes a significant corporate event such as a capital change, merger, or lawsuit.

**OpenDart group:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS005](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS005)

```typescript
import { DartMajorIssuesInfo } from "dart-api";

const dart = new DartMajorIssuesInfo({ key: "YOUR_API_KEY" });
```

---

## Common Parameters

All methods accept the following parameters:

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |
| bgn_de | string (YYYYMMDD) | Yes | Search start date |
| end_de | string (YYYYMMDD) | Yes | Search end date |

## Common Response Structure

```typescript
interface MajorIssuesInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
```

All list item models include base fields: `rcept_no`, `corp_cls`, `corp_code`, `corp_name`.

---

## Methods

| Method | Description | Key Model Fields | OpenDart Link |
|---|---|---|---|
| `getPaidInCapitalIncreaseDecision` | Paid-in capital increase decision | nstk_ostk_cnt, nstk_ostk_fval_amount, nstk_stkpd_amount, nstk_stk_inr_amount | [DS005&apiId=2019022](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019022) |
| `getBonusIssueDecision` | Bonus (stock dividend) issue decision | nstk_ostk_cnt, nstk_ostk_fval_amount, bsis_rdtt_ostk_co | [DS005&apiId=2019023](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019023) |
| `getCapitalReductionDecision` | Capital reduction decision | nstk_ostk_cnt, nstk_ostk_fval_amount, bddd | [DS005&apiId=2019024](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019024) |
| `getConvertibleBondIssueDecision` | Convertible bond (CB) issue decision | bd_tm, bd_knd, bd_nm, fta, slta, bddd | [DS005&apiId=2019025](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019025) |
| `getBondWithWarrantIssueDecision` | Bond with warrant (BW) issue decision | bd_tm, bd_knd, bd_nm, fta, slta | [DS005&apiId=2019026](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019026) |
| `getExchangeableBondIssueDecision` | Exchangeable bond (EB) issue decision | bd_tm, bd_knd, bd_nm, fta, slta | [DS005&apiId=2019027](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019027) |
| `getCombinedCapitalIncreaseDecision` | Combined capital increase decision (all stock types) | nstk_ostk_cnt, nstk_ostk_fval_amount | [DS005&apiId=2019028](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019028) |
| `getCompanyMergerDecision` | Company merger decision | mrgn_cmpn_nm, mrgn_stk_knd, bddd | [DS005&apiId=2019029](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019029) |
| `getBusinessAcquisitionDecision` | Business acquisition decision | acqs_cmpn_nm, acqs_asset_nm, acqs_amount, bddd | [DS005&apiId=2019030](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019030) |
| `getBusinessTransferDecision` | Business transfer decision | trnsf_cmpn_nm, trnsf_asset_nm, trnsf_amount, bddd | [DS005&apiId=2019031](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019031) |
| `getTangibleAssetAcquisitionDecision` | Tangible asset acquisition decision | acqs_asset_nm, acqs_amount, bddd | [DS005&apiId=2019032](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019032) |
| `getTangibleAssetTransferDecision` | Tangible asset transfer decision | trnsf_asset_nm, trnsf_amount, bddd | [DS005&apiId=2019033](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019033) |
| `getOtherCompanyStockAndInvestmentSecuritiesAcquisitionDecision` | Acquisition of another company's stock or investment securities | acqs_cmpn_nm, acqs_stk_knd, acqs_qy, acqs_amount, bddd | [DS005&apiId=2019034](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019034) |
| `getOtherCompanyStockAndInvestmentSecuritiesTransferDecision` | Transfer of another company's stock or investment securities | trnsf_cmpn_nm, trnsf_stk_knd, trnsf_qy, trnsf_amount, bddd | [DS005&apiId=2019035](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019035) |
| `getTreasuryStockAcquisitionDecision` | Treasury stock acquisition decision | acqs_mth1, acqs_stk_knd, acqs_stk_cnt, acqs_exptd_amount | [DS005&apiId=2019036](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019036) |
| `getTreasuryStockDisposalDecision` | Treasury stock disposal decision | dsps_mth1, dsps_stk_knd, dsps_stk_cnt, dsps_exptd_amount | [DS005&apiId=2019037](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019037) |
| `getCompanyDivisionDecision` | Company division (spin-off) decision | dvdnd_mth, dvdnd_mttrs, bddd | [DS005&apiId=2019038](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019038) |
| `getCompanyDivisionMergerDecision` | Company division-merger decision | dvdnd_mth, mrgn_cmpn_nm, bddd | [DS005&apiId=2019039](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019039) |
| `getStockExchangeTransferDecision` | Comprehensive stock exchange or transfer decision | exstk_cmpn_nm, bddd | [DS005&apiId=2019040](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019040) |
| `getDissolutionCauseOccurrence` | Dissolution cause occurrence | ds_rsn, ds_dt | [DS005&apiId=2019041](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019041) |
| `getRehabilitationProcedureApplication` | Rehabilitation procedure application | rpllc_de, rpllc_rsn | [DS005&apiId=2019042](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019042) |
| `getLawsuitFiling` | Lawsuit filing disclosure | lwst_nm, lwr_nm, ltwt_knd, ltwt_amt, ltwt_rsn, rqstr_sbc_rcptn_dt, ltwt_cts | [DS005&apiId=2019043](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019043) |
| `getOverseasSecuritiesListingDecision` | Overseas securities listing decision | lst_exch_nm, lst_stk_knd, lst_stk_cnt, bddd | [DS005&apiId=2019044](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019044) |
| `getOverseasSecuritiesDelistingDecision` | Overseas securities delisting decision | dlst_exch_nm, dlst_stk_knd, dlst_dt | [DS005&apiId=2019045](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019045) |
| `getOverseasSecuritiesListing` | Overseas securities listing (completed) | lst_exch_nm, lst_stk_knd, lst_dt, lst_stk_cnt | [DS005&apiId=2019046](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019046) |
| `getOverseasSecuritiesDelisting` | Overseas securities delisting (completed) | dlst_exch_nm, dlst_stk_knd, dlst_dt | [DS005&apiId=2019047](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019047) |
| `getTreasuryStockAcquisitionTrustContractConclusionDecision` | Treasury stock trust contract conclusion decision | ctr_cmpn_nm, ctr_amount, ctr_dt | [DS005&apiId=2019048](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019048) |
| `getTreasuryStockAcquisitionTrustContractCancellationDecision` | Treasury stock trust contract cancellation decision | ctr_cmpn_nm, ccls_rsn, ccls_dt | [DS005&apiId=2019049](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019049) |
| `getCreditorBankManagementProcedureCommencement` | Creditor bank management procedure commencement | bgn_dt, bgn_rsn, cmpn_nm | [DS005&apiId=2019050](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019050) |
| `getCreditorBankManagementProcedureTermination` | Creditor bank management procedure termination | end_dt, end_rsn, cmpn_nm | [DS005&apiId=2019051](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019051) |
| `getBankruptcyOccurrence` | Bankruptcy occurrence | df_cn, df_amt, df_bnk, dfd, df_rs | [DS005&apiId=2020019](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020019) |
| `getSuspensionOfBusiness` | Suspension of business | sus_rsn, sus_dt, exp_rst_dt | [DS005&apiId=2020020](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020020) |
| `getAssetTransferOtherPutBackOption` | Asset transfer with put-back option | trnsf_asset_nm, trnsf_amount, bddd, ptbk_cnd | [DS005&apiId=2020021](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020021) |
| `getStockRelatedBondAcquisitionDecision` | Stock-related bond acquisition decision | acqs_cmpn_nm, acqs_bd_knd, acqs_amount, bddd | [DS005&apiId=2020022](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020022) |
| `getStockRelatedBondTransferDecision` | Stock-related bond transfer decision | trnsf_cmpn_nm, trnsf_bd_knd, trnsf_amount, bddd | [DS005&apiId=2020023](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020023) |
| `getWriteDownContingentConvertibleBondIssueDecision` | Write-down contingent convertible bond (CoCo bond) issue decision | bd_tm, bd_knd, bd_nm, fta, slta, bddd | [DS005&apiId=2020024](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020024) |

---

## Example

```typescript
const result = await dart.getConvertibleBondIssueDecision({
  corp_code: "00126380",
  bgn_de: "20240101",
  end_de: "20241231",
});

if (result.status === "000") {
  result.list.forEach((item) => {
    console.log(item.bd_nm, item.fta, item.bddd);
  });
}
```
