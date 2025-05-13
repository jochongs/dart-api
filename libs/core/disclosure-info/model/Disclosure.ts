import { Stringify } from "../../../types/Stringify";

/**
 * ## [KO]
 * 공시 데이터
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001#:~:text=%EC%B4%9D%20%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%88%98-,list,-corp_cls
 *
 * ## [EN]
 * Disclosure data
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE001&apiId=AE00001#:~:text=Total%20pages-,list,-corp_cls
 */
export type RawDisclosure = Stringify<Disclosure>;

/**
 * ## [KO]
 * 공시 데이터
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001#:~:text=%EC%B4%9D%20%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%88%98-,list,-corp_cls
 *
 * ## [EN]
 * Disclosure data
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE001&apiId=AE00001#:~:text=Total%20pages-,list,-corp_cls
 */
export class Disclosure {
  /**
   * ## [KO]
   * 법인구분 : Y(유가), K(코스닥), N(코넥스), E(기타)
   *
   * ## [EN]
   * Corporation type: Y (KOSPI), K (KOSDAQ), N (KONEX), E (Other)
   */
  public corp_cls: "Y" | "K" | "N" | "E";

  /**
   * ## [KO]
   * - 종목명(법인명)
   *
   * 공시대상회사의 종목명(상장사) 또는 법인명(기타법인)
   *
   * ## [EN]
   * - Item name (corporation name)
   *
   * The item name (listed company) or corporation name (other corporation) of the corporation subject to disclosure
   */
  public corp_name: string;

  /**
   * ## [KO]
   * - 고유 번호
   *
   * 공시대상회사의 고유번호(8자리)
   *
   * ## [EN]
   * - Corporation code
   *
   * Corporation code of the corporation subject to disclosure (8 digits)
   */
  public corp_code: string;

  /**
   * ## [KO]
   * - 종목 코드
   *
   * 상장회사의 종목코드(6자리)
   *
   * ## [EN]
   * - Item code
   *
   * Listed corporation’s item code (6 digits)
   */
  public stock_code: string;

  /**
   * ## [KO]
   * - 보고서명
   *
   * 공시구분+보고서명+기타정보
   *
   * - [기재정정] : 본 보고서명으로 이미 제출된 보고서의 기재내용이 변경되어 제출된 것임
   * - [첨부정정] : 본 보고서명으로 이미 제출된 보고서의 첨부내용이 변경되어 제출된 것임
   * - [첨부추가] : 본 보고서명으로 이미 제출된 보고서의 첨부서류가 추가되어 제출된 것임
   * - [변경등록] : 본 보고서명으로 이미 제출된 보고서의 유동화계획이 변경되어 제출된 것임
   * - [연장결정] : 본 보고서명으로 이미 제출된 보고서의 신탁계약이 연장되어 제출된 것임
   * - [발행조건확정] : 본 보고서명으로 이미 제출된 보고서의 유가증권 발행조건이 확정되어 제출된 것임
   * - [정정명령부과] : 본 보고서에 대하여 금융감독원이 정정명령을 부과한 것임
   * - [정정제출요구] : 본 보고서에 대하여 금융감독원이 정정제출요구을 부과한 것임
   *
   * ## [EN]
   * - Report title
   *
   * Disclosure type + report name + other information
   * - [Revision of statements]: A report previously submitted under this title was corrected in its descriptions and re-submitted.
   * - [Corrected attachment]: A report previously submitted under this title was re-submitted when the substance of at least one attachment was modified.
   * - [Added attachment]: A report previously submitted under this title was re-submitted when one or more attachment was added.
   * - [Modified registration]: A report previously submitted under this title was re-submitted when its asset securitization was modified.
   * - [Decision to extend]: A report previously submitted under this title was re-submitted since the trust contract was extended.
   * - [Conditions for issuance finalized]: A report previously submitted under this title was re-submitted upon the finalization of the conditions for issuing marketable securities.
   * - [Correction order imposed]: The Financial Supervisory Service issued a correction order on this report.
   * - [Requested submission of correction]: The Financial Supervisory Service imposed a request for a correction on this report.
   */
  public report_nm: string;

  /**
   * ## [KO]
   * - 접수번호
   *
   * 접수번호(14자리)
   *
   * ※ 공시뷰어 연결에 이용예시
   * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
   *
   * ## [EN]
   * - 	Filing No.
   *
   * Filing No. (14 digits)
   *
   * ※ Example link to Disclosure Viewer
   * - For PCs: https://englishdart.fss.or.kr/dsbh001/main.do?rcpNo=FilingNumber
   */
  public rcept_no: string;

  /**
   * ## [KO]
   * - 공시 제출인명
   *
   * 공시 제출인명
   *
   * ## [EN]
   * - Disclosure submitter name
   *
   * Disclosure submitter name
   */
  public flr_nm: string;

  /**
   * ## [KO]
   * - 접수일자
   *
   * 공시 접수일자(YYYYMMDD)
   *
   * ## [EN]
   * - Filing date
   *
   * Disclosure filing date (YYYYMMDD)
   */
  public rcept_dt: Date;

  /**
   * ## [KO]
   * - 비고
   *
   * 조합된 문자로 각각은 아래와 같은 의미가 있음
   * - 유 : 본 공시사항은 한국거래소 유가증권시장본부 소관임
   * - 코 : 본 공시사항은 한국거래소 코스닥시장본부 소관임
   * - 채 : 본 문서는 한국거래소 채권상장법인 공시사항임
   * - 넥 : 본 문서는 한국거래소 코넥스시장 소관임
   * - 공 : 본 공시사항은 공정거래위원회 소관임
   * - 연 : 본 보고서는 연결부분을 포함한 것임
   * - 정 : 본 보고서 제출 후 정정신고가 있으니 관련 보고서를 참조하시기 바람
   * - 철 : 본 보고서는 철회(간주)되었으니 관련 철회신고서(철회간주안내)를 참고하시기 바람
   *
   * ## [EN]
   * - Note
   *
   * The individual letters in the combinations have the following meanings:
   * - S: This disclosure is under the authority of the KOSPI Market Division of the Korea Exchange.
   * - K: This disclosure is under the authority of the KOSDAQ Market Division of the Korea Exchange.
   * - B: This document is a disclosure item of a bonds listed company of the Korea Exchange.
   * - N: This document is under the authority of the KONEX Market of the Korea Exchange.
   * - F: This disclosure is under the authority of the Fair Trade Commission.
   * - C: This report includes consolidated portions.
   * - U: A correction report was made after the submission of this report; see the relevant report.
   * - W: This report was (deemed) withdrawn; see the relevant withdrawal statement (notice of deemed withdrawal).
   */
  public rm: string;

  constructor(data: Disclosure) {
    this.corp_cls = data.corp_cls;
    this.corp_name = data.corp_name;
    this.corp_code = data.corp_code;
    this.stock_code = data.stock_code;
    this.report_nm = data.report_nm;
    this.rcept_no = data.rcept_no;
    this.flr_nm = data.flr_nm;
    this.rcept_dt = data.rcept_dt;
    this.rm = data.rm;
  }

  public static fromRaw(data: RawDisclosure) {
    return new Disclosure({
      corp_cls: data.corp_cls as any,
      corp_name: data.corp_name,
      corp_code: data.corp_code,
      stock_code: data.stock_code,
      report_nm: data.report_nm,
      rcept_no: data.rcept_no,
      flr_nm: data.flr_nm,
      rcept_dt: new Date(data.rcept_dt),
      rm: data.rm,
    });
  }
}
