import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 매출인에관한사항
 * 지분증권, 채무증권, 증권예탁증권 신고서 내 매출인에관한사항 섹션
 *
 * ## [EN] - Sales holder information
 * Sales holder information section in equity, debt, and depositary securities reports
 */
export interface SalesHolder extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 보유자
   *
   * ## [EN] - Holder
   */
  hdr: string;

  /**
   * ## [KO] - 회사와의 관계
   *
   * ## [EN] - Relationship with company
   */
  rl_cmp: string;

  /**
   * ## [KO] - 매출전보유주식수
   *
   * ## [EN] - Pre-sale holdings
   */
  bfsl_hdstk: string;

  /**
   * ## [KO] - 매출주식수
   *
   * ## [EN] - Sale quantity
   */
  slstk: string;

  /**
   * ## [KO] - 매출후보유주식수
   *
   * ## [EN] - Post-sale holdings
   */
  atsl_hdstk: string;
}
