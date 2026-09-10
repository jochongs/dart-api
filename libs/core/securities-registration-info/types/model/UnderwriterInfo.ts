import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 인수인정보
 * 지분증권, 채무증권, 증권예탁증권 신고서 내 인수인정보 섹션
 *
 * ## [EN] - Underwriter information
 * Underwriter information section in equity, debt, and depositary securities reports
 */
export interface UnderwriterInfo extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 인수인구분
   *
   * ## [EN] - Underwriter classification
   */
  actsen: string;

  /**
   * ## [KO] - 인수인명
   *
   * ## [EN] - Underwriter name
   */
  actnmn: string;

  /**
   * ## [KO] - 증권구분
   *
   * ## [EN] - Securities type
   */
  stksen: string;

  /**
   * ## [KO] - 인수수량
   *
   * ## [EN] - Underwriting quantity
   */
  udtcnt: string;

  /**
   * ## [KO] - 인수금액
   *
   * ## [EN] - Underwriting amount (KRW)
   */
  udtamt: string;

  /**
   * ## [KO] - 인수대가
   *
   * ## [EN] - Underwriting consideration
   */
  udtprc: string;

  /**
   * ## [KO] - 인수방법
   *
   * ## [EN] - Underwriting method
   */
  udtmth: string;
}
