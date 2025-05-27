import { DartMarketType } from "../../../../types/DartMarketType";

/**
 * ## [KO] - 정기보고서 주요 정보 기본 인자
 *
 * ## [EN] - Basic parameters for major information of periodic reports
 */
export interface BasicPeriodicReportsInfo {
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
}
