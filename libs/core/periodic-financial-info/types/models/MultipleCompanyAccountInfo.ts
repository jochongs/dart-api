import { DartModel } from "../../../../types/DartModel";

/**
 * ## [KO] - 다중회사 주요계정
 * 상장법인(유가증권, 코스닥) 및 주요 비상장법인(사업보고서 제출대상 & IFRS 적용)이 제출한 정기보고서 내에
 * XBRL재무제표의 주요계정과목(재무상태표, 손익계산서)을 제공합니다. (대상법인 복수조회 가능)
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019017
 *
 * ## [EN] - Major accounts of multiple companies
 * We provide the major accounts (financial statements, income statements) of the XBRL financial statements in the periodic reports submitted by listed corporations
 * (KOSPI, KOSDAQ) and major unlisted corporations (required to submit annual reports and subject to IFRS). You can view multiple subject corporations.
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00034
 */
export interface MultipleCompanyAccountInfo
  extends Pick<
    DartModel,
    "rcept_no" | "bsns_year" | "stock_code" | "reprt_code"
  > {
  /**
   * ## [KO] - 계정명
   * ex) 자본총계
   *
   * ## [EN] - Account name
   * e.g. Total equity
   */
  account_nm: string;

  /**
   * ## [KO] - 개별/연결구분
   * OFS:재무제표, CFS:연결재무제표
   *
   * ## [EN] - Separate/consolidated
   * OFS: Financial statements, CFS: Consolidated financial statements
   */
  fs_div: string;

  /**
   * ## [KO] - 개별/연결명
   * ex) 연결재무제표 또는 재무제표 출력
   *
   * ## [EN] - 	Seperate/consolidated title
   * e.g. Print consolidated finacial statements or finacial statements
   */
  fs_nm: string;

  /**
   * ## [KO] - 재무제표구분
   * BS:재무상태표, IS:손익계산서
   *
   * ## [EN] - Type of financial statement
   * BS: Balance sheet, IS: Income statement
   */
  sj_div: string;

  /**
   * ## [KO] - 재무제표명
   * ex) 재무상태표 또는 손익계산서 출력
   *
   * ## [EN] - Title of financial statement
   * e.g. Print statement of financial position or income statement
   */
  sj_nm: string;

  /**
   * ## [KO] - 당기명
   * ex) 제 13 기 3분기말
   *
   * ## [EN] - Current term title
   * e.g. End of Q3 in 13th Term
   */
  thstrm_nm: string;

  /**
   * ## [KO] - 당기일자
   * ex) 2018.09.30 현재
   *
   * ## [EN] - Current term date
   * e.g. As of September 30, 2018
   */
  thstrm_dt: string;

  /**
   * ## [KO] - 당기금액
   * 9,999,999,999
   *
   * ## [EN] - Current term amount
   * 9,999,999,999
   */
  thstrm_amount: string;

  /**
   * ## [KO] - 당기누적금액
   * 9,999,999,999
   *
   * ## [EN] - Accumulated current term amount
   * 9,999,999,999
   */
  thstrm_add_amount: string;

  /**
   * ## [KO] - 전기명
   * ex) 제 12 기말
   *
   * ## [EN] - Previous term title
   * e.g. End of 12th Term
   */
  frmtrm_nm: string;

  /**
   * ## [KO] - 전기일자
   * ex) 2017.01.01 ~ 2017.12.31
   *
   * ## [EN] - Previous term date
   * e.g. 2017.01.01 ~ 2017.12.31
   */
  frmtrm_dt: string;

  /**
   * ## [KO] - 전기금액
   * 9,999,999,999
   *
   * ## [EN] - Previous term amount
   * 9,999,999,999
   */
  frmtrm_amount: string;

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
   * ## [EN] - Title of term before previous
   * e.g. End of 11th Term (※ only printed on annual reports)
   */
  bfefrmtrm_nm: string;

  /**
   * ## [KO] - 전전기일자
   * ex) 2016.12.31 현재(※ 사업보고서의 경우에만 출력)
   *
   * ## [EN] - Date of term before previous
   * e.g. As of December 31, 2016 (※ only printed on annual reports)
   */
  bfefrmtrm_dt: string;

  /**
   * ## [KO] - 전전기금액
   * 9,999,999,999(※ 사업보고서의 경우에만 출력)
   *
   * ## [EN] - Amount of term before previous
   * 9,999,999,999 (※ Only printed on annual reports)
   */
  bfefrmtrm_amount: string;

  /**
   * ## [KO] - 계정과목 정렬순서
   * 계정과목 정렬순서
   *
   * ## [EN] - Order of account titles
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
