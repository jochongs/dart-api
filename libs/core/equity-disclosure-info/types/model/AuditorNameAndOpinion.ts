import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 회계감사인의 명칭 및 감사의견
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020009
 *
 * ## [EN] - Name of external auditor and audit opinion
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00024
 */
export interface AuditorNameAndOpinion extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 사업 연도
   * 사업연도(당기, 전기, 전전기)
   *
   * ## [EN] - Fiscal year
   * Fiscal year (current term, previous term, term before previous)
   */
  bsns_year: string;

  /**
   * ## [KO] - 감사인
   * 감사인
   *
   * ## [EN] - Auditor
   * Auditor
   */
  adtor: string;

  /**
   * ## [KO] - 감사의견
   * 감사의견
   *
   * ## [EN] - External auditor's opinion
   * External auditor's opinion
   */
  adt_opinion: string;

  /**
   * ## [KO] - 감사보고서 특기사항
   * 감사보고서 특기사항
   *
   * !① 2019년 12월 8일까지 사용됨
   *
   * ## [EN] - Matters of note in the audit report
   * Matters of note in the audit report
   *
   * !① In use until December 8, 2019
   */
  adt_reprt_spcmnt_matter: string;

  /**
   * ## [KO] - 강조사항 등
   * 강조사항 등
   *
   * !② 2019년 12월 9일부터 추가됨
   *
   * ## [EN] - Emphasis, etc
   * Emphasis, etc
   *
   * !② Added starting December 9, 2019
   */
  emphs_matter: string;

  /**
   * ## [KO] - 핵심감사사항
   * 핵심감사사항
   *
   * !② 2019년 12월 9일부터 추가됨
   *
   * ## [EN] - Key audit matters
   * Key audit matters
   *
   * !② Added starting December 9, 2019
   */
  core_adt_matter: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
