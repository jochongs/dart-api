import { DartModel } from "../../../../types/DartModel";

export interface TreasuryStockAcquisitionTrustContractCancellationDecision
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
   * ## [KO] - 신탁해지일자
   * 신탁해지일자
   *
   * ## [EN] - Trust cancellation date
   * Trust cancellation date
   */
  trust_cc_dt: string;

  /**
   * ## [KO] - 해지사유
   * 해지사유
   *
   * ## [EN] - Cancellation reason
   * Cancellation reason
   */
  cc_rsn: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}