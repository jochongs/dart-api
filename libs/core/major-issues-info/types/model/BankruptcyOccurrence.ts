import { DartModel } from "../../../../types/DartModel";

export interface BankruptcyOccurrence
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 부도내용
   * 부도내용
   *
   * ## [EN] - Details of bankruptcy
   * Details of bankruptcy
   */
  df_cn: string;

  /**
   * ## [KO] - 부도금액
   * 9,999,999,999
   *
   * ## [EN] - Bankruptcy amount (KRW)
   * 9,999,999,999
   */
  df_amt: string;

  /**
   * ## [KO] - 부도발생은행
   * 부도발생은행
   *
   * ## [EN] - Dishonoring bank
   * Dishonoring bank
   */
  df_bnk: string;

  /**
   * ## [KO] - 최종부도(당좌거래정지)일자
   * 최종부도(당좌거래정지)일자
   *
   * ## [EN] - Date bankruptcy occurred or current account transactions suspended
   * Date bankruptcy occurred or current account transactions suspended
   */
  dfd: string;

  /**
   * ## [KO] - 부도사유 및 경위
   * 부도사유 및 경위
   *
   * ## [EN] - Reasons(or circumstances) for bankruptcy
   * Reasons(or circumstances) for bankruptcy
   */
  df_rs: string;
}
