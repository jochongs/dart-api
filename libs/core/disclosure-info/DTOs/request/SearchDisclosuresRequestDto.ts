import { PublicNotificationDetailType } from "../../types/PublicNotificationDetailType";
import { PublicNotificationType } from "../../types/PublicNotificationType";

/**
 * ## [KO]
 * 공시 검색 요청 인자
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001#:~:text=XML-,%EC%9A%94%EC%B2%AD%20%EC%9D%B8%EC%9E%90,-%EC%9A%94%EC%B2%AD%ED%82%A4
 *
 * ## [EN]
 * Disclosure search request parameters
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE001&apiId=AE00001#:~:text=XML-,Requested,-variables
 */
export type SearchDisclosuresRequestDto = {
  /**
   * ## [KO]
   * 공시대상회사의 고유번호(8자리)
   *
   * ## [EN]
   * Corporation code of disclosing company (8 digits)
   */
  corp_code?: string;

  /**
   * ## [KO]
   * 공시대상회사의 고유번호(8자리)
   *
   * ## [EN]
   * Corporation code of disclosing company (8 digits)
   */
  bgn_de?: string;

  /**
   * ## [KO]
   * 검색시작 접수일자(YYYYMMDD)
   * 1) 기본값 : 종료일(end_de)
   * 2) 고유번호(corp_code)가 없는 경우 검색기간은 3개월로 제한
   *
   * ## [EN]
   * Filing date when search starts (YYYYMMDD)
   * 1) Default value: End date (end_de)
   * 2) If no corporation code (corp_code), search period is limited to three months.
   */
  end_de?: string;

  /**
   * ## [KO]
   * 최종보고서만 검색여부(Y or N)
   * 1) 기본값 : N(정정이 있는 경우 최종정정만 검색)
   *
   * ## [EN]
   * Whether to search only final reports (Y or N)
   * 1) Default: N (if there are any corrections, search only the final correction)
   */
  last_reprt_at?: "Y" | "N";

  /**
   * ## [KO]
   * 공시 유형
   * - A : 정기공시
   * - B : 주요사항보고
   * - C : 발행공시
   * - D : 지분공시
   * - E : 기타공시
   * - F : 외부감사관련
   * - G : 펀드공시
   * - H : 자산유동화
   * - I : 거래소공시
   * - J : 공정위공시
   *
   * @example
   * ```ts
   * const dto: SearchDisclosuresRequestDto = {
   *    pblntf_ty: publicNotificationType.A
   * }
   * ```
   *
   * ## [EN]
   * Disclosure type
   * - A: Periodic Disclosure
   * - B: Report on Major Issues
   * - C: Issuance Disclosure
   * - D: Equity Disclosure
   * - E: Other Disclosure
   * - F: Related to External Audits
   * - G: Fund Disclosure
   * - H: Asset-Backed Securitization
   * - I: Exchange Disclosure
   * - J: Fair Trade Commission Disclosure
   *
   * @example
   * ```ts
   * const dto: SearchDisclosuresRequestDto = {
   *    pblntf_ty: publicNotificationType.A
   * }
   * ```
   */
  pblntf_ty?: PublicNotificationType;

  /**
   * ## [KO]
   * 공시 상세 유형
   * 주의: 공시 상세 유형을 입력할 경우 공시 유형은 무시됩니다.
   * - A
   *   - A001: 사업 보고서
   *   - A002: 반기 보고서
   *   - A003: 분기 보고서
   *   - A004: 등록법인 결산서류(자본시장법이전)
   *   - A005: 소액공모법인결산서류
   * - B
   *   - B001: 주요사항보고서
   *   - B002: 주요경영사항신고(자본시장법 이전)
   *   - B003: 최대주주등과의거래신고(자본시장법 이전)
   * - C
   *   - C001: 증권신고(지분증권)
   *   - C002: 증권신고(채무증권)
   *   - C003: 증권신고(파생결합증권)
   *   - C004: 증권신고(합병등)
   *   - C005: 증권신고(기타)
   *   - C006: 소액공모(지분증권)
   *   - C007: 소액공모(채무증권)
   *   - C008: 소액공모(파생결합증권)
   *   - C009: 소액공모(합병등)
   *   - C010: 소액공모(기타)
   *   - C011: 호가중개시스템을통한소액매출
   * - D
   *   - D001: 주식등의대량보유상황보고서
   *   - D002: 임원ㆍ주요주주특정증권등소유상황보고서
   *   - D003: 의결권대리행사권유
   *   - D004: 공개매수
   *   - D005: 임원ㆍ주요주주 특정증권등 거래계획보고서
   * - E
   *   - E001: 자기주식취득/처분
   *   - E002: 신탁계약체결/해지
   *   - E003: 합병등종료보고서
   *   - E004: 주식매수선택권부여에관한신고
   *   - E005: 사외이사에관한신고
   *   - E006: 주주총회소집보고서
   *   - E007: 시장조성/안정조작
   *   - E008: 합병등신고서(자본시장법 이전)
   *   - E009: 금융위등록/취소(자본시장법 이전)
   *   - E010: 이중상환청구권부채권(커버드본드)
   * - F
   *   - F001: 감사보고서
   *   - F002: 연결감사보고서
   *   - F003: 결합감사보고서
   *   - F004: 회계법인사업보고서
   *   - F005: 감사전재무제표미제출신고서
   * - G
   *   - G001: 증권신고(집합투자증권–신탁형)
   *   - G002: 증권신고(집합투자증권–회사형)
   *   - G003: 증권신고(집합투자증권–합병)
   * - H
   *   - H001: 자산유동화계획/양도등록
   *   - H002: 사업/반기/분기보고서
   *   - H003: 증권신고(유동화증권등)
   *   - H004: 채권유동화계획/양도등록
   *   - H005: 자산유동화관련중요사항발생등보고
   *   - H006: 주요사항보고서
   * - I
   *   - I001: 수시공시
   *   - I002: 공정공시
   *   - I003: 시장조치/안내
   *   - I004: 지분공시
   *   - I005: 증권투자회사
   *   - I006: 채권공시
   * - J
   *   - J001: 대규모내부거래관련
   *   - J002: 대규모내부거래관련(구)
   *   - J004: 기업집단현황공시
   *   - J005: 비상장회사중요사항공시
   *   - J006: 기타공정위공시
   *   - J008: 대규모내부거래관련(공익법인용)
   *   - J009: 하도급대금결제조건공시
   *
   * @example
   * ```ts
   * const dto: SearchDisclosuresRequestDto = {
   *   pblntf_detail_ty: publicNotificationDetailType.A001
   * }
   * ```
   *
   * ## [EN]
   * Public Notification Detail Type
   * Warn: Public Notification Detail Type will be ignored if Public Notification Type is entered.
   * - A
   *   - A001: Annual Report
   *   - A002: Semi-annual Report
   *   - A003: Quarterly Report
   *   - A004: Financial Report of Registered Corporation (Pre-Capital Markets Act)
   *   - A005: Financial Report of Small-Scale Public Offering Corporation
   * - B
   *   - B001: Report on Major Issues
   *   - B002: Report on Material Business Matters (Pre-Capital Markets Act)
   *   - B003: Report on Transactions with Largest Shareholder, etc. (Pre-Capital Markets Act)
   * - C
   *   - C001: Securities Report (Equity Securities)
   *   - C002: Securities Report (Debt Securities)
   *   - C003: Securities Report (Derivative-Linked Securities)
   *   - C004: Securities Report (Merger, etc.)
   *   - C005: Securities Report (Other)
   *   - C006: Small-Scale Public Offering (Equity Securities)
   *   - C007: Small-Scale Public Offering (Debt Securities)
   *   - C008: Small-Scale Public Offering (Derivative-Linked Securities)
   *   - C009: Small-Scale Public Offering (Merger, etc.)
   *   - C010: Small-Scale Public Offering (Other)
   *   - C011: Small-Scale Over-the-Counter Sales
   * - D
   *   - D001: Report on Significant Holdings of Stocks, etc.
   *   - D002: Report on Specific Securities Owned by Executives and Major Shareholders
   *   - D003: Proxy Solicitation
   *   - D004: Tender Offer
   *   - D005: Report on Trading Plans of Executives and Major Shareholders for Specific Securities
   * - E
   *   - E001: Acquisition/Disposal of Treasury Stock
   *   - E002: Entering/Termination of Trust Contracts
   *   - E003: Report on Conclusion of Merger, etc.
   *   - E004: Report on Granting Stock Options
   *   - E005: Report on Outside Directors
   *   - E006: Report on Calling Shareholders' Meeting
   *   - E007: Market Making / Stabilizing Operation
   *   - E008: Report of Merger, etc. (Pre-Capital Markets Act)
   *   - E009: FSC Registration / Cancellation (Pre-Capital Markets Act)
   *   - E010: Covered Bonds Issuance Plan
   * - F
   *   - F001: Audit Report
   *   - F002: Consolidated Audit Report
   *   - F003: Combined Audit Report
   *   - F004: Accounting Firm Annual Report
   *   - F005: Report on Non-submission of Financial Statements before Audit
   * - G
   *   - G001: Securities Report (Collective Investment Securities – Trust Type)
   *   - G002: Securities Report (Collective Investment Securities – Corporate Type)
   *   - G003: Securities Report (Collective Investment Securities – Merger)
   * - H
   *   - H001: Asset Securitization Plan / Transfer Registration
   *   - H002: Annual/ Semi-annual / Quarterly Reports
   *   - H003: Securities Report (Asset-Backed Securities, etc.)
   *   - H004: Claim-Backed Securitization Plan / Transfer Registration
   *   - H005: Report on Material Matters Related to Asset Securitization
   *   - H006: Report on Major Issues
   * - I
   *   - I001: Ad Hoc Disclosure
   *   - I002: Fair Disclosure
   *   - I003: Market Measures / Guide
   *   - I004: Equity Disclosure
   *   - I005: Securities Investment Company
   *   - I006: Bond Disclosure
   * - J
   *   - J001: Related to Large-Scale Internal Transaction
   *   - J002: Related to Large-Scale Internal Transaction (Former)
   *   - J004: Business Group Status Disclosure
   *   - J005: Disclosure of Material Facts Related to the Unlisted Company
   *   - J006: Other Fair Trade Commission Disclosures
   *   - J008: Related to Large-Scale Internal Transaction (for Nonprofits)
   *   - J009: Disclosure of Subcontracting Payment Terms
   *
   * @example
   * ```ts
   * const dto: SearchDisclosuresRequestDto = {
   *   pblntf_detail_ty: publicNotificationDetailType.A001
   * }
   * ```
   */
  pblntf_detail_ty?: PublicNotificationDetailType;

  /**
   * ## [KO]
   * 법인구분 : Y(유가), K(코스닥), N(코넥스), E(기타)
   *
   * ## [EN]
   * Corporation type: Y (KOSPI), K (KOSDAQ), N (KONEX), E (Other)
   */
  corp_cls?: "Y" | "K" | "N" | "E";

  /**
   * ## [KO]
   * 페이지 번호(1~n) 기본값 : 1
   *
   * @default 1
   *
   * ## [EN]
   * Page No. (1~n) default value: 1
   *
   * @default 1
   */
  page_no?: number;

  /**
   * ## [KO]
   * 오름차순(asc), 내림차순(desc)
   *
   * @default "desc"
   *
   * ## [EN]
   * Ascending (asc), descending(desc)
   *
   * @default "desc"
   */
  sort_mth?: "desc" | "asc";

  /**
   * ## [KO]
   * 정렬
   * - 접수일자: date
   * - 회사명 : crp
   * - 보고서명 : rpt
   *
   * ## [EN]
   * Sorting
   * - Filing date: date
   * - Company name: crp
   * - Report name: rpt
   *
   * @default "desc"
   */
  sort?: "date" | "crp" | "rpt";

  /**
   * ## [KO]
   * 페이지당 건수(1~100) 기본값 : 10, 최대값 : 100
   *
   * @default 10
   *
   * ## [EN]
   * Results per page (1~100) Default value: 10, Max value: 100
   *
   * @default 10
   */
  page_count?: number;
};
