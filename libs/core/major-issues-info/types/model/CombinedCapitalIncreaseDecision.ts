import { DartModel } from "../../../../types/DartModel";

export interface CombinedCapitalIncreaseDecision extends DartModel {
  /**
   * ## [KO] - 유상증자(신주의 종류와 수(보통주식 (주)))
   * ## [EN] - Paid-in capital increase (Class and number of new stock (common stock (shrs.)))
   */
  piic_nstk_ostk_cnt: string;

  /**
   * ## [KO] - 유상증자(신주의 종류와 수(기타주식 (주)))
   * ## [EN] - Paid-in capital increase (Class and number of new stock (different classes of stocks (shrs.)))
   */
  piic_nstk_estk_cnt: string;

  /**
   * ## [KO] - 유상증자(1주당 액면가액 (원))
   * ## [EN] - Paid-in capital increase (Par value per share (KRW))
   */
  piic_fv_ps: string;

  /**
   * ## [KO] - 유상증자(증자전 발행주식총수 (주)(보통주식 (주)))
   * ## [EN] - Paid-in capital increase (Total number of shares issued before capital increase (common stock (shrs.)))
   */
  piic_bfic_tisstk_ostk: string;

  /**
   * ## [KO] - 유상증자(증자전 발행주식총수 (주)(기타주식 (주)))
   * ## [EN] - Paid-in capital increase (Total number of shares issued before capital increase (different classes of stocks (shrs.)))
   */
  piic_bfic_tisstk_estk: string;

  /**
   * ## [KO] - 유상증자(자금조달의 목적(시설자금 (원)))
   * ## [EN] - Paid-in capital increase (Purpose of financing (Facility investment (KRW)))
   */
  piic_fdpp_fclt: string;

  /**
   * ## [KO] - 유상증자(자금조달의 목적(영업양수자금 (원)))
   * ## [EN] - Paid-in capital increase (Purpose of financing (Business acquisition (KRW)))
   */
  piic_fdpp_bsninh: string;

  /**
   * ## [KO] - 유상증자(자금조달의 목적(운영자금 (원)))
   * ## [EN] - Paid-in capital increase (Purpose of financing (Operating capital (KRW)))
   */
  piic_fdpp_op: string;

  /**
   * ## [KO] - 유상증자(자금조달의 목적(채무상환자금 (원)))
   * ## [EN] - Paid-in capital increase (Purpose of financing (Debt repayment (KRW)))
   */
  piic_fdpp_dtrp: string;

  /**
   * ## [KO] - 유상증자(자금조달의 목적(타법인 증권 취득자금 (원)))
   * ## [EN] - Paid-in capital increase (Purpose of financing (Acquisition of securities issued by other corporations (KRW)))
   */
  piic_fdpp_ocsa: string;

  /**
   * ## [KO] - 유상증자(자금조달의 목적(기타자금 (원)))
   * ## [EN] - Paid-in capital increase (Purpose of financing (Other purposes (KRW)))
   */
  piic_fdpp_etc: string;
}
