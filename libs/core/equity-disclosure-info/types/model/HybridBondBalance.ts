import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 신종자본증권 미상환 잔액
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020007
 *
 * ## [EN] - Outstanding balance on hybrid bonds
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00022
 */
export interface HybridBondBalance extends BasicPeriodicReportsInfo {
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
   * ## [KO] - 1년 이하
   * 9,999,999,999
   *
   * ## [EN] - 1 year or less
   * 9,999,999,999
   */
  yy1_below: string;

  /**
   * ## [KO] - 1년초과 5년이하
   * 9,999,999,999
   *
   * ## [EN] - 1 to 5 years
   * 9,999,999,999
   */
  yy1_excess_yy5_below: string;

  /**
   * ## [KO] - 5년초과 10년이하
   * 9,999,999,999
   *
   * ## [EN] - 5 to 10 years
   * 9,999,999,999
   */
  yy5_excess_yy10_below: string;

  /**
   * ## [KO] - 10년초과 15년이하
   * 9,999,999,999
   *
   * ## [EN] - 10 to 15 years
   * 9,999,999,999
   */
  yy10_excess_yy15_below: string;

  /**
   * ## [KO] - 15년초과 20년이하
   * 9,999,999,999
   *
   * ## [EN] - 15 to 20 years
   * 9,999,999,999
   */
  yy15_excess_yy20_below: string;

  /**
   * ## [KO] - 20년초과 30년이하
   * 9,999,999,999
   *
   * ## [EN] - 20 to 30 years
   * 9,999,999,999
   */
  yy20_excess_yy30_below: string;

  /**
   * ## [KO] - 30년초과
   * 9,999,999,999
   *
   * ## [EN] - More than 30 years
   * 9,999,999,999
   */
  yy30_excess: string;

  /**
   * ## [KO] - 합계
   * 9,999,999,999
   *
   * ## [EN] - Total
   * 9,999,999,999
   */
  sm: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
