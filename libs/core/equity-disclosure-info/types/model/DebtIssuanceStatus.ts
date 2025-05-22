import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 채무증권 발행실적
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020003
 *
 * ## [EN] - Debt securities issuance performance
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00018
 */
export interface DebtIssuanceStatus extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 발생회사
   * 발행회사
   *
   * ## [EN] - Issuing company
   * Issuing company
   */
  isu_cmpny: string;

  /**
   * ## [KO] - 증권종류
   * 증권종류
   *
   * ## [EN] - Securities type
   * Securities class
   */
  scrits_knd_nm: string;

  /**
   * ## [KO] - 발행방법
   * 발행방법
   *
   * ## [EN] - Method of issuance
   * Method of issuance
   */
  isu_mth_nm: string;

  /**
   * ## [KO] - 발행일자
   * 발행일자(YYYYMMDD)
   *
   * ## [EN] - Issue date
   * Issue date
   */
  isu_de: string;

  /**
   * ## [KO] - 권면(전자등록)총액
   * 9,999,999,999
   *
   * ## [EN] - Total face(or electronically registered) value(KRW)
   * 9,999,999,999
   */
  facvalu_totamt: string;

  /**
   * ## [KO] - 이자율
   * 0.00
   *
   * ## [EN] - Interest rate
   * 0.00
   */
  intrt: string;

  /**
   * ## [KO] - 평가등급(평가기관)
   * 평가등급(평가기관)
   *
   * ## [EN] - Rating(Rating agency)
   * Rating(Rating agency)
   */
  evl_grad_instt: string;

  /**
   * ## [KO] - 만기일
   * 만기일(YYYYMMDD)
   *
   * ## [EN] - Maturity date
   * Maturity date
   */
  mtd: string;

  /**
   * ## [KO] - 상환여부
   * 상환여부
   *
   * ## [EN] - Redemption status
   * Redemption status
   */
  repy_at: string;

  /**
   * ## [KO] - 주관회사
   * 주관회사
   *
   * ## [EN] - Underwriter
   * Underwriter
   */
  mngt_cmpny: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
