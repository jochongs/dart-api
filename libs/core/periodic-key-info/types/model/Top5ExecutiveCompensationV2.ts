import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 개인별 보수지급 금액(5억이상 상위5인) Ver 2.0
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2026002
 *
 * ## [EN] - Individual remuneration amounts (top 5 over KRW 500 million) Ver 2.0
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=2026002
 */
export interface Top5ExecutiveCompensationV2 extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;

  /**
   * ## [KO] - 이름
   * 홍길동
   *
   * ## [EN] - Name
   * Hong Gildong
   */
  nm: string;

  /**
   * ## [KO] - 당기/전기/전전기 구분
   *
   * ## [EN] - Current/previous/prior fiscal year classification
   */
  fscl_year: string;

  /**
   * ## [KO] - 직위
   * 대표이사 등
   *
   * ## [EN] - Position
   * CEO, etc.
   */
  ofcps: string;

  /**
   * ## [KO] - 보수 총액
   * 9,999,999,999
   *
   * ## [EN] - Total remuneration
   * 9,999,999,999
   */
  mendng_totamt: string;

  /**
   * ## [KO] - 주식기준보상 지급액 - 수량
   *
   * ## [EN] - Stock-based compensation payment - quantity
   */
  stk_bsd_pd_mendng_totamt_qty: string;

  /**
   * ## [KO] - 주식매수선택권 행사가능 수량
   *
   * ## [EN] - Stock option exercisable quantity
   */
  stk_opt_exrcsbl_qty: string;

  /**
   * ## [KO] - 주식매수선택권 잔여 잔액
   *
   * ## [EN] - Stock option remaining balance
   */
  stk_opt_rmn_blce: string;

  /**
   * ## [KO] - 기타 주식기준보상 시가
   *
   * ## [EN] - Other stock-based compensation market value
   */
  othr_stk_bsd_cmpn_mkt_vl: string;
}
