import { DartModel } from "../../../../types/DartModel";

/**
 * ## [KO] - 단일회사 주요 재무지표
 * 상장법인(유가증권, 코스닥) 및 주요 비상장법인(사업보고서 제출대상 & IFRS 적용)이 제출한 정기보고서 내에 XBRL재무제표의 주요 재무지표를 제공합니다.
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2022001
 *
 * ## [EN] - Major financial indicators of a single company
 * We provide the major financial indicators of the XBRL financial statements in the periodic reports submitted by listed corporations (KOSPI, KOSDAQ) and major unlisted corporations (required to submit annual reports and subject to IFRS).
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00038
 */
export type IndicatorCategoryCode =
  | "M210000"
  | "M220000"
  | "M230000"
  | "M240000";

export interface FinancialIndicatorsOfCompany
  extends Pick<
    DartModel,
    "reprt_code" | "bsns_year" | "corp_code" | "stock_code"
  > {
  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD (영문 문서 예시: YYYY.MM.DD)
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD (EN sample shows: YYYY.MM.DD)
   */
  stlm_dt: string;

  /**
   * ## [KO] - 지표분류코드
   * 수익성지표: M210000 / 안정성지표: M220000 / 성장성지표: M230000 / 활동성지표: M240000
   *
   * ## [EN] - Indicator category code
   * Profitability: M210000 / Stability: M220000 / Growth: M230000 / Activity: M240000
   */
  idx_cl_code: IndicatorCategoryCode;

  /**
   * ## [KO] - 지표분류명
   * 수익성지표, 안정성지표, 성장성지표, 활동성지표
   *
   * ## [EN] - Indicator category name
   * Profitability indicator, Stability indicator, Growth indicator, Activity indicator
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
  idx_val: string;
}
