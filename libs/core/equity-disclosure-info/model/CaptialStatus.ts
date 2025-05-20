import { DartMarketType } from "../../../types/DartMarketType";
import { Stringify } from "../../../types/Stringify";

export class CapitalChangeStatus {
  /**
   * ## [KO]
   * 접수번호(14자리)
   *
   * ※ 공시뷰어 연결에 이용예시
   * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
   *
   * ## [EN]
   * Filing No. (14 digits)
   *
   * ※ Example link to Disclosure Viewer
   * - For PCs: https://englishdart.fss.or.kr/dsbh001/main.do?rcpNo=FilingNumber
   */
  public rcept_no: string;

  /**
   * ## [KO]
   * 법인구분
   *
   * 법인구분 : Y(유가), K(코스닥), N(코넥스), E(기타)
   *
   * ## [EN]
   * Corporation type
   *
   * Corporation type: Y (KOSPI), K (KOSDAQ), N (KONEX), E (Other)
   */
  public corp_cls: DartMarketType;

  /**
   * ## [KO]
   * 고유번호
   *
   * 공시대상회사의 고유번호(8자리)
   *
   * ## [EN]
   * Corporation code
   *
   * Corporation code of disclosing company (8 digits)
   */
  public corp_code: string;

  /**
   * ## [KO]
   * 법인명
   *
   * ## [EN]
   * Corporation name
   */
  public corp_name: string;

  /**
   * ## [KO]
   * 주식발행 감소일자
   *
   * ## [EN]
   * Stock issuance(reduction) date
   */
  public isu_dcrs_de: string;

  /**
   * ## [KO]
   * 발행 감소 형태
   *
   * ## [EN]
   * Issuance(reduction) type
   */
  public isu_dcrs_stle: string;

  /**
   * ## [KO]
   * 발행 감소 주식 종류
   *
   * ## [EN]
   * Details of issued (reduced) stocks ( Class of Shares )
   */
  public isu_dcrs_stock_knd: string;

  /**
   * ## [KO]
   * 발행 감소 수량
   *
   * ## [EN]
   * Details of issued (reduced) stocks( Quantity )
   *
   * @example "9,999,999,999"
   */
  public isu_dcrs_qy: string;

  /**
   * ## [KO]
   * 발행 감소 주당 액면 가액
   *
   * ## [EN]
   * Details of issued (reduced) stocks( Par value )
   *
   * @example "9,999,999,999"
   */
  public isu_dcrs_mstvdv_fval_amount: string;

  /**
   * ## [KO]
   * 발행 감소 주당 가액
   *
   * ## [EN]
   * Details of issued (reduced) stocks( Issued(reduced)value per share)
   *
   * @example "9,999,999,999"
   */
  public isu_dcrs_mstvdv_amount: string;

  /**
   * ## [KO]
   * 결산기준일
   *
   * ## [EN]
   * Settlement date
   *
   * YYYY.MM.DD
   */
  public stlm_dt: string;

  constructor(data: CapitalChangeStatus) {
    this.rcept_no = data.rcept_no;
    this.corp_cls = data.corp_cls;
    this.corp_code = data.corp_code;
    this.corp_name = data.corp_name;
    this.isu_dcrs_de = data.isu_dcrs_de;
    this.isu_dcrs_stle = data.isu_dcrs_stle;
    this.isu_dcrs_stock_knd = data.isu_dcrs_stock_knd;
    this.isu_dcrs_qy = data.isu_dcrs_qy;
    this.isu_dcrs_mstvdv_fval_amount = data.isu_dcrs_mstvdv_fval_amount;
    this.isu_dcrs_mstvdv_amount = data.isu_dcrs_mstvdv_amount;
    this.stlm_dt = data.stlm_dt;
  }
}
