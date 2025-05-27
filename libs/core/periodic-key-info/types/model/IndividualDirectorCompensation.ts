import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 이사·감사의 개인별 보수현황(5억원 이상)
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019012
 *
 * ## [EN] - Remuneration for individual directors and auditors
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00013
 */
export interface IndividualDirectorCompensation
  extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 이름
   * 홍길동
   *
   * ## [EN] - Name
   * Hong Gildong
   */
  nm: string;

  /**
   * ## [KO] - 직위
   * 이사, 대표이사 등
   *
   * ## [EN] - Position
   * Director, CEO, etc.
   */
  ofcps: string;

  /**
   * ## [KO] - 보수 총액
   * 9,999,999,999
   *
   * ## [EN] - Total remuneration
   * 9,999,999,999
   */
  mendng_totamt: string;

  /**
   * ## [KO] - 보수 총액 비 포함 보수
   * 9,999,999,999
   *
   * ## [EN] - Remuneration not included in total remuneration
   * 9,999,999,999
   */
  mendng_totamt_ct_incls_mendng: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
