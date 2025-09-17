import { DartFinancialStatementType } from "../../../../types/DartFinancialStatementType";

/**
 * ## [KO] - XBRL택사노미재무제표양식
 * 금융감독원 회계포탈에서 제공하는 IFRS 기반 XBRL 재무제표 공시용 표준계정과목체계(계정과목) 을 제공합니다.
 *
 * @link
 *
 * ## [EN] - XBRL taxonomy financial statements format
 * The standard account code system (title of account) for IFRS-based XBRL financial statement disclosure supplied by the accounting portal of the Financial Supervisory Service is provided.
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00037
 */
export interface XbrlTaxonomyFormat {
  /**
   * ## [KO] - 재무제표구분
   * Dart OpenAPI 제공 코드값 (BS1, IS1, CIS1 등)
   *
   * ## [EN] - Type of financial statement
   * Code value provided by Dart OpenAPI (e.g., BS1, IS1, CIS1)
   */
  sj_div: DartFinancialStatementType;

  /**
   * ## [KO] - 계정ID
   * 계정 고유명칭
   *
   * ## [EN] - Account ID
   * Unique account identifier
   */
  account_id: string;

  /**
   * ## [KO] - 계정명
   * 계정명
   *
   * ## [EN] - Account name
   * Name of the account
   */
  account_nm: string;

  /**
   * ## [KO] - 기준일
   * 적용 기준일
   *
   * ## [EN] - Baseline date
   * Application baseline date
   */
  bsns_de: string;

  /**
   * ## [KO] - 한글 출력명
   * 한글 출력명
   *
   * ## [EN] - Korean output name
   * Korean output name
   */
  label_kor: string;

  /**
   * ## [KO] - 영문 출력명
   * 영문 출력명
   *
   * ## [EN] - English output name
   * English output name
   */
  label_eng: string;

  /**
   * ## [KO] - 데이터 유형
   * text block, yyyy-mm-dd, Monetary Value 등
   *
   * ## [EN] - Data type
   * text block, yyyy-mm-dd, Monetary Value, etc.
   */
  data_tp: string;

  /**
   * ## [KO] - IFRS Reference
   * IFRS 문단 참조
   *
   * ## [EN] - IFRS Reference
   * IFRS reference paragraph
   */
  ifrs_ref: string;
}
