/**
 * ## [KO] - 개인별 보수현황 Ver 2.0의 주식기준보상 상세 내역
 * `group[].list[]`에 포함되는 항목입니다. 금액과 수량은 쉼표 또는 `-`를 포함할 수 있습니다.
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2026002
 *
 * ## [EN] - Stock-based compensation details in individual remuneration Ver 2.0
 * An item in `group[].list[]`. Amounts and quantities may contain commas or `-`.
 */
export interface StockBasedCompensationV2 {
  /**
   * ## [KO] - 보수총액 중 주식기준보상 지급액 - 종류
   *
   * ## [EN] - Stock-based compensation paid as part of total remuneration - type
   */
  stk_bsd_pd_mendng_totamt_knd: string;

  /**
   * ## [KO] - 보수총액 중 주식기준보상 지급액 - 수량
   *
   * ## [EN] - Stock-based compensation paid as part of total remuneration - quantity
   */
  stk_bsd_pd_mendng_totamt_qty: string;

  /**
   * ## [KO] - 보수총액 중 주식기준보상 지급액 - 금액
   *
   * ## [EN] - Stock-based compensation paid as part of total remuneration - amount
   */
  stk_bsd_pd_mendng_totamt_amt: string;

  /**
   * ## [KO] - 주식매수선택권 행사가능수량
   *
   * ## [EN] - Exercisable stock option quantity
   */
  stk_opt_exrcsbl_qty: string;

  /**
   * ## [KO] - 주식매수선택권 행사불가수량
   *
   * ## [EN] - Unexercisable stock option quantity
   */
  stk_opt_unexrcsbl_qty: string;

  /**
   * ## [KO] - 주식매수선택권 행사가격
   *
   * ## [EN] - Stock option exercise price
   */
  stk_opt_exrc_pr: string;

  /**
   * ## [KO] - 주식매수선택권 잔여금액
   *
   * ## [EN] - Stock option remaining amount
   */
  stk_opt_rmn_blce: string;

  /**
   * ## [KO] - 그 외 주식기준 보상 미지급수량
   *
   * ## [EN] - Unpaid quantity of other stock-based compensation
   */
  othr_stk_bsd_cmpn_unpyd_qty: string;

  /**
   * ## [KO] - 그 외 주식기준 보상 시장가치
   *
   * ## [EN] - Market value of other stock-based compensation
   */
  othr_stk_bsd_cmpn_mkt_vl: string;

  /**
   * ## [KO] - 비고
   * 응답에서 생략될 수 있습니다.
   *
   * ## [EN] - Remarks
   * May be omitted from the response.
   */
  rm?: string;
}
