import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 사외이사 및 그 변동현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020012
 *
 * ## [EN] - Outside directors and changes
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00027
 */
export interface OutsideDirectorStatus extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 이사의 수
   * 9,99,999,999
   *
   * ## [EN] - Number of directors
   * 9,999,999,999
   */
  drctr_co: string;

  /**
   * ## [KO] - 사외이사 수
   * 9,999,999,999
   *
   * ## [EN] - Number of outside directors
   * 9,999,999,999
   */
  otcmp_drctr_co: string;

  /**
   * ## [KO] - 사외이사 변동현황(선임)
   * 9,999,999,999
   *
   * ## [EN] - Status of changes in outside directors (Appointment)
   * 9,999,999,999
   */
  apnt: string;

  /**
   * ## [KO] - 사외이사 변동현황(해임)
   * 9,999,999,999
   *
   * ## [EN] - Status of changes in outside directors (Dismissal)
   * 9,999,999,999
   */
  rlsofc: string;

  /**
   * ## [KO] - 사외이사 변동현황(중도퇴임)
   * 9,999,999,999
   *
   * ## [EN] - Status of changes in outside directors (early retirement)
   * 9,999,999,999
   */
  mdstrm_resig: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
