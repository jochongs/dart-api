import { DartMarketType } from "../../../types/DartMarketType";

export interface DividendInfo {
  /**
   * ## [KO] - 접수번호(14자리)
   *
   * ※ 공시뷰어 연결에 이용예시
   * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
   *
   * ## [EN] - Filing No. (14 digits)
   *
   * ※ Example link to Disclosure Viewer
   * - For PCs: https://englishdart.fss.or.kr/dsbh001/main.do?rcpNo=FilingNumber
   */
  rcept_no: string;

  /**
   * ## [KO] - 법인구분
   * 법인구분 : Y(유가), K(코스닥), N(코넥스), E(기타)
   *
   * ## [EN] - Corporation type
   * Corporation type: Y (KOSPI), K (KOSDAQ), N (KONEX), E (Other)
   */
  corp_cls: DartMarketType;

  /**
   * ## [KO] - 고유번호
   * 공시대상회사의 고유번호(8자리)
   *
   * ## [EN] - Corporation code
   * Corporation code of disclosing company (8 digits)
   */
  corp_code: string;

  /**
   * ## [KO] - 법인명
   * 법인명
   *
   * ## [EN] - Corporation name
   * Corporation name
   */
  corp_name: string;

  /**
   * ## [KO] - 구분
   * 유상증자(주주배정), 전환권행사 등
   *
   * ## [EN] - Category
   * Paid-in capital increase (shareholder allocation), exercise of conversion rights, etc.
   */
  se: string;

  /**
   * ## [KO] - 주식 종류
   * 보통주 등
   *
   * ## [EN] - ype of Shares
   * Common stock, etc.
   */
  stock_kng: string;

  /**
   * ## [KO] - 당기
   * 당기
   *
   * ## [EN] - Current term
   * Current term
   *
   * @example "9,999,999,999"
   */
  thstrm: string;

  /**
   * ## [KO] - 전기
   * 전기
   *
   * ## [EN] - Previous term
   * Previous term
   *
   * @example "9,999,999,999"
   *
   */
  frmtrm: string;

  /**
   * ## [KO] - 전전기
   * 전전기
   *
   * ## [EN] - Two fiscal years prior
   * Two fiscal years prior
   *
   * @example "9,999,999,999"
   */
  lwfr: string;

  /**
   * ## [KO] 결산기준일
   * 결산기준일
   *
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * Settlement date
   *
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
