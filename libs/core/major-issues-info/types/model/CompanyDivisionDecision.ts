import { DartModel } from "../../../../types/DartModel";

export interface CompanyDivisionDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 분할형태
   * 분할형태
   *
   * ## [EN] - Division type
   * Division type
   */
  dv_type: string;

  /**
   * ## [KO] - 신설회사명
   * 신설회사명
   *
   * ## [EN] - New company name
   * New company name
   */
  new_cmp_nm: string;

  /**
   * ## [KO] - 분할비율
   * 분할비율
   *
   * ## [EN] - Division ratio
   * Division ratio
   */
  dv_ratio: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}