import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 당사회사에관한사항
 * 합병, 주식의포괄적교환·이전, 분할 신고서 내 당사회사에관한사항 섹션
 *
 * ## [EN] - Company information
 * Company information section in merger, comprehensive stock exchange-transfer, and spin-off reports
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057
 */
export interface CompanyInfo extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 회사명
   *
   * ## [EN] - Company name
   */
  cmpnm: string;

  /**
   * ## [KO] - 구분
   * 합병회사, 피합병회사 등
   *
   * ## [EN] - Classification
   * Acquiring company, acquired company, etc.
   */
  sen: string;

  /**
   * ## [KO] - 총자산
   *
   * ## [EN] - Total assets (KRW)
   */
  tast: string;

  /**
   * ## [KO] - 자본금
   *
   * ## [EN] - Capital stock (KRW)
   */
  cpt: string;

  /**
   * ## [KO] - 발행주식종류
   *
   * ## [EN] - Issued stock type
   */
  isstk_knd: string;

  /**
   * ## [KO] - 발행주식수량
   *
   * ## [EN] - Issued stock quantity
   */
  isstk_cnt: string;
}
