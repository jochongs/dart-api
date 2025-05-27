import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 이사·감사 전체의 보수현황(주주총회 승인금액)
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020014
 *
 * ## [EN] - Remuneration for all directors and auditors (amount approved by the general shareholders' meeting)
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00029
 */
export interface ApprovedDirectorCompensation extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 구분
   * 구분
   *
   * ## [EN] - Category
   * Category
   */
  se: string;

  /**
   * ## [KO] - 인원수
   * 인원수
   *
   * ## [EN] - Headcount
   * Headcount
   */
  nmpr: string;

  /**
   * ## [KO] - 주주총회 승인금액
   * 9,999,999,999
   *
   * ## [EN] - Amount approved at general shareholders' meeting
   * 9,999,999,999
   */
  gmtsck_confm_amount: string;

  /**
   * ## [KO] - 비고
   * 비고
   *
   * ## [EN] - Note
   * Note
   */
  rm: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
