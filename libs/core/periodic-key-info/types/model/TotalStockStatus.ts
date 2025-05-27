import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 주식의 총수 현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020002
 *
 * ## [EN] - Status of total stock number
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00017
 */
export interface TotalStockStatus extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 구분
   * 구분(증권의종류, 합계, 비고)
   *
   * ## [EN] - Type of Shares
   * Type of Shares (securities class, total, note)
   */
  se: string;

  /**
   * ## [KO] - 발행할 주식의 총수
   * Ⅰ. 발행할 주식의 총수, 9,999,999,999
   *
   * ## [EN] - Total number of shares to be issued
   * Ⅰ. Total number of shares to be issued
   */
  isu_stock_totqy: string;

  /**
   * ## [KO] - 현재까지 발행한 주식의 총수
   * Ⅱ. 현재까지 발행한 주식의 총수, 9,999,999,999
   *
   * ## [EN] - Total number of shares issued to date
   * Ⅱ. Total number of shares issued to date
   */
  now_to_isu_stock_totqy: string;

  /**
   * ## [KO] - 현재까지 감소한 주식의 총수
   * Ⅲ. 현재까지 감소한 주식의 총수, 9,999,999,999
   *
   * ## [EN] - Total number of shares decreased to date
   * Ⅲ. Total number of shares decreased to date
   */
  now_to_dcrs_stock_totqy: string;

  /**
   * ## [KO] - 감자
   * Ⅲ. 현재까지 감소한 주식의 총수(1. 감자), 9,999,999,999
   *
   * ## [EN] - Capital reduction
   * Ⅲ. Total number of shares decreased to date (1. Capital Reduction)
   */
  redc: string;

  /**
   * ## [KO] - 이익소각
   * Ⅲ. 현재까지 감소한 주식의 총수(2. 이익소각), 9,999,999,999
   *
   * ## [EN] - Retirement of earnings
   * Ⅲ. Total number of shares decreased to date (2. Retirement of earnings)
   */
  profit_incnr: string;

  /**
   * ## [KO] - 상환주식의 상환
   * Ⅲ. 현재까지 감소한 주식의 총수(3. 상환주식의 상환), 9,999,999,999
   *
   * ## [EN] - Redemption of redeemable shares
   * Ⅲ. Total number of shares decreased to date (3. Redemption of Redeemable Shares)
   */
  rdmstk_repy: string;

  /**
   * ## [KO] - 기타
   * Ⅲ. 현재까지 감소한 주식의 총수(4. 기타), 9,999,999,999
   *
   * ## [EN] - Other
   * Ⅲ. Total number of shares decreased to date (4. Other)
   */
  etc: string;

  /**
   * ## [KO] - 발행주식의 총수
   * Ⅳ. 발행주식의 총수 (Ⅱ-Ⅲ), 9,999,999,999
   *
   * ## [EN] - Total number of issued stocks(Ⅱ-Ⅲ)
   * Ⅳ. Total number of issued stocks(Ⅱ-Ⅲ)
   */
  istc_totqy: string;

  /**
   * ## [KO] - 자기주식수
   * Ⅴ. 자기주식수, 9,999,999,999
   *
   * ## [EN] - Number of treasury stocks
   * Number of treasury stocks
   */
  tesstk_co: string;

  /**
   * ## [KO] - 유통주식수
   * Ⅵ. 유통주식수 (Ⅳ-Ⅴ), 9,999,999,999
   *
   * ## [EN] - Number of shares in circulation
   * Ⅵ. Number of shares in circulation(Ⅳ-Ⅴ)
   */
  distb_stock_co: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
