import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

export interface AuditContractInfo extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 사업연도
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
   * ## [KO] - 내용
   * 내용
   *
   * ## [EN] - Details
   */
  cn: string;

  /**
   * ## [KO] - 보수
   * 보수
   *
   * !① 2020년 7월 5일까지 사용됨
   *
   * ## [EN] - Remuneration
   * Remuneration
   *
   * !① In use until July 5, 2020
   */
  mendng: string;

  /**
   * ## [KO] - 총소요시간
   * 총소요시간
   *
   * !① 2020년 7월 5일까지 사용됨
   *
   * ## [EN] - Total time taken
   * Total time taken
   *
   * !① In use until July 5, 2020
   */
  tot_reqre_time: string;

  /**
   * ## [KO] - 감사계약내역(보수)
   * 감사계약내역(보수)
   *
   * !② 2020년 7월 6일부터 추가됨
   *
   * ## [EN] - Audit contract details (remuneration)
   * Audit contract details (remuneration)
   *
   * !② Added starting July 6, 2020
   */
  adt_cntrct_dtls_mendng: string;

  /**
   * ## [KO] - 감사계약내역(시간)
   * 감사계약내역(시간)
   *
   * !② 2020년 7월 6일부터 추가됨
   *
   * ## [EN] - Audit contract details (Hours)
   * Audit contract details (Hours)
   *
   * !② Added starting July 6, 2020
   */
  adt_cntrct_dtls_time: string;

  /**
   * ## [KO] - 실제수행내역(보수)
   * 실제수행내역(보수)
   *
   * !② 2020년 7월 6일부터 추가됨
   *
   * ## [EN] - Actual performance details (remuneration)
   * Actual performance details (remuneration)
   *
   * !② Added starting July 6, 2020
   */
  real_exc_dtls_mendng: string;

  /**
   * ## [KO] - 실제수행내역(시간)
   * 실제수행내역(시간)
   *
   * !② 2020년 7월 6일부터 추가됨
   *
   * ## [EN] - Actual performance details (Hours)
   * Actual performance details (Hours)
   *
   * !② Added starting July 6, 2020
   */
  real_exc_dtls_time: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
