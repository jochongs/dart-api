import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 소액주주 현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019009
 *
 * ## EN - Information on minority shareholders
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00010
 */
export interface MinorShareholderStatus extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 구분
   * 소액주주
   *
   * ## [EN] - 	Category
   * Minority shareholders
   */
  se: string;

  /**
   * ## [KO] - 주주 수
   * 9,999,999,999
   *
   * ## [EN] - Shareholders (Number of minority shareholders)
   * 9,999,999,999
   */
  shrholdr_co: string;

  /**
   * ## [KO] - 전체 주주 수
   * 9,999,999,999
   *
   * ## [EN] - 	Shareholders (Total number of shareholders)
   * 9,999,999,999
   */
  shrholdr_tot_co: string;

  /**
   * ## [KO] - 	주주 비율
   * 0.00
   *
   * ## [EN] - Shareholders (Ratio(%))
   * 0.00
   */
  shrholdr_rate: string;

  /**
   * ## [KO] - 보유 주식수
   * 9,999,999,999
   *
   * ## [EN] - Shares owned (Number of minority shareholders)
   * 9,999,999,999
   */
  hold_stock_co: string;

  /**
   * ## [KO] - 총발행 주식수
   * 9,999,999,999
   *
   * ## [EN] - Shares owned (Total number of shareholders)
   * 9,999,999,999
   */
  stock_tot_co: string;

  /**
   * ## [KO] - 보유 주식 비율
   * 0.00
   *
   * ## [EN] - Shares owned (Ratio(%))
   * 0.00
   */
  hold_stock_rate: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
