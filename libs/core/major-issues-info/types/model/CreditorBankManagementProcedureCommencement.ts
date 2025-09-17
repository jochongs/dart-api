import { DartModel } from "../../../../types/DartModel";

export interface CreditorBankManagementProcedureCommencement
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 관리절차개시 결정일자
   * 관리절차개시 결정일자
   *
   * ## [EN] - Decision date to initiate the management process
   * Decision date to initiate the management process
   */
  mngt_pcbg_dd: string;

  /**
   * ## [KO] - 관리기관
   * 관리기관
   *
   * ## [EN] - Managing institution
   * Managing institution
   */
  mngt_int: string;

  /**
   * ## [KO] - 관리기간
   * 관리기간
   *
   * ## [EN] - Management period
   * Management period
   */
  mngt_pd: string;

  /**
   * ## [KO] - 관리사유
   * 관리사유
   *
   * ## [EN] - Cause of management
   * Cause of management
   */
  mngt_rs: string;

  /**
   * ## [KO] - 확인일자
   * 확인일자
   *
   * ## [EN] - Confirmation date
   * Confirmation date
   */
  cfd: string;
}