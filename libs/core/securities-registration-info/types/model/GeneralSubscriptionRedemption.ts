import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 일반청약자환매청구권
 * 지분증권 신고서 내 일반청약자환매청구권 섹션
 *
 * ## [EN] - General subscription redemption right
 * General subscription redemption right section in equity securities reports
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054
 */
export interface GeneralSubscriptionRedemption extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 환매청구대상증권
   *
   * ## [EN] - Securities subject to redemption request
   */
  grtrs: string;

  /**
   * ## [KO] - 환매청구 가능여부
   *
   * ## [EN] - Whether redemption request is available
   */
  exavivr: string;

  /**
   * ## [KO] - 환매청구수량
   *
   * ## [EN] - Redemption request quantity
   */
  grtcnt: string;

  /**
   * ## [KO] - 환매청구기간
   *
   * ## [EN] - Redemption request period
   */
  expd: string;

  /**
   * ## [KO] - 환매청구가격
   *
   * ## [EN] - Redemption request price (KRW)
   */
  exprc: string;
}
