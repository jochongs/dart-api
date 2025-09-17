import { DartModel } from "../../../../types/DartModel";

export interface StockRelatedBondAcquisitionDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 피양수회사명
   * 피양수회사명
   *
   * ## [EN] - Acquired company name
   * Acquired company name
   */
  aq_cmp_nm: string;

  /**
   * ## [KO] - 주권관련 사채권의 종류
   * 주권관련 사채권의 종류
   *
   * ## [EN] - Type of stock-related bond
   * Type of stock-related bond
   */
  stkrt_bd_knd: string;

  /**
   * ## [KO] - 권면총액
   * 권면총액
   *
   * ## [EN] - Total face value
   * Total face value
   */
  faceamt_sum: string;

  /**
   * ## [KO] - 양수금액
   * 양수금액
   *
   * ## [EN] - Acquisition amount
   * Acquisition amount
   */
  aq_amt: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}