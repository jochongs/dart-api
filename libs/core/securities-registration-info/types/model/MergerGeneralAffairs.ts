import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 합병/교환이전/분할 일반사항
 * 합병, 주식의포괄적교환·이전, 분할 신고서 내 일반사항 섹션
 *
 * ## [EN] - Merger/stock exchange-transfer/spin-off general affairs
 * General affairs section in merger, comprehensive stock exchange-transfer, and spin-off reports
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057
 */
export interface MergerGeneralAffairs extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 분류/공시 구분
   *
   * ## [EN] - Classification/disclosure type
   */
  stn: string;

  /**
   * ## [KO] - 이사회결의일
   *
   * ## [EN] - Board of directors resolution date
   */
  bddd: string;

  /**
   * ## [KO] - 계약일
   *
   * ## [EN] - Contract date
   */
  ctrd: string;

  /**
   * ## [KO] - 주주총회 예정기준일
   *
   * ## [EN] - Scheduled shareholders' meeting reference date
   */
  gmtsck_shddstd: string;

  /**
   * ## [KO] - 예정주주총회일
   *
   * ## [EN] - Scheduled shareholders' meeting date
   */
  ap_gmtsck: string;

  /**
   * ## [KO] - 주식매수청구권행사기간 시작일
   *
   * ## [EN] - Stock purchase request exercise period start date
   */
  aprskh_pd_bgd: string;

  /**
   * ## [KO] - 주식매수청구권행사기간 종료일
   *
   * ## [EN] - Stock purchase request exercise period end date
   */
  aprskh_pd_edd: string;

  /**
   * ## [KO] - 주식매수청구권행사가격
   *
   * ## [EN] - Stock purchase request exercise price (KRW)
   */
  aprskh_prc: string;

  /**
   * ## [KO] - 특이사항
   *
   * ## [EN] - Special notes
   */
  mgdt_etc: string;

  /**
   * ## [KO] - 합병비율 산정가치
   *
   * ## [EN] - Merger ratio valuation
   */
  rt_vl: string;

  /**
   * ## [KO] - 외부평가기관
   *
   * ## [EN] - External evaluation agency
   */
  exevl_int: string;

  /**
   * ## [KO] - 보증인 특이사항
   *
   * ## [EN] - Guarantor special notes
   */
  grtmn_etc: string;

  /**
   * ## [KO] - 주요사항보고서 접수번호
   *
   * ## [EN] - Major event report receipt number (14 digits)
   */
  rpt_rcpn: string;
}
