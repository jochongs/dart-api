import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 지분증권 일반사항
 * 지분증권 및 증권예탁증권 신고서 내 일반사항 섹션
 *
 * ## [EN] - Equity securities general affairs
 * General affairs section in equity securities and depositary securities reports
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054
 */
export interface EquitySecuritiesGeneralAffairs extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 청약기간
   *
   * ## [EN] - Subscription period
   */
  sbd: string;

  /**
   * ## [KO] - 납입일
   *
   * ## [EN] - Payment date
   */
  pymd: string;

  /**
   * ## [KO] - 청약공고일
   *
   * ## [EN] - Subscription announcement date
   */
  sband: string;

  /**
   * ## [KO] - 배정공고일
   *
   * ## [EN] - Allocation announcement date
   */
  asand: string;

  /**
   * ## [KO] - 배정기준일
   *
   * ## [EN] - Allocation reference date
   */
  asstd: string;

  /**
   * ## [KO] - 신주인수권 행사대상증권
   *
   * ## [EN] - Warrant exercise target securities
   */
  exstk: string;

  /**
   * ## [KO] - 신주인수권 행사가격
   *
   * ## [EN] - Warrant exercise price (KRW)
   */
  exprc: string;

  /**
   * ## [KO] - 신주인수권 행사기간
   *
   * ## [EN] - Warrant exercise period
   */
  expd: string;

  /**
   * ## [KO] - 주요사항보고서 접수번호
   *
   * ## [EN] - Major event report receipt number (14 digits)
   */
  rpt_rcpn: string;
}
