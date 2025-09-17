import { DartModel } from "../../../../types/DartModel";

export interface CompanyMergerDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 합병형태
   * 합병형태
   *
   * ## [EN] - Merger type
   * Merger type
   */
  mg_type: string;

  /**
   * ## [KO] - 합병회사명
   * 합병회사명
   *
   * ## [EN] - Merger company name
   * Merger company name
   */
  mg_cmp_nm: string;

  /**
   * ## [KO] - 합병비율
   * 합병비율
   *
   * ## [EN] - Merger ratio
   * Merger ratio
   */
  mg_ratio: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}