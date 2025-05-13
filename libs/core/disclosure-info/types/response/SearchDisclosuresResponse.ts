import { Disclosure, RawDisclosure } from "../../model/Disclosure";

/**
 * ## [KO]
 * `searchDisclosures` 메서드 응답 결과
 *
 * ## [EN]
 * Response of `searchDisclosures` method
 */
export type SearchDisclosuresResponse<
  T extends Disclosure | RawDisclosure = Disclosure
> = {
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

  list: T[];
};
