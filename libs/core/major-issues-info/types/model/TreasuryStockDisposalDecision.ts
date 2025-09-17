import { DartModel } from "../../../../types/DartModel";

export interface TreasuryStockDisposalDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 처분방법
   * 처분방법
   *
   * ## [EN] - Disposal method
   * Disposal method
   */
  dp_mthd: string;

  /**
   * ## [KO] - 처분주식의 종류
   * 처분주식의 종류
   *
   * ## [EN] - Type of disposed stock
   * Type of disposed stock
   */
  dp_stk_knd: string;

  /**
   * ## [KO] - 처분주식수
   * 처분주식수
   *
   * ## [EN] - Number of disposed shares
   * Number of disposed shares
   */
  dp_stk_cnt: string;

  /**
   * ## [KO] - 처분가액
   * 처분가액
   *
   * ## [EN] - Disposal value
   * Disposal value
   */
  dp_amt: string;

  /**
   * ## [KO] - 처분사유
   * 처분사유
   *
   * ## [EN] - Disposal reason
   * Disposal reason
   */
  dp_rsn: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}