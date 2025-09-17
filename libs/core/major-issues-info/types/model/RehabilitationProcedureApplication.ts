import { DartModel } from "../../../../types/DartModel";

export interface RehabilitationProcedureApplication
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 신청인 (회사와의 관계)
   * 신청인 (회사와의 관계)
   *
   * ## [EN] - Applicant (Relationship with company)
   * Applicant (Relationship with company)
   */
  apcnt: string;

  /**
   * ## [KO] - 관할법원
   * 관할법원
   *
   * ## [EN] - Competent court
   * Competent court
   */
  cpct: string;

  /**
   * ## [KO] - 신청사유
   * 신청사유
   *
   * ## [EN] - Reason for application
   * Reason for application
   */
  rq_rs: string;

  /**
   * ## [KO] - 신청일자
   * 신청일자
   *
   * ## [EN] - Application date
   * Application date
   */
  rqd: string;

  /**
   * ## [KO] - 향후대책 및 일정
   * 향후대책 및 일정
   *
   * ## [EN] - Future measures and schedule
   * Future measures and schedule
   */
  ft_ctp_sc: string;
}
