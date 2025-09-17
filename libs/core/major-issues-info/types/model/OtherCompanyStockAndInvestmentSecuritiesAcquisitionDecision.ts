import { DartModel } from "../../../../types/DartModel";

export interface OtherCompanyStockAndInvestmentSecuritiesAcquisitionDecision
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