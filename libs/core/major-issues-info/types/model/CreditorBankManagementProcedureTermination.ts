import { DartModel } from "../../../../types/DartModel";

export interface CreditorBankManagementProcedureTermination
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 관리절차명칭
   * 관리절차명칭
   *
   * ## [EN] - Management procedure name
   * Management procedure name
   */
  mngt_pcd_nm: string;

  /**
   * ## [KO] - 채권은행등
   * 채권은행등
   *
   * ## [EN] - Creditor bank, etc.
   * Creditor bank, etc.
   */
  crd_bnk_etc: string;

  /**
   * ## [KO] - 중단일자
   * 중단일자
   *
   * ## [EN] - Termination date
   * Termination date
   */
  sp_dt: string;
}