import { DartMarketType } from "./DartMarketType";
import { ReportCodeType } from "./ReportCodeType";

export interface DartModel {
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
   *
   * ## [EN] - Corporation name
   */
  corp_name: string;

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
   * ## [KO] - 사업 연도
   * 2019
   *
   * ## [EN] - Fiscal year
   * 2019
   */
  bsns_year: string;

  /**
   * ## [KO] - 종목 코드
   * 상장회사의 종목코드(6자리)
   *
   * ## [EN] - Item code
   * Listed corporation’s item code (6 digits)
   */
  stock_code: string;
}
