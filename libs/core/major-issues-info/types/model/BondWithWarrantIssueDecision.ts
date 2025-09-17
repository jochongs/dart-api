import { DartModel } from "../../../../types/DartModel";

export interface BondWithWarrantIssueDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 신주인수권부사채권의 종류
   * 신주인수권부사채권의 종류
   *
   * ## [EN] - Type of bond with warrant
   * Type of bond with warrant
   */
  bdwt_knd: string;

  /**
   * ## [KO] - 권면총액
   * 권면총액
   *
   * ## [EN] - Total face value
   * Total face value
   */
  faceamt_sum: string;

  /**
   * ## [KO] - 발행방법
   * 발행방법
   *
   * ## [EN] - Issuance method
   * Issuance method
   */
  issue_mthd: string;

  /**
   * ## [KO] - 행사가격
   * 행사가격
   *
   * ## [EN] - Exercise price
   * Exercise price
   */
  ex_prc: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}