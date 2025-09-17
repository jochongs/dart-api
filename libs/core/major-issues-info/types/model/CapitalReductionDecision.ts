import { DartModel } from "../../../../types/DartModel";

export interface CapitalReductionDecision
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 감자주식의 종류와 수(보통주식 (주))
   *
   * ## [EN] - Class and number of reduced shares (Common stock (shrs.))
   */
  crstk_ostk_cnt: string;

  /**
   * ## [KO] - 감자주식의 종류와 수(기타주식 (주))
   *
   * ## [EN] - Class and number of reduced shares (Other classes of stocks (shrs.))
   */
  crstk_estk_cnt: string;

  /**
   * ## [KO] - 1주당 액면가액 (원)
   *
   * ## [EN] - Par value per share (KRW)
   */
  fv_ps: string;

  /**
   * ## [KO] - 감자전후 자본금(감자전 (원))
   *
   * ## [EN] - Changes in capital stock (Before capital reduction (KRW))
   */
  bfcr_cpt: string;

  /**
   * ## [KO] - 감자전후 자본금(감자후 (원))
   *
   * ## [EN] - Changes in capital stock (After capital reduction (KRW))
   */
  atcr_cpt: string;

  /**
   * ## [KO] - 감자전후 발행주식수(보통주식 (주)(감자전))
   *
   * ## [EN] - Number of issued shares (Common stock (Before capital reduction))
   */
  bfcr_tisstk_ostk: string;

  /**
   * ## [KO] - 감자전후 발행주식수(보통주식 (주)(감자후))
   *
   * ## [EN] - Number of issued shares (Common stock (After capital reduction))
   */
  atcr_tisstk_ostk: string;

  /**
   * ## [KO] - 감자전후 발행주식수(기타주식 (주)(감자전))
   *
   * ## [EN] - Number of issued shares (Other classes of stocks (Before capital reduction))
   */
  bfcr_tisstk_estk: string;

  /**
   * ## [KO] - 감자전후 발행주식수(기타주식 (주)(감자후))
   *
   * ## [EN] - Number of issued shares (Other classes of stocks (After capital reduction))
   */
  atcr_tisstk_estk: string;

  /**
   * ## [KO] - 감자비율(보통주식 (%))
   *
   * ## [EN] - Capital reduction ratio (Common stock (%))
   */
  cr_rt_ostk: string;

  /**
   * ## [KO] - 감자비율(기타주식 (%))
   *
   * ## [EN] - Capital reduction ratio (Other classes of stocks (%))
   */
  cr_rt_estk: string;

  /**
   * ## [KO] - 감자기준일
   *
   * ## [EN] - Record date of capital reduction
   */
  cr_std: string;
}
