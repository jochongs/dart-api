import { DartModel } from "../../../../types/DartModel";

export interface TreasuryStockAcquisitionDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 취득방법
   * 취득방법
   *
   * ## [EN] - Acquisition method
   * Acquisition method
   */
  aq_mthd: string;

  /**
   * ## [KO] - 취득주식의 종류
   * 취득주식의 종류
   *
   * ## [EN] - Type of acquired stock
   * Type of acquired stock
   */
  aq_stk_knd: string;

  /**
   * ## [KO] - 취득주식수
   * 취득주식수
   *
   * ## [EN] - Number of acquired shares
   * Number of acquired shares
   */
  aq_stk_cnt: string;

  /**
   * ## [KO] - 취득가액
   * 취득가액
   *
   * ## [EN] - Acquisition value
   * Acquisition value
   */
  aq_amt: string;

  /**
   * ## [KO] - 취득사유
   * 취득사유
   *
   * ## [EN] - Acquisition reason
   * Acquisition reason
   */
  aq_rsn: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}