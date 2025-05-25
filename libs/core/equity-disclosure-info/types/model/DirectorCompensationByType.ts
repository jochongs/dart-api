import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 이사·감사 전체의 보수현황(보수지급금액 - 유형별)
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020015
 *
 * ## [EN] - Remuneration for all directors and auditors (remuneration paid - by type)
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00030
 */
export interface DirectorCompensationByType extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 구분
   * 구분
   *
   * ## [EN] - Category
   * Type
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
   * ## [KO] - 보수총액
   * 9,999,999,999
   *
   * ## [EN] - Total remuneration amount
   * 9,999,999,999
   */
  pymnt_totamt: string;

  /**
   * ## [KO] - 1인당 평균보수액
   * 9,999,999,999
   *
   * ## [EN] - Average remuneration per person
   * 9,999,999,999
   */
  psn1_avrg_pymntamt: string;

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
