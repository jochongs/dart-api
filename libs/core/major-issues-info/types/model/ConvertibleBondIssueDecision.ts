import { DartModel } from "../../../../types/DartModel";

export interface ConvertibleBondIssueDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 전환사채권의 종류
   * 전환사채권의 종류
   *
   * ## [EN] - Type of convertible bond
   * Type of convertible bond
   */
  cvbd_knd: string;

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
   * ## [KO] - 전환가격
   * 전환가격
   *
   * ## [EN] - Conversion price
   * Conversion price
   */
  cvprc: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}