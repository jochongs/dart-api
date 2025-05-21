/**
 * ## [KO] - 임원 현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019010
 *
 * ## [EN] - Status of executives
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00011
 */
export interface ExecutiveStatus {
  /**
   * ## [KO] - 성명
   * 홍길동
   *
   * ## [EN] - Name
   * Hong Gildong
   */
  nm: string;

  /**
   * ## [KO] - 성별
   * 남
   *
   * ## [EN] - Gender
   * Male
   */
  sexdstn: string;

  /**
   * ## [KO] - 출생 년월
   * YYYY년 MM월
   *
   * ## [EN] - Date of birth
   * YYYYMM
   */
  birth_ym: string;

  /**
   * ## [KO] - 직위
   * 회장, 사장, 사외이사 등
   *
   * ## [EN] - Position
   * Chairman, president, outside director, etc.
   */
  ofcps: string;

  /**
   * ## [KO] - 등기 임원 여부
   * 등기임원, 미등기임원 등
   *
   * ## [EN] - Registered officer status
   * Registered executive, unregistered executive, etc.
   */
  rgist_exctv_at: string;

  /**
   * ## [KO] - 상근 여부
   * 상근, 비상근
   *
   * ## [EN] - Full-time
   *
   * Standing, non-standing
   */
  fte_at: string;

  /**
   * ## [KO] - 담당 업무
   * 대표이사, 이사, 사외이사 등
   *
   * ## [EN] - Responsibilities
   * CEO, director, outside director, etc.
   */
  chrg_job: string;

  /**
   * ## [KO] - 주요 경력
   *
   * ## [EN] - Professional Background
   */
  main_career: string;

  /**
   * ## [KO] - 최대 주주 관계
   *
   * ## [EN] - Relationship to Largest Shareholder
   */
  mxmm_shrholdr_relate: string;

  /**
   * ## [KO] - 재직 기간
   *
   * ## [EN] - Period of employment
   */
  hffc_pd: string;

  /**
   * ## [KO] - 임기 만료 일
   *
   * ## [EN] - Term expiration date
   */
  tenure_end_on: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
