import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 자기주식 취득 및 처분 현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019006
 *
 * ## [EN] - Information on treasury stock acquisition and disposal
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00007
 */
export interface TreasuryStockStatus extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 취득방법 대분류
   * 배당가능이익범위 이내 취득, 기타취득, 총계 등
   *
   * ## [EN] - Level 1 Methods of acquisition
   * Acquisition within profits available for dividends, other acquisition, total, etc.
   */
  acqs_mth1: string;

  /**
   * ## [KO] - 취득방법 중분류
   * 직접취득, 신탁계약에 의한취득, 기타취득, 총계 등
   *
   * ## [EN] - Level 2 Methods of acquisition
   * Direct acquisition, acquisition by trust contract, other acquisition, total, etc.
   */
  acqs_mth2: string;

  /**
   * ## [KO] - 취득방법 소분류
   * 장내직접취득, 장외직접취득, 공개매수, 주식매수청구권행사, 수탁자보유물량,
   * 현물보유율, 기타취득, 소계, 총계 등
   *
   * ## [EN] - Level 3 Methods of acquisition
   * Direct acquisition on exchange, direct acquisition over the counter, tender offer,
   * exercise of appraisal rights, volume held by trustee, spot volume held, other acquisition,
   * subtotal, total, etc.
   */
  acqs_mth3: string;

  /**
   * ## [KO] - 주식 종류
   * 보통주, 우선주 등
   *
   * ## [EN] - Type of shares
   * Type of shares, preferred shares, etc.
   */
  stock_knd: string;

  /**
   * ## [KO] - 기초 수량
   * 기초 수량
   *
   * ## [EN] - Beginning balance
   * Beginning balance
   *
   * @example "9,999,999,999"
   */
  bsis_qy: string;

  /**
   * ## [KO] - 변동 수량 취득
   * 변동 수량 취득
   *
   * ## [EN] - Acquired change in quantity
   * Acquired change in quantity
   *
   * @example "9,999,999,999"
   */
  change_qy_acqs: string;

  /**
   * ## [KO] - 변동 수량 처분
   * 변동 수량 처분
   *
   * ## [EN] - Disposed change in quantity
   * Disposed change in quantity
   *
   * @example "9,999,999,999"
   */
  change_qy_dsps: string;

  /**
   * ## [KO] - 변동 수량 소각
   * 변동 수량 소각
   *
   * ## [EN] - Retired change in quantity
   * Retired change in quantity
   *
   * @example "9,999,999,999"
   */
  change_qy_incnr: string;

  /**
   * ## [KO] - 기말 수량
   * 기말 수량
   *
   * ## [EN] - Closing quantity
   * Closing quantity
   *
   * @example "9,999,999,999"
   */
  trmend_qy: string;

  /**
   * ## [KO] - 비고
   * 비고
   *
   * ## [EN] - Note
   * Note
   */
  rm: string;

  /**
   * ## [KO] - 결산기준일
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
