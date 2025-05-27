import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 회계감사인과의 비감사용역 계약체결 현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020011
 *
 * ## [EN] - Information on non-audit service contracts entered with external auditor
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00026
 */
export interface NonAuditContractInfo extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 사업연도
   * 사업연도(당기, 전기, 전전기)
   *
   * ## [EN] - Fiscal year
   * Fiscal year (current term, previous term, term before previous)
   */
  bsns_year: string;

  /**
   * ## [KO] - 계약체결일
   * 계약체결일
   *
   * ## [EN] - Contract date
   * Contract date
   */
  cntrct_cncls_det: string;

  /**
   * ## [KO] - 용역내용
   * 용역내용
   *
   * ## [EN] - Service details
   * Service details
   */
  servc_cn: string;

  /**
   * ## [KO] - 용역수행기간
   * 용역수행기간
   *
   * ## [EN] - Service performance period
   * Service performance period
   */
  servc_exc_pd: string;

  /**
   * ## [KO] - 용역보수
   * 용역보수
   *
   * ## [EN] - Service remuneration
   * Service remuneration
   */
  servc_mendng: string;

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
