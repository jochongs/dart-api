import { DartModel } from "../../../../types/DartModel";

export interface TangibleAssetTransferDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 양도대상회사명
   * 양도대상회사명
   *
   * ## [EN] - Transfer target company name
   * Transfer target company name
   */
  trf_trg_cmp_nm: string;

  /**
   * ## [KO] - 양도대상자산
   * 양도대상자산
   *
   * ## [EN] - Target asset for transfer
   * Target asset for transfer
   */
  trf_trg_ast: string;

  /**
   * ## [KO] - 양도금액
   * 양도금액
   *
   * ## [EN] - Transfer amount
   * Transfer amount
   */
  trf_amt: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}