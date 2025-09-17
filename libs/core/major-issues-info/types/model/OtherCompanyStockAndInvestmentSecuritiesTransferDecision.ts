import { DartModel } from "../../../../types/DartModel";

export interface OtherCompanyStockAndInvestmentSecuritiesTransferDecision
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
   * ## [KO] - 주식 및 출자증권의 종류
   * 주식 및 출자증권의 종류
   *
   * ## [EN] - Type of stock and investment securities
   * Type of stock and investment securities
   */
  stk_invscr_knd: string;

  /**
   * ## [KO] - 주식수
   * 주식수
   *
   * ## [EN] - Number of shares
   * Number of shares
   */
  stk_cnt: string;

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