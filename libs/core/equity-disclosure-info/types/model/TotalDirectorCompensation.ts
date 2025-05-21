import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] -	이사·감사 전체의 보수현황(보수지급금액 - 이사·감사 전체)
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019013
 *
 * ## [EN] - Remuneration for all directors and auditors
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00014
 */
export interface TotalDirectorCompensation extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 인원수
   * 9,999,999,999
   *
   * ## [EN] - Headcount
   * 9,999,999,999
   */
  nmpr: string;

  /**
   * ## [KO] - 보수 총액
   * 9,999,999,999
   *
   * ## [EN] - Total remuneration amount
   * 9,999,999,999
   */
  mendng_totamt: string;

  /**
   * ## [KO] - 1인 평균 보수 액
   * 9,999,999,999
   *
   * ## [EN] - Average remuneration per person
   * 9,999,999,999
   */
  jan_avrg_mendng_am: string;

  /**
   * ## [KO] - 비고
   *
   * ## [EN] - Note
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
