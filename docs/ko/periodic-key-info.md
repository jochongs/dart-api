# DS002 - DartPeriodicKeyInfo

정기보고서(사업보고서, 반기보고서, 분기보고서)에서 추출한 주요 정보를 제공합니다.

**OpenDart 그룹:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS002](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS002)

```typescript
import { DartPeriodicKeyInfo } from "dart-api";

const dart = new DartPeriodicKeyInfo({ key: "YOUR_API_KEY" });
```

---

## 공통 파라미터

대부분의 메서드는 아래 세 가지 파라미터를 공통으로 사용합니다.

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |
| bsns_year | string | 필수 | 사업연도 4자리 (예: `"2023"`) |
| reprt_code | ReportCodeType | 필수 | `11011` 사업보고서 / `11012` 반기보고서 / `11013` 1분기 / `11014` 3분기 |

## 공통 응답 구조

```typescript
interface PeriodicKeyInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
```

모든 목록 항목 모델은 공통 기본 필드를 포함합니다: `rcept_no`(접수번호), `corp_cls`(법인구분), `corp_code`(고유번호), `corp_name`(법인명).

---

## 메서드 목록

| 메서드 | 설명 | 주요 반환 필드 | OpenDart 링크 |
|---|---|---|---|
| `getCapitalChangeStatus` | 증자(감자) 현황 | isu_dcrs_de, isu_dcrs_stle, isu_dcrs_stock_knd, isu_dcrs_qy, isu_dcrs_mstvdv_fval_amount, isu_dcrs_mstvdv_amount, stlm_dt | [DS002&apiId=2019004](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019004) |
| `getDividendInfo` | 배당에 관한 사항 | se, stock_knd, thstrm, frmtrm, lwfr | [DS002&apiId=2019005](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019005) |
| `getTreasuryStockStatus` | 자기주식 취득 및 처분 현황 | se, istc_totqy, vntrgdtl_istc_co, ssl_totqy, trmend_istc_co | [DS002&apiId=2019006](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019006) |
| `getMajorShareholderStatus` | 최대주주 현황 | nm, relate, stock_knd, bsis_posesn_stock_co, bsis_posesn_stock_qota_rt, trmend_posesn_stock_co, trmend_posesn_stock_qota_rt | [DS002&apiId=2019007](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019007) |
| `getMajorShareholderChange` | 최대주주 변동 현황 | nm, relate, change_on, before_prcnt, after_prcnt | [DS002&apiId=2019008](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019008) |
| `getMinorShareholderStatus` | 소액주주 현황 | se, shrholdr_co, shrholdr_tot_co, hold_stock_co, stock_tot_co, hold_stock_qota_rt | [DS002&apiId=2019009](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019009) |
| `getExecutiveStatus` | 임원 현황 | nm, sexdstn, birth_yrmo, ofcps, rgistn_exctv_at, fte_at, chrg_job, main_career, mxmm_edctn, tenure_end_on, stlm_dt | [DS002&apiId=2019010](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019010) |
| `getEmployeeStatus` | 직원 현황 | fo_bbm, sexdstn, reform_bfe_emp_co_cnt, reform_aft_emp_co_cnt, avrg_cnwk_sdytrn, fyer_salary_totamt, jan_salary_am, stlm_dt | [DS002&apiId=2019011](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019011) |
| `getIndividualDirectorCompensation` | 이사·감사의 개인별 보수 현황 | nm, ofcps, mendng_totamt, mendng_totamt_ct_incls_mendng, stlm_dt | [DS002&apiId=2019012](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019012) |
| `getTotalDirectorCompensation` | 이사·감사 전체의 보수 현황 | se, nmpr, mendng_totamt, jan_avrg_mendng_am, stlm_dt | [DS002&apiId=2019013](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019013) |
| `getTop5ExecutiveCompensation` | 보수 상위 5인의 개인별 보수 현황 | nm, ofcps, mendng_totamt, mendng_totamt_ct_incls_mendng, stlm_dt | [DS002&apiId=2019014](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019014) |
| `getExternalInvestmentStatus` | 타법인 출자 현황 | inv_prm, frst_acnt_dt, invstmnt_asset_nm, invstmnt_ko, frst_invstmnt_am, bsis_blce_qy, bsis_blce_am, incrs_dcrs_acqs_qy, incrs_dcrs_acqs_am, incrs_dcrs_dsps_qy, incrs_dcrs_dsps_am, trmend_blce_qy, trmend_blce_am, trmend_blce_qota_rt, recent_bsns_year_fnnr_sttus_tot_assets, recent_bsns_year_fnnr_sttus_thstrm_ntpf | [DS002&apiId=2019015](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019015) |
| `getTotalStockStatus` | 전체 주식의 발행 및 변동 현황 | isu_stock_totqy, now_to_isu_stock_totqy, now_to_dcrs_stock_totqy, redc_qy, profc_qy, rdmstk_qy, now_to_istc_totqy, istc_totqy, tesstk_co, distb_stock_co | [DS002&apiId=2020001](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020001) |
| `getDebtIssuanceStatus` | 채무증권 발행 현황 | bd_tm, bd_knd, bd_nm, isin_cd, stdrd_intr_rate, vlid_intr_rate, issu_de, rpd_de, issu_ccms | [DS002&apiId=2020002](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020002) |
| `getCommercialPaperBalance` | 기업어음증권 미상환 잔액 | opr_de, rpd_de, cp_cnt, opr_amnt | [DS002&apiId=2020003](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020003) |
| `getShortTermBondBalance` | 단기사채 미상환 잔액 | opr_de, rpd_de, st_bond_cnt, opr_amnt | [DS002&apiId=2020004](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020004) |
| `getCorporateBondBalance` | 회사채 미상환 잔액 | bd_tm, bd_nm, bd_knd, issu_de, rpd_de, issu_cn | [DS002&apiId=2020005](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020005) |
| `getHybridBondBalance` | 신종자본증권 미상환 잔액 | hybrid_bd_nm, issu_de, rpd_de, issu_cn | [DS002&apiId=2020006](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020006) |
| `getContingentCapitalBalance` | 조건부 자본증권 미상환 잔액 | cn_knd, issu_de, cnvr_or_rdmstk_mttrs | [DS002&apiId=2020007](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020007) |
| `getAuditorNameAndOpinion` | 회계감사인의 명칭 및 감사의견 | se, bsns_year, auditor_nm, adt_opinion, adt_reprt_spcmnt_matter | [DS002&apiId=2020009](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020009) |
| `getAuditContractInfo` | 감사용역 체결 현황 | bsns_year, auditor_nm, ctr_dt | [DS002&apiId=2020010](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020010) |
| `getNonAuditContractInfo` | 비감사용역 체결 현황 | bsns_year, auditor_nm, ctr_object, ctr_startde, ctr_endde, ctr_amount | [DS002&apiId=2020011](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020011) |
| `getOutsideDirectorStatus` | 사외이사 및 그 변동 현황 | nm, birth_yrmo, ofcps, main_career | [DS002&apiId=2020012](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020012) |
| `getUnregisteredExecutiveCompensation` | 미등기 임원 보수 현황 | nm, ofcps, mendng_totamt, mendng_totamt_ct_incls_mendng | [DS002&apiId=2020013](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020013) |
| `getApprovedDirectorCompensation` | 주주총회 승인 이사·감사 보수 한도 | se, nmpr, mendng_totamt | [DS002&apiId=2020014](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020014) |
| `getDirectorCompensationByType` | 유형별 이사·감사 보수 현황 | sk, mendng_totamt | [DS002&apiId=2020015](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020015) |
| `getPublicOfferingFundUsage` | 공모자금의 사용 내역 | sbd, rspn_purps, realnm_sbd, realnm_usamt, bsns_qy_plan_usamt, accmltoamt_usamt | [DS002&apiId=2020016](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020016) |
| `getPrivatePlacementFundUsage` | 사모자금의 사용 내역 | sbd, rspn_purps, realnm_sbd, realnm_usamt, bsns_qy_plan_usamt, accmltoamt_usamt | [DS002&apiId=2020017](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020017) |
| `getIndividualDirectorCompensationV2` (신규) | 이사·감사의 개인별 보수 현황 (주식기반 보수 포함, V2) | stlm_dt, nm, fscl_year, ofcps, mendng_totamt, stk_bsd_pd_mendng_totamt_qty, stk_opt_exrcsbl_qty, stk_opt_rmn_blce, othr_stk_bsd_cmpn_mkt_vl, rm | [DS002&apiId=hmvAuditIndvdlBySttusV2](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=hmvAuditIndvdlBySttusV2) |
| `getTop5ExecutiveCompensationV2` (신규) | 보수 상위 5인의 개인별 보수 현황 (주식기반 보수 포함, V2) | stlm_dt, nm, fscl_year, ofcps, mendng_totamt, stk_bsd_pd_mendng_totamt_qty, stk_opt_exrcsbl_qty, stk_opt_rmn_blce, othr_stk_bsd_cmpn_mkt_vl | [DS002&apiId=indvdlByPayV2](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=indvdlByPayV2) |

**참고:** **(신규)** 표시된 메서드는 DS002 Ver 2.0에서 새로 추가된 메서드로, 2026년 5월부터 시행됩니다. V2 메서드는 기존 보수 메서드에 주식매수선택권 행사 가능 수량, 잔여 스톡옵션 잔액, 기타 주식기반 보수의 시장가치 등 주식기반 보수 관련 필드를 추가로 제공합니다.

---

## 사용 예시

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
