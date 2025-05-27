import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 단기사채 미상환 잔액
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020005
 *
 * ## [EN] - Outstanding balance on short-term bonds
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00020
 */
export interface ShortTermBondBalance extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 잔여만기
   * 잔여만기
   *
   * ## [EN] - Remaining maturity
   * Remaining maturity
   */
  remndr_exprtn1: string;

  /**
   * ## [KO] - 잔여만기
   * 잔여만기
   *
   * ## [EN] - Remaining maturity
   * Remaining maturity
   */
  remndr_exprtn2: string;

  /**
   * ## [KO] - 10일 이하
   * 9,999,999,999
   *
   * ## [EN] - 10 days or less
   * 9,999,999,999
   */
  de10_below: string;

  /**
   * ## [KO] - 10일초과 30일이하
   * 9,999,999,999
   *
   * ## [EN] - 	10 to 30 days
   * 9,999,999,999
   */
  de10_excess_de30_below: string;

  /**
   * ## [KO] - 30일초과 90일이하
   * 9,999,999,999
   *
   * ## [EN] - 30 to 90 days
   * 9,999,999,999
   */
  de30_excess_de90_below: string;

  /**
   * ## [KO] - 90일초과 180일이하
   * 9,999,999,999
   *
   * ## [EN] - 90 to 180 days
   * 9,999,999,999
   */
  de90_excess_de180_below: string;

  /**
   * ## [KO] - 180일초과 1년이하
   * 9,999,999,999
   *
   * ## [EN] - 180 days to 1 year
   * 9,999,999,999
   */
  de180_excess_yy1_below: string;

  /**
   * ## [KO] - 합계
   * 9,999,999,999
   *
   * ## [EN] - Total
   * 9,999,999,999
   */
  sm: string;

  /**
   * ## [KO] - 발행 한도
   * 9,999,999,999
   *
   * ## [EN] - Issuance limit
   * 9,999,999,999
   */
  isu_lmt: string;

  /**
   * ## [KO] - 잔여 한도
   * 9,999,999,999
   *
   * ## [EN] - Remaining limit
   * 9,999,999,999
   */
  remndr_lmt: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
