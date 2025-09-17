import { DartModel } from "../../../../types/DartModel";

export interface SuspensionOfBusiness
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 영업정지 분야
   * 영업정지 분야
   *
   * ## [EN] - Suspended business sector
   * Suspended business sector
   */
  bsnsp_rm: string;

  /**
   * ## [KO] - 영업정지 내역(영업정지금액)
   * 9,999,999,999
   *
   * ## [EN] - Details of business suspension (Sales amount suspended)
   * 9,999,999,999
   */
  bsnsp_amt: string;

  /**
   * ## [KO] - 영업정지 내역(최근매출총액)
   * 9,999,999,999
   *
   * ## [EN] - Details of business suspension (Total sales of latest fiscal year)
   * 9,999,999,999
   */
  rsl: string;

  /**
   * ## [KO] - 영업정지 내역(매출액 대비)
   * 매출액 대비 비율(%)
   *
   * ## [EN] - Details of business suspension (Ratio to total sales)
   * Ratio to total sales (%)
   */
  sl_vs: string;

  /**
   * ## [KO] - 영업정지 내역(대규모법인여부)
   * 대규모법인여부
   *
   * ## [EN] - Details of business suspension (Classified as a large-sized corporation)
   * Classified as a large-sized corporation
   */
  ls_atn: string;

  /**
   * ## [KO] - 영업정지 내역(거래소 의무공시 해당 여부)
   * 거래소 의무공시 해당 여부
   *
   * ## [EN] - Details of business suspension (Subject to KRX disclosure obligations)
   * Subject to KRX disclosure obligations
   */
  krx_stt_atn: string;

  /**
   * ## [KO] - 영업정지 내용
   * 영업정지 내용
   *
   * ## [EN] - Suspended business operation
   * Suspended business operation
   */
  bsnsp_cn: string;

  /**
   * ## [KO] - 영업정지사유
   * 영업정지사유
   *
   * ## [EN] - Reasons for business suspension
   * Reasons for business suspension
   */
  bsnsp_rs: string;

  /**
   * ## [KO] - 향후대책
   * 향후대책
   *
   * ## [EN] - Actions to be taken
   * Actions to be taken
   */
  ft_ctp: string;

  /**
   * ## [KO] - 영업정지영향
   * 영업정지로 인한 영향
   *
   * ## [EN] - Effects of business suspension
   * Effects of business suspension
   */
  bsnsp_af: string;

  /**
   * ## [KO] - 영업정지일자
   * YYYY-MM-DD
   *
   * ## [EN] - Effective date of business suspension
   * YYYY-MM-DD
   */
  bsnspd: string;

  /**
   * ## [KO] - 이사회결의일(결정일)
   * YYYY-MM-DD
   *
   * ## [EN] - Date of board resolution (decision date)
   * YYYY-MM-DD
   */
  bddd: string;

  /**
   * ## [KO] - 사외이사 참석여부(참석)
   * 참석 인원 수
   *
   * ## [EN] - Attendance of outside directors (present)
   * Number of directors present
   */
  od_a_at_t: string;
}
