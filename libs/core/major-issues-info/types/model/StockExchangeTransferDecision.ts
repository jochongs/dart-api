import { DartModel } from "../../../../types/DartModel";

export interface StockExchangeTransferDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 주식교환ㆍ이전형태
   * 주식교환ㆍ이전형태
   *
   * ## [EN] - Stock exchange/transfer type
   * Stock exchange/transfer type
   */
  stk_extr_type: string;

  /**
   * ## [KO] - 상대회사명
   * 상대회사명
   *
   * ## [EN] - Counterpart company name
   * Counterpart company name
   */
  cnt_cmp_nm: string;

  /**
   * ## [KO] - 교환ㆍ이전비율
   * 교환ㆍ이전비율
   *
   * ## [EN] - Exchange/transfer ratio
   * Exchange/transfer ratio
   */
  extr_ratio: string;

  /**
   * ## [KO] - 결정일자
   * 결정일자
   *
   * ## [EN] - Decision date
   * Decision date
   */
  decsn_dt: string;
}