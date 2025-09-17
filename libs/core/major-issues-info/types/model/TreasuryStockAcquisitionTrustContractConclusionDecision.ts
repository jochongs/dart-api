import { DartModel } from "../../../../types/DartModel";

export interface TreasuryStockAcquisitionTrustContractConclusionDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 신탁업자
   * 신탁업자
   *
   * ## [EN] - Trust company
   * Trust company
   */
  trust_cmp: string;

  /**
   * ## [KO] - 신탁기간
   * 신탁기간
   *
   * ## [EN] - Trust period
   * Trust period
   */
  trust_prd: string;

  /**
   * ## [KO] - 취득주식의 종류
   * 취득주식의 종류
   *
   * ## [EN] - Type of acquired stock
   * Type of acquired stock
   */
  aq_stk_knd: string;

  /**
   * ## [KO] - 취득예정주식수
   * 취득예정주식수
   *
   * ## [EN] - Expected number of shares to acquire
   * Expected number of shares to acquire
   */
  aq_ex_stk_cnt: string;

  /**
   * ## [KO] - 취득예정가액
   * 취득예정가액
   *
   * ## [EN] - Expected acquisition value
   * Expected acquisition value
   */
  aq_ex_amt: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}