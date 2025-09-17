import { DartModel } from "../../../../types/DartModel";

export interface CompanyDivisionMergerDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 분할합병형태
   * 분할합병형태
   *
   * ## [EN] - Division merger type
   * Division merger type
   */
  dvmg_type: string;

  /**
   * ## [KO] - 합병회사명
   * 합병회사명
   *
   * ## [EN] - Merger company name
   * Merger company name
   */
  mg_cmp_nm: string;

  /**
   * ## [KO] - 분할합병비율
   * 분할합병비율
   *
   * ## [EN] - Division merger ratio
   * Division merger ratio
   */
  dvmg_ratio: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}