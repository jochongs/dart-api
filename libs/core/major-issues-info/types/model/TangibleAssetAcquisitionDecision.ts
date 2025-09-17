import { DartModel } from "../../../../types/DartModel";

export interface TangibleAssetAcquisitionDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 피양수회사명
   * 피양수회사명
   *
   * ## [EN] - Acquired company name
   * Acquired company name
   */
  aq_cmp_nm: string;

  /**
   * ## [KO] - 양수대상자산
   * 양수대상자산
   *
   * ## [EN] - Target asset for acquisition
   * Target asset for acquisition
   */
  aq_trg_ast: string;

  /**
   * ## [KO] - 양수금액
   * 양수금액
   *
   * ## [EN] - Acquisition amount
   * Acquisition amount
   */
  aq_amt: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}