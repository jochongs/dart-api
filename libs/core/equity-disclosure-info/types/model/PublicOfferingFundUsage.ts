import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 공모자금의 사용내역
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020016
 *
 * ## [EN] - Details of public offering fund usage
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00031
 */
export interface PublicOfferingFundUsage extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 구분
   * 구분
   *
   * ## [EN] - Category
   * Classification
   */
  se_nm: string;

  /**
   * ## [KO] - 회차
   * 회차
   *
   * !③ 2019년 12월 9일부터 추가됨
   *
   * ## [EN] - Ordinal
   * Sequence
   *
   * !③ Added starting December 9, 2019
   */
  tm: string;

  /**
   * ## [KO] - 납입일
   * 납입일
   *
   * ## [EN] - 	Date for payment
   * Payment date
   */
  pay_de: string;

  /**
   * ## [KO] - 납입금액
   * 9,999,999,999
   *
   * !① 2018년 1월 18일까지 사용됨
   *
   * ## [EN] - Amount paid
   * 9,999,999,999
   *
   * !① In use until January 18, 2018
   */
  pay_amount: string;

  /**
   * ## [KO] - 신고서상 자금사용 계획
   * 신고서상 자금사용 계획
   *
   * !① 2018년 1월 18일까지 사용됨
   *
   * ## [EN] - Plans for use of funds in the statement
   * Plans for use of funds in the statement
   *
   * !① In use until January 18, 2018
   */
  on_dclrt_cptal_use_plan: string;

  /**
   * ## [KO] - 	실제 자금사용 현황
   * 실제 자금사용 현황
   *
   * !① 2018년 1월 18일까지 사용됨
   *
   * ## [EN] - Status of actual use of funds
   * Status of actual use of funds
   *
   * !① In use until January 18, 2018
   */
  real_cptal_use_sttus: string;

  /**
   * ## [KO] - 증권신고서 등의 자금사용 계획(사용용도)
   * 증권신고서 등의 자금사용 계획(사용용도)
   *
   * !② 2018년 1월 19일부터 추가됨
   *
   * ## [EN] - Plans for use of funds including details from the registration statement (Purpose of use)
   * Plans for use of funds including details from the registration statement (Purpose of use)
   *
   * !② Added starting January 19, 2018
   *
   */
  rs_cptal_use_plan_useprps: string;

  /**
   * ## [KO] - 증권신고서 등의 자금사용 계획(조달금액)
   * 9,999,999,999
   *
   * !② 2018년 1월 19일부터 추가됨
   *
   * ## [EN] - Plan for use of funds in the registration statement, etc. (amount procured)
   * 9,999,999,999
   *
   * !② Added starting January 19, 2018
   */
  rs_cptal_use_plan_prcure_amount: string;

  /**
   * ## [KO] - 실제 자금사용 내역(내용)
   * 실제 자금사용 내역(내용)
   *
   * !② 2018년 1월 19일부터 추가됨
   *
   * ## [EN] - Details of actual use of funds (Details)
   * Details of actual use of funds (Details)
   *
   * !② Added starting January 19, 2018
   */
  real_cptal_use_dtls_cn: string;

  /**
   * ## [KO] - 	실제 자금사용 내역(금액)
   * 9,999,999,999
   *
   * !② 2018년 1월 19일부터 추가됨
   *
   * ## [EN] - Details of actual use of funds (Amount)
   * 9,999,999,999
   *
   * !② Added starting January 19, 2018
   */
  real_cptal_use_dtls_amount: string;

  /**
   * ## [KO] - 차이발생 사유 등
   * 9,999,999,999
   *
   * !② 2018년 1월 19일부터 추가됨
   *
   * ## [EN] - Reasons for differences, etc.
   * Reasons for differences, etc.
   */
  dffrnc_occrrnc_resn: string;

  /**
   * ## [KO] - 기준결산일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
