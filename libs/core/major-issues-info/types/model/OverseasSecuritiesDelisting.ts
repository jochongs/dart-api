import { DartModel } from "../../../../types/DartModel";

export interface OverseasSecuritiesDelisting
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 국가
   * 국가
   *
   * ## [EN] - Country
   * Country
   */
  ntn: string;

  /**
   * ## [KO] - 시장명
   * 시장명
   *
   * ## [EN] - Market name
   * Market name
   */
  mktnm: string;

  /**
   * ## [KO] - 상장폐지주식의 종류
   * 상장폐지주식의 종류
   *
   * ## [EN] - Type of delisted stock
   * Type of delisted stock
   */
  dlstg_stk_knd: string;

  /**
   * ## [KO] - 주식수
   * 주식수
   *
   * ## [EN] - Number of shares
   * Number of shares
   */
  stk_cnt: string;

  /**
   * ## [KO] - 상장폐지일자
   * 상장폐지일자
   *
   * ## [EN] - Delisting date
   * Delisting date
   */
  dlstg_dt: string;
}