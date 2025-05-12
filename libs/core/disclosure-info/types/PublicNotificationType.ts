/**
 * ## [KO]
 * 공시 유형
 *
 * ## [EN]
 * Public notification type
 */
export const publicNotificationType = {
  /**
   * ## [KO]
   * 정기 공시
   *
   * ## [EN]
   * Periodic Disclosure
   */
  A: "A",

  /**
   * ## [KO]
   * 주요 사항 보고
   *
   * ## [EN]
   * Report on Major Issues
   */
  B: "B",

  /**
   * ## [KO]
   * 발행 공시
   *
   * ## [EN]
   * Issuance Disclosure
   */
  C: "C",

  /**
   * ## [KO]
   * 지분 공시
   *
   * ## [EN]
   * Equity Disclosure
   */
  D: "D",

  /**
   * ## [KO]
   * 기타 공시
   *
   * ## [EN]
   * Other Disclosure
   */
  E: "E",

  /**
   * ## [KO]
   * 외부 감사 관련
   *
   * ## [EN]
   * Related to External Audits
   */
  F: "F",

  /**
   * ## [KO]
   * 펀드 공시
   *
   * ## [EN]
   * Fund Disclosure
   */
  G: "G",

  /**
   * ## [KO]
   * 자산 유동화
   *
   * ## [EN]
   * Asset-Backed Securitization
   */
  H: "H",

  /**
   * ## [KO]
   * 거래소 공시
   *
   * ## [EN]
   * Exchange Disclosure
   */
  I: "I",

  /**
   * ## [KO]
   * 공정위 공시
   *
   * ## [EN]
   * Fair Trade Commission Disclosure
   */
  J: "J",
} as const;

/**
 * ## [KO]
 * 공시 유형 타입
 *
 * ## [EN]
 * Public notification type
 */
export type PublicNotificationType =
  (typeof publicNotificationType)[keyof typeof publicNotificationType];
