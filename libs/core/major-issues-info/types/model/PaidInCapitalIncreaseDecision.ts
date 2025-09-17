import { DartModel } from "../../../../types/DartModel";

export interface PaidInCapitalIncreaseDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 신주의 종류와 수(보통주식)
   * 보통주식 신주의 수 (주)
   *
   * ## [EN] - Type and number of new shares (Common stock)
   * Number of new common shares (shares)
   */
  nstk_ostk_cnt: string;

  /**
   * ## [KO] - 신주의 종류와 수(기타주식)
   * 기타주식 신주의 수 (주)
   *
   * ## [EN] - Type and number of new shares (Other stock)
   * Number of new other shares (shares)
   */
  nstk_estk_cnt: string;

  /**
   * ## [KO] - 1주당 액면가액 (원)
   * 1주당 액면가액 (원)
   *
   * ## [EN] - Par value per share (KRW)
   * Par value per share (KRW)
   */
  fv_ps: string;

  /**
   * ## [KO] - 증자전 발행주식총수(보통주식)
   * 증자 전 발행 보통주식 총수 (주)
   *
   * ## [EN] - Total number of issued shares before capital increase (Common stock)
   * Total issued common shares before capital increase (shares)
   */
  bfic_tisstk_ostk: string;

  /**
   * ## [KO] - 증자전 발행주식총수(기타주식)
   * 증자 전 발행 기타주식 총수 (주)
   *
   * ## [EN] - Total number of issued shares before capital increase (Other stock)
   * Total issued other shares before capital increase (shares)
   */
  bfic_tisstk_estk: string;

  /**
   * ## [KO] - 자금조달의 목적(시설자금)
   * 시설자금 (원)
   *
   * ## [EN] - Purpose of funds raised (Facility funds)
   * Facility funds (KRW)
   */
  fdpp_fclt: string;

  /**
   * ## [KO] - 자금조달의 목적(영업양수자금)
   * 영업양수자금 (원)
   *
   * ## [EN] - Purpose of funds raised (Business acquisition funds)
   * Business acquisition funds (KRW)
   */
  fdpp_bsninh: string;

  /**
   * ## [KO] - 자금조달의 목적(운영자금)
   * 운영자금 (원)
   *
   * ## [EN] - Purpose of funds raised (Operating funds)
   * Operating funds (KRW)
   */
  fdpp_op: string;

  /**
   * ## [KO] - 자금조달의 목적(채무상환자금)
   * 채무상환자금 (원)
   *
   * ## [EN] - Purpose of funds raised (Debt repayment funds)
   * Debt repayment funds (KRW)
   */
  fdpp_dtrp: string;

  /**
   * ## [KO] - 자금조달의 목적(타법인 증권 취득자금)
   * 타법인 증권 취득자금 (원)
   *
   * ## [EN] - Purpose of funds raised (Acquisition of other corporate securities)
   * Acquisition of other corporate securities (KRW)
   */
  fdpp_ocsa: string;
}
