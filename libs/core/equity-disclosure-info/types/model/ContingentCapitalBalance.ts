import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 조건부 자본증권 미상환 잔액
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020008
 *
 * ## [EN] - Outstanding balance on contingent capital securities
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00023
 */
export interface ContingentCapitalBalance extends BasicPeriodicReportsInfo {
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
   * ## [KO] - 1년초과 2년이하
   * 9,999,999,999
   *
   * ## [EN] - 1 to 2 years
   * 9,999,999,999
   */
  yy1_excess_yy2_below: string;

  /**
   * ## [KO] - 2년초과 3년이하
   * 9,999,999,999
   *
   * ## [EN] - 2 to 3 years
   * 9,999,999,999
   */
  yy2_excess_yy3_below: string;

  /**
   * ## [KO] - 3년초과 4년이하
   * 9,999,999,999
   *
   * ## [EN] - 3 to 4 years
   * 9,999,999,999
   */
  yy3_excess_yy4_below: string;

  /**
   * ## [KO] - 4년초과 5년이하
   * 9,999,999,999
   *
   * ## [EN] - 4 to 5 years
   * 9,999,999,999
   */
  yy4_excess_yy5_below: string;

  /**
   * ## [KO] - 5년초과 10년이하
   * 9,999,999,999
   *
   * ## [EN] - 5 to 10 years
   * 9,999,999,999
   */
  yy5_excess_yy10_below: string;

  /**
   * ## [KO] - 10년초과 20년이하
   * 9,999,999,999
   *
   * ## [EN] - 10 to 20 years
   * 9,999,999,999
   */
  yy10_excess_yy20_below: string;

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
   * ## [EN] - Over 30 years
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
