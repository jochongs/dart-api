import { DartFinancialStatementType } from "./DartFinancialStatementType";
import { ReportCodeType } from "./ReportCodeType";

export interface DartRequestParams {
  /**
   * ## [KO] - 고유번호
   * 공시대상회사의 고유번호(8자리)
   *
   * ## [EN] - Corporation code
   * Corporation code of disclosing company (8 digits)
   */
  corp_code: string;

  /**
   * ## [KO] - 사업연도(4자리)
   * ※ 2015년 이후 부터 정보제공
   *
   * ## [EN] - Fiscal year (4 digits)
   * ※ Information provided since 2015
   */
  bsns_year: string;

  /**
   * ## [KO] - 보고서 코드
   * - 11013: 1분기보고서
   * - 11012: 반기보고서
   * - 11014: 3분기보고서
   * - 11011: 사업보고서
   *
   * ## [EN] - Report code
   * - 11013: First Quarterly Report
   * - 11012: Semi-annual Report
   * - 11014: Third Quarterly Report
   * - 11011: Annual Report
   */
  reprt_code: ReportCodeType;

  /**
   * ## [KO] - 접수 번호
   * 조회방법 : 공시검색API 호출 > 응답요청 값 rcept_no 추출
   *
   * ## [EN] - Filing No.
   * How to view: Search disclosure API call > Extract requested response value rcept_no
   */
  rcept_no: string;

  /**
   * ## [KO] - 개별/연결구분
   * OFS:재무제표, CFS:연결재무제표
   *
   * ## [EN]- Seperate/consolidated
   * OFS:Financial statements, CFS:Consolidated financial statements
   */
  fs_div: "OFS" | "CFS";

  /**
   * ## [EN] - Type of financial statement
   *
   * ## [KO] - 재무제표구분
   */
  sj_div: DartFinancialStatementType;

  /**
   * ## [KO] - 시작일(최초접수일)
   * 검색시작 접수일자(YYYYMMDD) ※ 2015년 이후 부터 정보제공
   *
   * ## [EN] - Start date (date first filed)
   * Filing date when search starts (YYYYMMDD)
   * ※ Information provided since 2015
   */
  bgn_de: string;

  /**
   * ## [KO] - 종료일(최초접수일)
   * 검색종료 접수일자(YYYYMMDD) ※ 2015년 이후 부터 정보제공
   *
   * ## [EN] - End date (date first filed)
   * Filing date when search ends (YYYYMMDD)
   * ※ Information provided since 2015
   */
  end_de: string;
}
