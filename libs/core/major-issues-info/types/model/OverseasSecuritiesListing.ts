import { DartModel } from "../../../../types/DartModel";

export interface OverseasSecuritiesListing
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
   * ## [KO] - 상장주식의 종류
   * 상장주식의 종류
   *
   * ## [EN] - Type of listed stock
   * Type of listed stock
   */
  lstg_stk_knd: string;

  /**
   * ## [KO] - 주식수
   * 주식수
   *
   * ## [EN] - Number of shares
   * Number of shares
   */
  stk_cnt: string;

  /**
   * ## [KO] - 상장일자
   * 상장일자
   *
   * ## [EN] - Listing date
   * Listing date
   */
  lstg_dt: string;
}