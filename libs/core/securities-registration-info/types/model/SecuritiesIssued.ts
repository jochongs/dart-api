import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 발행증권
 * 합병, 주식의포괄적교환·이전, 분할 신고서 내 발행증권 섹션
 *
 * ## [EN] - Securities issued
 * Securities issued section in merger, comprehensive stock exchange-transfer, and spin-off reports
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057
 */
export interface SecuritiesIssued extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 종류
   *
   * ## [EN] - Securities type
   */
  kndn: string;

  /**
   * ## [KO] - 수량
   *
   * ## [EN] - Quantity
   */
  cnt: string;

  /**
   * ## [KO] - 액면가액
   *
   * ## [EN] - Par value (KRW)
   */
  fv: string;

  /**
   * ## [KO] - 발행/매출가액
   *
   * ## [EN] - Issuance/sales price (KRW)
   */
  slprc: string;

  /**
   * ## [KO] - 발행/매출총액
   *
   * ## [EN] - Total issuance/sales amount (KRW)
   */
  slta: string;
}
