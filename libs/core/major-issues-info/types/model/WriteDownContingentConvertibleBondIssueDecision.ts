import { DartModel } from "../../../../types/DartModel";

export interface WriteDownContingentConvertibleBondIssueDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 상각형 조건부자본증권의 종류
   * 상각형 조건부자본증권의 종류
   *
   * ## [EN] - Type of write-down contingent convertible bond
   * Type of write-down contingent convertible bond
   */
  wd_cocobd_knd: string;

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
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}