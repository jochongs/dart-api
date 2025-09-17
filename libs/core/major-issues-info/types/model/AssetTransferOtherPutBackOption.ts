import { DartModel } from "../../../../types/DartModel";

export interface AssetTransferOtherPutBackOption
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 보고 사유
   * 보고 사유
   *
   * ## [EN] - Reason for report
   * Reason for report
   */
  rp_rsn: string;

  /**
   * ## [KO] - 자산양수ㆍ도 가액
   * 9,999,999,999
   *
   * ## [EN] - Assets transfer/acquisition price
   * 9,999,999,999
   */
  ast_inhtrf_prc: string;
}
