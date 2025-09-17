import { DartModel } from "../../../../types/DartModel";

export interface ExecutiveMajorShareholderReport
  extends Pick<DartModel, "rcept_no" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 접수일자
   * 공시 접수일자 (YYYY-MM-DD)
   *
   * ## [EN] - Filing date
   * Disclosure filing date (YYYY-MM-DD)
   */
  rcept_dt: string;

  /**
   * ## [KO] - 보고자
   * 보고자명
   *
   * ## [EN] - Reporter
   * Name of the reporting person
   */
  repror: string;

  /**
   * ## [KO] - 발행 회사 관계 임원(등기여부)
   * 등기임원, 비등기임원 등
   *
   * ## [EN] - Executive registration status
   * Registered executive, non-registered executive, etc.
   */
  isu_exctv_rgist_at: string;

  /**
   * ## [KO] - 발행 회사 관계 임원 직위
   * 대표이사, 이사, 전무 등
   *
   * ## [EN] - Executive position
   * Position of the executive (e.g., CEO, Director, Managing Director)
   */
  isu_exctv_ofcps: string;

  /**
   * ## [KO] - 발행 회사 관계 주요 주주
   * 10% 이상 주주 등
   *
   * ## [EN] - Major shareholder
   * Major shareholder of issuing company (e.g., over 10% shareholder)
   */
  isu_main_shrholdr: string;

  /**
   * ## [KO] - 특정 증권 등 소유 수
   * 9,999,999,999
   *
   * ## [EN] - Number of securities held
   * Number of specific securities held
   */
  sp_stock_lmp_cnt: string;

  /**
   * ## [KO] - 특정 증권 등 소유 증감 수
   * 9,999,999,999
   *
   * ## [EN] - Change in number of securities held
   * Increase or decrease in number of specific securities held
   */
  sp_stock_lmp_irds_cnt: string;

  /**
   * ## [KO] - 특정 증권 등 소유 비율
   * 0.00
   *
   * ## [EN] - Holding ratio of securities
   * Percentage of specific securities held
   */
  sp_stock_lmp_rate: string;

  /**
   * ## [KO] - 특정 증권 등 소유 증감 비율
   * 0.00
   *
   * ## [EN] - Change in holding ratio of securities
   * Increase or decrease in percentage of specific securities held
   */
  sp_stock_lmp_irds_rate: string;
}
