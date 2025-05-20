import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 증자(감자) 현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019004
 *
 * ## [EN] - Status of capital increase (reduction)
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00005
 */
export interface CapitalChangeStatus extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 주식발행 감소일자
   * 주식발행 감소일자
   *
   * ## [EN] - Stock issuance(reduction) date
   * Stock issuance(reduction) date
   */
  isu_dcrs_de: string;

  /**
   * ## [KO] - 발행 감소 형태
   * 발행 감소 형태
   *
   * ## [EN] - Issuance(reduction) type
   * Issuance(reduction) type
   */
  isu_dcrs_stle: string;

  /**
   * ## [KO] - 발행 감소 주식 종류
   * 발행 감소 주식 종류
   *
   * ## [EN] - Details of issued (reduced) stocks ( Class of Shares )
   * Details of issued (reduced) stocks ( Class of Shares )
   */
  isu_dcrs_stock_knd: string;

  /**
   * ## [KO] - 발행 감소 수량
   * 발행 감소 수량
   *
   * ## [EN] - Details of issued (reduced) stocks( Quantity )
   * Details of issued (reduced) stocks( Quantity )
   *
   * @example "9,999,999,999"
   */
  isu_dcrs_qy: string;

  /**
   * ## [KO] - 발행 감소 주당 액면 가액
   * 발행 감소 주당 액면 가액
   *
   * ## [EN] - Details of issued (reduced) stocks( Par value )
   * Details of issued (reduced) stocks( Par value )
   *
   * @example "9,999,999,999"
   */
  isu_dcrs_mstvdv_fval_amount: string;

  /**
   * ## [KO] - 발행 감소 주당 가액
   * 발행 감소 주당 가액
   *
   * ## [EN] - Details of issued (reduced) stocks( Issued(reduced)value per share)
   * Details of issued (reduced) stocks( Issued(reduced)value per share)
   *
   * @example "9,999,999,999"
   */
  isu_dcrs_mstvdv_amount: string;

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
