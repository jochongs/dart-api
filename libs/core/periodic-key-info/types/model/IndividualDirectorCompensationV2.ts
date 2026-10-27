import { StockBasedCompensationV2 } from "./StockBasedCompensationV2";

/**
 * ## [KO] - 이사·감사의 개인별 보수현황(5억원 이상) Ver 2.0
 * `group` 배열의 개인별·사업연도별 보수 정보입니다.
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2026001
 *
 * ## [EN] - Remuneration for individual directors and auditors (Ver 2.0)
 * Remuneration for one person and fiscal year in the `group` array.
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=2026001
 */
export interface IndividualDirectorCompensationV2 {
  /**
   * ## [KO] - 이름
   * 홍길동
   *
   * ## [EN] - Name
   * Hong Gildong
   */
  nm: string;

  /**
   * ## [KO] - 당기/전기/전전기 구분
   *
   * ## [EN] - Current/previous/prior fiscal year classification
   */
  fscl_year: string;

  /**
   * ## [KO] - 직위
   * 이사, 대표이사 등
   *
   * ## [EN] - Position
   * Director, CEO, etc.
   */
  ofcps: string;

  /**
   * ## [KO] - 보수 총액
   * 9,999,999,999
   *
   * ## [EN] - Total remuneration
   * 9,999,999,999
   */
  mendng_totamt: string;

  /**
   * ## [KO] - 주식기준보상 상세 내역
   *
   * ## [EN] - Stock-based compensation details
   */
  list: StockBasedCompensationV2[];
}
