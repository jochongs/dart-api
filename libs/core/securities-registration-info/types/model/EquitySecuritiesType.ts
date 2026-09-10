import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 증권의종류
 * 지분증권 및 증권예탁증권 신고서 내 증권의종류 섹션
 *
 * ## [EN] - Securities type
 * Securities type section in equity securities and depositary securities reports
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054
 */
export interface EquitySecuritiesType extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 증권구분
   *
   * ## [EN] - Securities type classification
   */
  stksen: string;

  /**
   * ## [KO] - 수량
   *
   * ## [EN] - Quantity
   */
  stkcnt: string;

  /**
   * ## [KO] - 액면가액
   *
   * ## [EN] - Par value (KRW)
   */
  fv: string;

  /**
   * ## [KO] - 발행/매출가액
   *
   * ## [EN] - Offering/sales price (KRW)
   */
  slprc: string;

  /**
   * ## [KO] - 발행/매출총액
   *
   * ## [EN] - Total offering/sales amount (KRW)
   */
  slta: string;

  /**
   * ## [KO] - 발행/매출방법
   *
   * ## [EN] - Offering/sales method
   */
  slmthn: string;
}
