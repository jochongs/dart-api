import { ReportCodeType } from "../ReportCodeType";

/**
 * ## [KO]
 * `getTreasuryStockStatus` 메서드 요청 파라미터
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019006#:~:text=XML-,%EC%9A%94%EC%B2%AD,-%EC%9D%B8%EC%9E%90
 *
 * ## [EN]
 * `getTreasuryStockStatus` request parameters
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00007#:~:text=XML-,Requested,-variables
 */
export interface GetTreasuryStockStatusParams {
  /**
   * ## [KO] - 고유번호
   * 공시대상회사의 고유번호(8자리)
   *
   * ## [EN] - Corporation code
   * Corporation code of disclosing company (8 digits)
   */
  corp_code: string;

  /**
   * ## [KO] - 사업연도(4자리)
   * ※ 2015년 이후 부터 정보제공
   *
   * ## [EN] - Fiscal year (4 digits)
   * ※ Information provided since 2015
   */
  bsns_year: string;

  /**
   * ## [KO] - 보고서 코드
   * - 11013: 1분기보고서
   * - 11012: 반기보고서
   * - 11014: 3분기보고서
   * - 11011: 사업보고서
   *
   * ## [EN] - Report code
   * - 11013: First Quarterly Report
   * - 11012: Semi-annual Report
   * - 11014: Third Quarterly Report
   * - 11011: Annual Report
   */
  reprt_code: ReportCodeType;
}
