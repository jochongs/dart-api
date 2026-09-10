import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 자금의사용목적
 * 지분증권, 채무증권, 증권예탁증권 신고서 내 자금의사용목적 섹션
 *
 * ## [EN] - Fund usage
 * Fund usage section in equity, debt, and depositary securities reports
 */
export interface FundUsage extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 구분
   *
   * ## [EN] - Classification
   */
  se: string;

  /**
   * ## [KO] - 금액
   *
   * ## [EN] - Amount (KRW)
   */
  amt: string;
}
