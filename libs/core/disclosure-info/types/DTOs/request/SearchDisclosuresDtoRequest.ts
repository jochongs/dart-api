/**
 * ## [KO]
 * 공시 검색 요청 인자
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001#:~:text=XML-,%EC%9A%94%EC%B2%AD%20%EC%9D%B8%EC%9E%90,-%EC%9A%94%EC%B2%AD%ED%82%A4
 *
 * ## [EN]
 *
 */
export type SearchDisclosuresRequestDto = {
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
   * ## [EN]
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
   */
  pblntf_ty?: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J";

  pblntf_detail_ty?: string;

  /**
   * ## [KO]
   *
   *
   * ## [EN]
   *
   */
  page_no?: number;
  page_count?: number;
  corp_code?: string;

  corp_cls: "Y";
  sort: "date";
  sort_mth: "desc";
};
