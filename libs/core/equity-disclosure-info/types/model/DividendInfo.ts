import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 배당에 관한 사항
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019005
 *
 * ## [EN] - Dividend information
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00006
 */
export interface DividendInfo extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 구분
   * 유상증자(주주배정), 전환권행사 등
   *
   * ## [EN] - Category
   * Paid-in capital increase (shareholder allocation), exercise of conversion rights, etc.
   */
  se: string;

  /**
   * ## [KO] - 주식 종류
   * 보통주 등
   *
   * ## [EN] - ype of Shares
   * Common stock, etc.
   */
  stock_kng: string;

  /**
   * ## [KO] - 당기
   * 당기
   *
   * ## [EN] - Current term
   * Current term
   *
   * @example "9,999,999,999"
   */
  thstrm: string;

  /**
   * ## [KO] - 전기
   * 전기
   *
   * ## [EN] - Previous term
   * Previous term
   *
   * @example "9,999,999,999"
   *
   */
  frmtrm: string;

  /**
   * ## [KO] - 전전기
   * 전전기
   *
   * ## [EN] - Two fiscal years prior
   * Two fiscal years prior
   *
   * @example "9,999,999,999"
   */
  lwfr: string;

  /**
   * ## [KO] 결산기준일
   * 결산기준일
   *
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * Settlement date
   *
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
