export type SearchDisclosureResponse = {
  /**
   * ## [KO]
   * 페이지 번호
   *
   * ## [EN]
   * Page No.
   */
  page_no: number;

  /**
   * ## [KO]
   * 페이지 별 건수
   *
   * ## [EN]
   * Results per page
   */
  page_count: number;

  /**
   * ## [KO]
   * 총 건수
   *
   * ## [EN]
   * Total results
   */
  total_count: number;

  /**
   * ## [KO]
   * 총 페이지 수
   *
   * ## [EN]
   * Total pages
   */
  total_page: number;
};
