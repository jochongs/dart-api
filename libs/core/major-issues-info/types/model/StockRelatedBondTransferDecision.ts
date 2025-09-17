import { DartModel } from "../../../../types/DartModel";

export interface StockRelatedBondTransferDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 양도대상회사명
   * 양도대상회사명
   *
   * ## [EN] - Transfer target company name
   * Transfer target company name
   */
  trf_trg_cmp_nm: string;

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
   * ## [KO] - 양도금액
   * 양도금액
   *
   * ## [EN] - Transfer amount
   * Transfer amount
   */
  trf_amt: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}