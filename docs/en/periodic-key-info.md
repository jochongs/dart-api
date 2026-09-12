# DS002 - DartPeriodicKeyInfo

Provides key information extracted from periodic reports (annual, semi-annual, and quarterly reports).

**OpenDart group:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS002](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS002)

```typescript
import { DartPeriodicKeyInfo } from "dart-api";

const dart = new DartPeriodicKeyInfo({ key: "YOUR_API_KEY" });
```

---

## Common Parameters

Most methods accept the following three parameters:

| Field | Type | Required | Description |
|---|---|---|---|
| corp_code | string | Yes | 8-digit corporation code |
| bsns_year | string | Yes | 4-digit fiscal year (e.g. `"2023"`) |
| reprt_code | ReportCodeType | Yes | `11011` Annual / `11012` Semi-annual / `11013` Q1 / `11014` Q3 |

## Common Response Structure

```typescript
interface PeriodicKeyInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
```

All list item models extend a base interface with the fields: `rcept_no`, `corp_cls`, `corp_code`, `corp_name`.

---

## Methods

| Method | Description | Key Return Fields | OpenDart Link |
|---|---|---|---|
| `getCapitalChangeStatus` | Capital change status | isu_dcrs_de, isu_dcrs_stle, isu_dcrs_stock_knd, isu_dcrs_qy, isu_dcrs_mstvdv_fval_amount, isu_dcrs_mstvdv_amount, stlm_dt | [DS002&apiId=2019004](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019004) |
| `getDividendInfo` | Dividend information | se, stock_knd, thstrm, frmtrm, lwfr | [DS002&apiId=2019005](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019005) |
| `getTreasuryStockStatus` | Treasury stock status | se, istc_totqy, vntrgdtl_istc_co, ssl_totqy, trmend_istc_co | [DS002&apiId=2019006](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019006) |
| `getMajorShareholderStatus` | Major shareholder status | nm, relate, stock_knd, bsis_posesn_stock_co, bsis_posesn_stock_qota_rt, trmend_posesn_stock_co, trmend_posesn_stock_qota_rt | [DS002&apiId=2019007](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019007) |
| `getMajorShareholderChange` | Major shareholder changes | nm, relate, change_on, before_prcnt, after_prcnt | [DS002&apiId=2019008](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019008) |
| `getMinorShareholderStatus` | Minor shareholder status | se, shrholdr_co, shrholdr_tot_co, hold_stock_co, stock_tot_co, hold_stock_qota_rt | [DS002&apiId=2019009](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019009) |
| `getExecutiveStatus` | Executive status | nm, sexdstn, birth_yrmo, ofcps, rgistn_exctv_at, fte_at, chrg_job, main_career, mxmm_edctn, tenure_end_on, stlm_dt | [DS002&apiId=2019010](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019010) |
| `getEmployeeStatus` | Employee status | fo_bbm, sexdstn, reform_bfe_emp_co_cnt, reform_aft_emp_co_cnt, avrg_cnwk_sdytrn, fyer_salary_totamt, jan_salary_am, stlm_dt | [DS002&apiId=2019011](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019011) |
| `getIndividualDirectorCompensation` | Individual director compensation | nm, ofcps, mendng_totamt, mendng_totamt_ct_incls_mendng, stlm_dt | [DS002&apiId=2019012](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019012) |
| `getTotalDirectorCompensation` | Total director compensation (by category) | se, nmpr, mendng_totamt, jan_avrg_mendng_am, stlm_dt | [DS002&apiId=2019013](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019013) |
| `getTop5ExecutiveCompensation` | Top 5 highest-paid executive compensation | nm, ofcps, mendng_totamt, mendng_totamt_ct_incls_mendng, stlm_dt | [DS002&apiId=2019014](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019014) |
| `getExternalInvestmentStatus` | External investment status | inv_prm, frst_acnt_dt, invstmnt_asset_nm, invstmnt_ko, frst_invstmnt_am, bsis_blce_qy, bsis_blce_am, incrs_dcrs_acqs_qy, incrs_dcrs_acqs_am, incrs_dcrs_dsps_qy, incrs_dcrs_dsps_am, trmend_blce_qy, trmend_blce_am, trmend_blce_qota_rt, recent_bsns_year_fnnr_sttus_tot_assets, recent_bsns_year_fnnr_sttus_thstrm_ntpf | [DS002&apiId=2019015](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019015) |
| `getTotalStockStatus` | Total issued stock status (all types) | isu_stock_totqy, now_to_isu_stock_totqy, now_to_dcrs_stock_totqy, redc_qy, profc_qy, rdmstk_qy, now_to_istc_totqy, istc_totqy, tesstk_co, distb_stock_co | [DS002&apiId=2020001](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020001) |
| `getDebtIssuanceStatus` | Debt issuance status | bd_tm, bd_knd, bd_nm, isin_cd, stdrd_intr_rate, vlid_intr_rate, issu_de, rpd_de, issu_ccms | [DS002&apiId=2020002](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020002) |
| `getCommercialPaperBalance` | Commercial paper outstanding balance | opr_de, rpd_de, cp_cnt, opr_amnt | [DS002&apiId=2020003](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020003) |
| `getShortTermBondBalance` | Short-term bond outstanding balance | opr_de, rpd_de, st_bond_cnt, opr_amnt | [DS002&apiId=2020004](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020004) |
| `getCorporateBondBalance` | Corporate bond outstanding balance | bd_tm, bd_nm, bd_knd, issu_de, rpd_de, issu_cn | [DS002&apiId=2020005](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020005) |
| `getHybridBondBalance` | Hybrid bond outstanding balance | hybrid_bd_nm, issu_de, rpd_de, issu_cn | [DS002&apiId=2020006](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020006) |
| `getContingentCapitalBalance` | Contingent capital securities balance | cn_knd, issu_de, cnvr_or_rdmstk_mttrs | [DS002&apiId=2020007](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020007) |
| `getAuditorNameAndOpinion` | Auditor name and audit opinion | se, bsns_year, auditor_nm, adt_opinion, adt_reprt_spcmnt_matter | [DS002&apiId=2020009](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020009) |
| `getAuditContractInfo` | Audit engagement contract information | bsns_year, auditor_nm, ctr_dt | [DS002&apiId=2020010](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020010) |
| `getNonAuditContractInfo` | Non-audit services contract information | bsns_year, auditor_nm, ctr_object, ctr_startde, ctr_endde, ctr_amount | [DS002&apiId=2020011](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020011) |
| `getOutsideDirectorStatus` | Outside (independent) director status | nm, birth_yrmo, ofcps, main_career | [DS002&apiId=2020012](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020012) |
| `getUnregisteredExecutiveCompensation` | Unregistered executive compensation | nm, ofcps, mendng_totamt, mendng_totamt_ct_incls_mendng | [DS002&apiId=2020013](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020013) |
| `getApprovedDirectorCompensation` | Board-approved director compensation limit | se, nmpr, mendng_totamt | [DS002&apiId=2020014](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020014) |
| `getDirectorCompensationByType` | Director compensation broken down by type | sk, mendng_totamt | [DS002&apiId=2020015](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020015) |
| `getPublicOfferingFundUsage` | Public offering fund usage | sbd, rspn_purps, realnm_sbd, realnm_usamt, bsns_qy_plan_usamt, accmltoamt_usamt | [DS002&apiId=2020016](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020016) |
| `getPrivatePlacementFundUsage` | Private placement fund usage | sbd, rspn_purps, realnm_sbd, realnm_usamt, bsns_qy_plan_usamt, accmltoamt_usamt | [DS002&apiId=2020017](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020017) |
| `getIndividualDirectorCompensationV2` (new) | Individual director compensation including stock-based pay | stlm_dt, nm, fscl_year, ofcps, mendng_totamt, stk_bsd_pd_mendng_totamt_qty, stk_opt_exrcsbl_qty, stk_opt_rmn_blce, othr_stk_bsd_cmpn_mkt_vl, rm | [DS002&apiId=hmvAuditIndvdlBySttusV2](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=hmvAuditIndvdlBySttusV2) |
| `getTop5ExecutiveCompensationV2` (new) | Top 5 executive compensation including stock-based pay | stlm_dt, nm, fscl_year, ofcps, mendng_totamt, stk_bsd_pd_mendng_totamt_qty, stk_opt_exrcsbl_qty, stk_opt_rmn_blce, othr_stk_bsd_cmpn_mkt_vl | [DS002&apiId=indvdlByPayV2](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=indvdlByPayV2) |

**Note:** Methods marked **(new)** are newly added in DS002 Ver 2.0, effective May 2026. The V2 variants extend the original compensation methods with additional stock-based compensation fields: exercisable stock option quantity, remaining stock option balance, and the market value of other stock-based compensation.

---

## Example

```typescript
const result = await dart.getExecutiveStatus({
  corp_code: "00126380",
  bsns_year: "2023",
  reprt_code: 11011,
});

if (result.status === "000") {
  result.list.forEach((exec) => {
    console.log(exec.nm, exec.ofcps, exec.tenure_end_on);
  });
}
```
