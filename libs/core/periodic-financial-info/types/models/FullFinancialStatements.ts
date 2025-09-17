import { DartModel } from "../../../../types/DartModel";

/**
 * ## [KO] - 단일회사 전체 재무제표
 * 상장법인(유가증권, 코스닥) 및 주요 비상장법인(사업보고서 제출대상 & IFRS 적용)이 제출한 정기보고서 내에 XBRL재무제표의 모든계정과목을 제공합니다.
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019020
 *
 * ## [EN] - Single company’s full financial statements
 * We provide all the titles of account (financial statements, income statements) of the XBRL financial statements in the periodic reports submitted by listed corporations (KOSPI, KOSDAQ) and major unlisted corporations (required to submit annual reports and subject to IFRS).
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00036
 */
export interface FullFinancialStatements
  extends Pick<
    DartModel,
    "rcept_no" | "reprt_code" | "bsns_year" | "corp_code"
  > {
  /**
   * ## [KO] - 재무제표구분
   *
   * - BS : 재무상태표
   * - IS : 손익계산서
   * - CIS : 포괄손익계산서
   * - CF : 현금흐름표
   * - SCE : 자본변동표
   *
   * ## [EN] - Type of financial statement
   *
   * - BS : Statement of financial position
   * - IS : Income statement
   * - CIS : Comprehensive income statement
   * - CF : Cash flow statement
   * - SCE : Statement of changes in equity
   */
  sj_div: "BS" | "IS" | "CIS" | "CF" | "SCE";

  /**
   * ## [KO] - 재무제표명
   * ex) 재무상태표 또는 손익계산서 출력
   *
   * ## [EN] - Financial statement title
   * e.g. Print statement of financial position or income statement
   */
  sj_nm: string;

  /**
   * ## [KO] - 	계정ID
   * XBRL 표준계정ID ※ 표준계정ID가 아닐경우 ""-표준계정코드 미사용-"" 표시
   *
   * ## [EN] - Account ID
   * XBRL Standard Account ID
   * ※If it is not a Standard Account ID, display "-Standard Account Code Not Used-"
   */
  account_id: string;

  /**
   * ## [KO] - 계정명
   * 계정명칭 ex) 자본총계
   *
   * ## [EN] - Account name
   * Account name
   * e.g. Total equity
   */
  account_nm: string;

  /**
   * ## [KO] - 계정상세
   * ※ 자본변동표에만 출력 ex) 계정 상세명칭 예시 - 자본 [member]|지배기업 소유주지분 - 자본 [member]|지배기업 소유주지분|기타포괄손익누계액 [member]
   *
   * ## [EN] - Detail account
   *
   * ※ Display only in the Statement of Changes in Equity
   * e.g. Detailed Account Name
   *
   * - Equity [member]|Parent Company Owner's Equity
   * - Equity [member]|Parent Company Owner's Equity|Accumulated Other Comprehensive Income [member]
   */
  account_detail: string;

  /**
   * ## [KO] - 당기명
   * ex) 제 13 기
   *
   * ## [EN] - Term name
   * e.g. 13th Term
   */
  thstrm_nm: string;

  /**
   * ## [KO] - 당기금액
   * 9,999,999,999 ※ 분/반기 보고서이면서 (포괄)손익계산서 일 경우 [3개월] 금액
   *
   * ## [EN] - Term amount
   * 9,999,999,999
   * ※For quarterly/semi-annual (comprehensive) income statements, [3 months] amount
   */
  thstrm_amount: string;

  /**
   * ## [KO] - 당기누적금액
   * 9,999,999,999
   *
   * ## [EN] - Accumulated term amount
   * 9,999,999,999
   */
  thstrm_add_amount: string;

  /**
   * ## [KO] - 전기명
   * ex) 제 12 기말
   *
   * ## [EN] - Previous term name
   * e.g. End of 12th Term
   */
  frmtrm_nm: string;

  /**
   * ## [KO] - 전기금액
   * 9,999,999,999
   *
   * ## [EN] - Previous term amount
   * 9,999,999,999
   */
  frmtrm_amount: string;

  /**
   * ## [KO] - 전기명(분/반기)
   * ex) 제 18 기 반기
   *
   * ## [EN] - Previous term name(Quarterly/Semiannual)
   * e.g. 18th Term first half
   */
  frmtrm_q_nm: string;

  /**
   * ## [KO] - 전기금액(분/반기)
   * 9,999,999,999 ※ 분/반기 보고서이면서 (포괄)손익계산서 일 경우 [3개월] 금액
   *
   * ## [EN] - Previous term amount(Quarterly/Semiannual)
   * 9,999,999,999
   * ※For quarterly/semi-annual (comprehensive) income statements, [3 months] amount
   */
  frmtrm_q_amount: string;

  /**
   * ## [KO] - 전기누적금액
   * 9,999,999,999
   *
   * ## [EN] - Accumulated previous term amount
   * 9,999,999,999
   */
  frmtrm_add_amount: string;

  /**
   * ## [KO] - 전전기명
   * ex) 제 11 기말(※ 사업보고서의 경우에만 출력)
   *
   * ## [EN] - Name of term before previous
   * e.g. End of 11th Term (※ only printed on annual reports)
   */
  bfefrmtrm_nm: string;

  /**
   * ## [KO] - 전전기금액
   * 9,999,999,999(※ 사업보고서의 경우에만 출력)
   *
   * ## [EN] - Amount of term before previous
   * 9,999,999,999 (※ only printed on annual reports)
   */
  bfefrmtrm_amount: string;

  /**
   * ## [KO] - 계정과목 정렬순서
   * 계정과목 정렬순서
   *
   * ## [EN] - Account code sort order
   * Account code sort order
   */
  ord: string;

  /**
   * ## [KO] - 통화 단위
   * 통화 단위
   *
   * ## [EN] - Currency unit
   * Currency unit
   */
  currency: string;
}
