import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 최대주주 현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019007
 *
 * ## [EN] - Information on largest shareholder
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00008
 */
export interface MajorShareholderStatus extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 성명
   * 홍길동
   *
   * ## [EN] - Name
   * Hong Gildong
   */
  nm: string;

  /**
   * ## [KO] - 관계
   * 본인, 친인척 등
   *
   * ## [EN] - Relationship
   * Self, relative, etc.
   */
  relate: string;

  /**
   * ## [KO] - 주식 종류
   * 보통주 등
   *
   * ## [EN] - Type of Shares
   * Type of Shares
   */
  stock_knd: string;

  /**
   * ## [KO] - 기초 소유 주식 수
   * 9,999,999,999
   *
   * ## [EN] - Number of shares and ownership ratio ( Begining ( Number of stocks ) )
   * 9,999,999,999
   */
  bsis_posesn_stock_co: string;

  /**
   * ## [KO] - 기초 소유 주식 지분 율
   * 0.00
   *
   * ## [EN] - Number of shares and ownership ratio ( Begining ( Shareholding ratio ) )
   * 0.00
   */
  bsis_posesn_stock_qota_rt: string;

  /**
   * ## [KO] - 기말 소유 주식 수
   * 9,999,999,999
   *
   * ## [EN] - Number of shares and ownership ratio ( Ending ( Number of stocks ) )
   * 9,999,999,999
   */
  trmend_posesn_stock_co: string;

  /**
   * ## [KO] - 기말 소유 주식 지분 율
   * 0.00
   *
   * ## [EN] - Number of shares and ownership ratio ( Ending ( Shareholding ratio ) )
   * 0.00
   */
  trmend_posesn_stock_qota_rt: string;

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
