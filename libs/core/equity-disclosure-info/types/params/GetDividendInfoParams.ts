import { ReportCodeType } from "../ReportCodeType";

/**
 * ## [KO]
 * `getDividendInfo` 요청 인자
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019005#:~:text=XML-,%EC%9A%94%EC%B2%AD,-%EC%9D%B8%EC%9E%90
 *
 * ## [EN]
 * `getDividendInfo` request parameters
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00006#:~:text=XML-,Requested,-variables
 */
export interface GetDividendInfoParams {
  /**
   * ## [KO] - 고유번호
   * 공시대상회사의 고유번호(8자리)
   *
   * ## [EN] - Corporation code
   * Corporation code of disclosing company (8 digits)
   */
  corp_code: string;

  /**
   * ## [KO] - 사업연도
   * 사업연도(4자리)
   *
   * ※ 2015년 이후 부터 정보제공
   *
   * ## [EN] - Fiscal year
   * Fiscal year (4 digits)
   *
   * ※ Information provided since 2015
   */
  bsns_year: string;

  /**
   * ## [KO]
   * 보고서 코드
   * - 1분기보고서 : 11013
   * - 반기보고서 : 11012
   * - 3분기보고서 : 11014
   * - 사업보고서 : 11011
   *
   * ## [EN]
   * Report code
   * - First Quarterly Report : 11013
   * - Semi-annual Report : 11012
   * - Third Quarterly Report : 11014
   * - Annual Report : 11011
   */
  reprt_code: ReportCodeType;
}
