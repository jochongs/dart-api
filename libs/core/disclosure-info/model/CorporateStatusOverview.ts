import { Stringify } from "../../../types/Stringify";

export type RawCorporateStatusOverview = Stringify<CorporateStatusOverview>;

/**
 * ## [KO]
 * 기업 개황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019002#:~:text=%EA%B3%B5%EC%8B%9C%EC%A0%95%EB%B3%B4%20%3E%20%EA%B3%A0%EC%9C%A0%EB%B2%88%ED%98%B8%20%EC%B0%B8%EA%B3%A0-,%EC%9D%91%EB%8B%B5,-%EA%B2%B0%EA%B3%BC
 *
 * ## [EN]
 * Overview of corporate status
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE001&apiId=AE00002#:~:text=Information%20%3E%20Corporation%20code-,Response,-result
 */
export type CorporateStatusOverview = {
  /**
   * ## [KO]
   * - 정식 명칭
   *
   * 정식회사명칭
   *
   * ## [EN]
   * - Formal name
   *
   * Formal corporate name
   */
  corp_name: string;

  /**
   * ## [KO]
   * - 영문 명칭
   *
   * 영문정식회사명칭
   *
   * ## [EN]
   * - English name
   *
   * English formal corporate name
   */
  corp_name_eng: string;

  /**
   * ## [KO]
   * - 종목명(상장사) 또는 약식명칭(기타법인)
   *
   * 종목명(상장사) 또는 약식명칭(기타법인)
   *
   * ## [EN]
   * - Item name (listed corporation) or abbreviated name (other corporation)
   *
   * Item name (listed corporation) or abbreviated name (other corporation)
   */
  stock_name: string;

  /**
   * ## [KO]
   * - 상장회사인 경우 주식의 종목코드
   *
   * 상장회사의 종목코드(6자리)
   *
   * ## [EN]
   * - If a listed corporation, stock item code
   *
   * Listed corporation's item code (6 digits)
   */
  stock_code: string;

  /**
   * ## [KO]
   * - 대표자명
   *
   * 대표자명
   *
   * ## [EN]
   * - Representative name
   *
   * Representative name
   */
  ceo_nm: string;

  /**
   * ## [KO]
   * - 법인구분
   *
   * 법인구분 : Y(유가), K(코스닥), N(코넥스), E(기타)
   *
   * ## [EN]
   * - Corporation type
   *
   * Corporation type: Y (KOSPI), K (KOSDAQ), N (KONEX), E (Other)
   */
  corp_cls: "Y" | "K" | "N" | "E";

  /**
   * ## [KO]
   * - 법인등록번호
   *
   * 법인등록번호
   *
   * ## [EN]
   * - 	Corporate registration No.
   *
   * Corporate registration No.
   */
  jurir_no: string | null;

  /**
   * ## [KO]
   * - 사업자등록번호
   *
   * 사업자등록번호
   *
   * ## [EN]
   * - Business registration No.
   *
   * Business registration No.
   */
  bizr_no: string;

  /**
   * ## [KO]
   * - 주소
   *
   * 주소
   *
   * ## [EN]
   * - Address
   *
   * Address
   */
  adres: string;

  /**
   * ## [KO]
   * - 홈페이지
   *
   * 홈페이지
   *
   * ## [EN]
   * - Website URL
   *
   * Website URL
   */
  hm_url: string | null;

  /**
   * ## [KO]
   * - IR홈페이지
   *
   * IR홈페이지
   *
   * ## [EN]
   * - IR website
   *
   * IR website
   */
  ir_url: string | null;

  /**
   * ## [KO]
   * - 전화번호
   *
   * 전화번호
   *
   * ## [EN]
   * - Telephone No.
   *
   * Telephone No.
   */
  phn_no: string;

  /**
   * ## [KO]
   * - 팩스번호
   *
   * 팩스번호
   *
   * ## [EN]
   * - Fax No.
   *
   * Fax No.
   */
  fax_no: string | null;

  /**
   * ## [KO]
   * - 업종 코드
   *
   * 업종코드
   *
   * ## [EN]
   * - Industry code
   *
   * Industry code
   */
  induty_code: string;

  /**
   * ## [KO]
   * - 설립일(YYYYMMDD)
   *
   * 설립일(YYYYMMDD)
   *
   * ## [EN]
   * - Establishment date (YYYYMMDD)
   *
   * Establishment date (YYYYMMDD)
   */
  est_dt: string;

  /**
   * ## [KO]
   * - 결산월(MM)
   *
   * 결산월(MM)
   *
   * ## [EN]
   * - Month of settlement (MM)
   *
   * Month of settlement (MM)
   */
  acc_mt: string;
};
