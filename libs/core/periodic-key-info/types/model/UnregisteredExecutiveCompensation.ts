import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 미등기임원 보수현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020013
 *
 * ## [EN] - Remuneration for unregistered executives
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00028
 */
export interface UnregisteredExecutiveCompensation
  extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 구분
   * 구분(미등기임원)
   *
   * ## [EN] - Category
   * Type (unregistered executives)
   */
  se: string;

  /**
   * ## [KO] - 인원수
   * 9,999,999,999
   *
   * ## [EN] - Headcount
   * 9,999,999,999
   */
  nmpr: string;

  /**
   * ## [KO] - 	연간급여 총액
   * 9,999,999,999
   *
   * ## [EN] - Total annual salary
   * 9,999,999,999
   */
  fyer_salary_totamt: string;

  /**
   * ## [KO] - 1인평균 급여액
   * 9,999,999,999
   *
   * ## [EN] - Average salary per person
   * 9,999,999,999
   */
  jan_salary_am: string;

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
