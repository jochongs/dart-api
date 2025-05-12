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
   *
   * ## [EN]
   * Disclosure type
   */
  pblntf_ty?: PublicNotificationType;

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
