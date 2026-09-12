# DS005 - DartMajorIssuesInfo

주요사항보고서의 주요 정보를 제공합니다. 주요사항보고서는 상장법인이 유상증자, 합병, 소송 등 중요한 경영 사항이 발생할 때 의무적으로 제출하는 보고서입니다.

**OpenDart 그룹:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS005](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS005)

```typescript
import { DartMajorIssuesInfo } from "dart-api";

const dart = new DartMajorIssuesInfo({ key: "YOUR_API_KEY" });
```

---

## 공통 파라미터

모든 메서드는 아래 파라미터를 공통으로 사용합니다.

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |
| bgn_de | string (YYYYMMDD) | 필수 | 검색 시작일 |
| end_de | string (YYYYMMDD) | 필수 | 검색 종료일 |

## 공통 응답 구조

```typescript
interface MajorIssuesInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
```

모든 목록 항목 모델은 공통 기본 필드를 포함합니다: `rcept_no`(접수번호), `corp_cls`(법인구분), `corp_code`(고유번호), `corp_name`(법인명).

---

## 메서드 목록

| 메서드 | 설명 | 주요 모델 필드 | OpenDart 링크 |
|---|---|---|---|
| `getPaidInCapitalIncreaseDecision` | 유상증자 결정 | nstk_ostk_cnt, nstk_ostk_fval_amount, nstk_stkpd_amount, nstk_stk_inr_amount | [DS005&apiId=2019022](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019022) |
| `getBonusIssueDecision` | 무상증자 결정 | nstk_ostk_cnt, nstk_ostk_fval_amount, bsis_rdtt_ostk_co | [DS005&apiId=2019023](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019023) |
| `getCapitalReductionDecision` | 감자 결정 | nstk_ostk_cnt, nstk_ostk_fval_amount, bddd | [DS005&apiId=2019024](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019024) |
| `getConvertibleBondIssueDecision` | 전환사채(CB) 발행 결정 | bd_tm, bd_knd, bd_nm, fta, slta, bddd | [DS005&apiId=2019025](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019025) |
| `getBondWithWarrantIssueDecision` | 신주인수권부사채(BW) 발행 결정 | bd_tm, bd_knd, bd_nm, fta, slta | [DS005&apiId=2019026](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019026) |
| `getExchangeableBondIssueDecision` | 교환사채(EB) 발행 결정 | bd_tm, bd_knd, bd_nm, fta, slta | [DS005&apiId=2019027](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019027) |
| `getCombinedCapitalIncreaseDecision` | 주요사항보고서(증자/감자 종합) | nstk_ostk_cnt, nstk_ostk_fval_amount | [DS005&apiId=2019028](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019028) |
| `getCompanyMergerDecision` | 합병 결정 | mrgn_cmpn_nm, mrgn_stk_knd, bddd | [DS005&apiId=2019029](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019029) |
| `getBusinessAcquisitionDecision` | 영업 양수 결정 | acqs_cmpn_nm, acqs_asset_nm, acqs_amount, bddd | [DS005&apiId=2019030](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019030) |
| `getBusinessTransferDecision` | 영업 양도 결정 | trnsf_cmpn_nm, trnsf_asset_nm, trnsf_amount, bddd | [DS005&apiId=2019031](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019031) |
| `getTangibleAssetAcquisitionDecision` | 유형자산 양수 결정 | acqs_asset_nm, acqs_amount, bddd | [DS005&apiId=2019032](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019032) |
| `getTangibleAssetTransferDecision` | 유형자산 양도 결정 | trnsf_asset_nm, trnsf_amount, bddd | [DS005&apiId=2019033](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019033) |
| `getOtherCompanyStockAndInvestmentSecuritiesAcquisitionDecision` | 타법인 주식 및 출자증권 취득 결정 | acqs_cmpn_nm, acqs_stk_knd, acqs_qy, acqs_amount, bddd | [DS005&apiId=2019034](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019034) |
| `getOtherCompanyStockAndInvestmentSecuritiesTransferDecision` | 타법인 주식 및 출자증권 처분 결정 | trnsf_cmpn_nm, trnsf_stk_knd, trnsf_qy, trnsf_amount, bddd | [DS005&apiId=2019035](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019035) |
| `getTreasuryStockAcquisitionDecision` | 자기주식 취득 결정 | acqs_mth1, acqs_stk_knd, acqs_stk_cnt, acqs_exptd_amount | [DS005&apiId=2019036](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019036) |
| `getTreasuryStockDisposalDecision` | 자기주식 처분 결정 | dsps_mth1, dsps_stk_knd, dsps_stk_cnt, dsps_exptd_amount | [DS005&apiId=2019037](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019037) |
| `getCompanyDivisionDecision` | 회사 분할 결정 | dvdnd_mth, dvdnd_mttrs, bddd | [DS005&apiId=2019038](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019038) |
| `getCompanyDivisionMergerDecision` | 분할합병 결정 | dvdnd_mth, mrgn_cmpn_nm, bddd | [DS005&apiId=2019039](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019039) |
| `getStockExchangeTransferDecision` | 주식의 포괄적 교환·이전 결정 | exstk_cmpn_nm, bddd | [DS005&apiId=2019040](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019040) |
| `getDissolutionCauseOccurrence` | 해산 사유 발생 | ds_rsn, ds_dt | [DS005&apiId=2019041](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019041) |
| `getRehabilitationProcedureApplication` | 회생절차 개시 신청 | rpllc_de, rpllc_rsn | [DS005&apiId=2019042](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019042) |
| `getLawsuitFiling` | 소송 등의 제기 | lwst_nm, lwr_nm, ltwt_knd, ltwt_amt, ltwt_rsn, rqstr_sbc_rcptn_dt, ltwt_cts | [DS005&apiId=2019043](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019043) |
| `getOverseasSecuritiesListingDecision` | 해외 증권의 국내 상장 결정 | lst_exch_nm, lst_stk_knd, lst_stk_cnt, bddd | [DS005&apiId=2019044](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019044) |
| `getOverseasSecuritiesDelistingDecision` | 해외 증권의 국내 상장 폐지 결정 | dlst_exch_nm, dlst_stk_knd, dlst_dt | [DS005&apiId=2019045](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019045) |
| `getOverseasSecuritiesListing` | 해외 증권의 국내 상장 (완료) | lst_exch_nm, lst_stk_knd, lst_dt, lst_stk_cnt | [DS005&apiId=2019046](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019046) |
| `getOverseasSecuritiesDelisting` | 해외 증권의 국내 상장 폐지 (완료) | dlst_exch_nm, dlst_stk_knd, dlst_dt | [DS005&apiId=2019047](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019047) |
| `getTreasuryStockAcquisitionTrustContractConclusionDecision` | 자기주식 취득 신탁계약 체결 결정 | ctr_cmpn_nm, ctr_amount, ctr_dt | [DS005&apiId=2019048](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019048) |
| `getTreasuryStockAcquisitionTrustContractCancellationDecision` | 자기주식 취득 신탁계약 해지 결정 | ctr_cmpn_nm, ccls_rsn, ccls_dt | [DS005&apiId=2019049](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019049) |
| `getCreditorBankManagementProcedureCommencement` | 채권은행 관리절차 개시 | bgn_dt, bgn_rsn, cmpn_nm | [DS005&apiId=2019050](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019050) |
| `getCreditorBankManagementProcedureTermination` | 채권은행 관리절차 종료 | end_dt, end_rsn, cmpn_nm | [DS005&apiId=2019051](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2019051) |
| `getBankruptcyOccurrence` | 부도 발생 | df_cn, df_amt, df_bnk, dfd, df_rs | [DS005&apiId=2020019](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020019) |
| `getSuspensionOfBusiness` | 영업 정지 | sus_rsn, sus_dt, exp_rst_dt | [DS005&apiId=2020020](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020020) |
| `getAssetTransferOtherPutBackOption` | 풋백옵션 조건부 자산 양도 | trnsf_asset_nm, trnsf_amount, bddd, ptbk_cnd | [DS005&apiId=2020021](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020021) |
| `getStockRelatedBondAcquisitionDecision` | 주식 관련 사채 취득 결정 | acqs_cmpn_nm, acqs_bd_knd, acqs_amount, bddd | [DS005&apiId=2020022](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020022) |
| `getStockRelatedBondTransferDecision` | 주식 관련 사채 처분 결정 | trnsf_cmpn_nm, trnsf_bd_knd, trnsf_amount, bddd | [DS005&apiId=2020023](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020023) |
| `getWriteDownContingentConvertibleBondIssueDecision` | 상각형 조건부 자본증권(코코본드) 발행 결정 | bd_tm, bd_knd, bd_nm, fta, slta, bddd | [DS005&apiId=2020024](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020024) |

---

## 사용 예시

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
