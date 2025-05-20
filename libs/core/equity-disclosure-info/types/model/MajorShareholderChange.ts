/**
 * ## [KO] - 최대주주 변동현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019008
 *
 * ## [EN] - Changes of the largest shareholder
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00009
 */
export interface MajorShareholderChange {
  /**
   * ## [KO] - 변동 일
   * YYYY.MM.DD
   *
   * ## [EN] - Date of change
   * YYYY.MM.DD
   */
  change_on: string;

  /**
   * ## [KO] - 최대 주주 명
   * 홍길동
   *
   * ## [EN] - Name of largest shareholder
   * Hong Gildong
   */
  mxmm_shrholdr_nm: string;

  /**
   * ## [KO] - 소유 주식 수
   * 9,999,999,999
   *
   * ## [EN] - Number of shares held
   * 9,999,999,999
   */
  posesn_stock_co: string;

  /**
   * ## [KO] - 지분 율
   * 0.00
   *
   * ## [EN] - Shareholding ratio
   * 0.00
   */
  qota_rt: string;

  /**
   * ## [KO] - 변동 원인
   * 변동 원인
   *
   * ## [EN] - Cause of change
   * Cause of change
   */
  change_cause: string;

  /**
   * ## [KO] - 비고
   * 비고
   *
   * ## [EN] - Note
   * Note
   */
  rm: string;

  /**
   * ## [KO] - 결산일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
