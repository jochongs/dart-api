import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 타법인 출자현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019015
 *
 * ## [EN] - Investment in other corporations
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00016
 */
export interface ExternalInvestmentStatus extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 법인명
   * 법인명
   *
   * ## [EN] - Corporation name
   * Corporation name
   */
  inv_prm: string;

  /**
   * ## [KO] - 최초 취득 일자
   * 최초취득일자(YYYYMMDD)
   *
   * ## [EN] - Date of initial acquisition
   * Date of original acquisition
   * (YYYYMMDD)
   */
  frst_acqs_de: string;

  /**
   * ## [KO] - 출자 목적
   * 출자목적(자회사 등)
   *
   * ## [EN] - Purpose of investment
   * Investment purpose (subsidiary, etc.)
   */
  invstmnt_purps: string;

  /**
   * ## [KO] - 최초 취득 금액
   * 9,999,999,999
   *
   * ## [EN] - Initial acquisition amount
   * 9,999,999,999
   */
  frst_acqs_amount: string;

  /**
   * ## [KO] - 기초 잔액 수량
   * 9,999,999,999
   *
   * ## [EN] - Balance at beginning of period (Quantity)
   * 9,999,999,999
   */
  bsis_blce_qy: string;

  /**
   * ## [KO] - 기초 잔액 지분 율
   * 0.00
   *
   * ## [EN] - Balance at beginning of period (Shareholding ratio)
   * 0.00
   */
  bsis_blce_qota_rt: string;

  /**
   * ## [KO] - 기초 잔액 장부 가액
   * 9,999,999,999
   *
   * ## [EN] - Balance at beginning of period (Book value)
   * 9,999,999,999
   */
  bsis_blce_acntbk_amount: string;

  /**
   * ## [KO] - 증가 감소 취득 처분 수량
   * 9,999,999,999
   *
   * ## [EN] - Increase (reduction) (Acquisition (disposal) (Quantity))
   * 9,999,999,999
   */
  incrs_dcrs_acqs_dsps_qy: string;

  /**
   * ## [KO] - 증가 감소 취득 처분 금액
   * 9,999,999,999
   *
   * ## [EN] - Increase (reduction) (Acquisition (disposal) (Amount))
   * 9,999,999,999
   */
  incrs_dcrs_acqs_dsps_amount: string;

  /**
   * ## [KO] - 증가 감소 평가 손액
   * 9,999,999,999
   *
   * ## [EN] - Increase (reduction) ( Gain(loss) on valuation )
   * 9,999,999,999
   */
  incrs_dcrs_evl_lstmn: string;

  /**
   * ## [KO] - 기말 잔액 수량
   * 9,999,999,999
   *
   * ## [EN] - Balance at end of period (Quantity)
   * 9,999,999,999
   */
  trmend_blce_qy: string;

  /**
   * ## [KO] - 기말 잔액 지분 율
   * 0.00
   *
   * ## [EN] - Balance at end of period (Shareholding ratio)
   * 0.00
   */
  trmend_blce_qota_rt: string;

  /**
   * ## [KO] - 기말 잔액 장부 가액
   * 9,999,999,999
   *
   * ## [EN] - Balance at end of period (Book value)
   * 9,999,999,999
   */
  trmend_blce_acntbk_amount: string;

  /**
   * ## [KO] - 최근 사업 연도 재무 현황 총 자산
   * 9,999,999,999
   *
   * ## [EN] - Financial status for the latest fiscal year (Total assets)
   * 9,999,999,999
   */
  recent_bsns_year_fnnr_sttus_tot_assets: string;

  /**
   * ## [KO] - 최근 사업 연도 재무 현황 당기 순이익
   * 9,999,999,999
   *
   * ## [EN] - Financial status for the latest fiscal year (Profit(loss))
   * 9,999,999,999
   */
  recent_bsns_year_fnnr_sttus_thstrm_ntpf: string;

  /**
   * ## [KO] -
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
