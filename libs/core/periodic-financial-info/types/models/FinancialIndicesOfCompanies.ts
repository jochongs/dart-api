import { DartModel } from "../../../../types/DartModel";

/**
 * ## [KO] - 복수 회사 주요 재무지표
 *
 * ## [EN] - Major financial indices of multiple companies
 */
export interface FinancialIndicesOfCompanies
  extends Pick<
    DartModel,
    "reprt_code" | "bsns_year" | "corp_code" | "stock_code"
  > {
  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD 형식
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD format
   */
  stlm_dt: string;

  /**
   * ## [KO] - 지표분류코드
   * 수익성(M210000) / 안정성(M220000) / 성장성(M230000) / 활동성(M240000)
   *
   * ## [EN] - Indicator category code
   * Profitability(M210000) / Stability(M220000) / Growth(M230000) / Activity(M240000)
   */
  idx_cl_code: "M210000" | "M220000" | "M230000" | "M240000";

  /**
   * ## [KO] - 지표분류명
   * 예) 수익성지표, 안정성지표 등
   *
   * ## [EN] - Indicator category name
   * e.g. Profitability indicator, Stability indicator, etc.
   */
  idx_cl_nm: string;

  /**
   * ## [KO] - 지표코드
   * 예) M211000
   *
   * ## [EN] - Indicator code
   * e.g. M211000
   */
  idx_code: string;

  /**
   * ## [KO] - 지표명
   * 예) 영업이익률
   *
   * ## [EN] - Indicator name
   * e.g. Operating income margin
   */
  idx_nm: string;

  /**
   * ## [KO] - 지표값
   * 예) 0.256
   *
   * ## [EN] - Indicator value
   * e.g. 0.256
   */
  idx_val?: string;
}
