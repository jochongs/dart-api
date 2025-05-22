import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 개인별 보수지급 금액(5억이상 상위5인)
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019014
 *
 * ## [EN] - Individual remuneration amounts (top 5 over KRW 500 million)
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00015
 */
export interface Top5ExecutiveCompensation extends BasicPeriodicReportsInfo {
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
   * 대표이사 등
   *
   * ## [EN] - Position
   * CEO, etc.
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
