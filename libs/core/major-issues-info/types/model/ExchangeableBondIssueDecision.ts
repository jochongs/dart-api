import { DartModel } from "../../../../types/DartModel";

export interface ExchangeableBondIssueDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 교환사채권의 종류
   * 교환사채권의 종류
   *
   * ## [EN] - Type of exchangeable bond
   * Type of exchangeable bond
   */
  exbd_knd: string;

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
   * ## [KO] - 교환가격
   * 교환가격
   *
   * ## [EN] - Exchange price
   * Exchange price
   */
  exchg_prc: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}