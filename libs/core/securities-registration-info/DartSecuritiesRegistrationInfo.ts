import { DartBase } from "../DartBase";
import { KeyMode } from "../../types/KeyMode";
import { DartKeyArgs } from "../../types/DartKeyArgs";
import { SecuritiesRegistrationParams } from "./types/params/SecuritiesRegistrationParams";
import {
  SecuritiesRegistrationGroup,
  SecuritiesRegistrationResponse,
} from "./types/responses/SecuritiesRegistrationResponse";
import { EquitySecuritiesGeneralAffairs } from "./types/model/EquitySecuritiesGeneralAffairs";
import { EquitySecuritiesType } from "./types/model/EquitySecuritiesType";
import { UnderwriterInfo } from "./types/model/UnderwriterInfo";
import { FundUsage } from "./types/model/FundUsage";
import { SalesHolder } from "./types/model/SalesHolder";
import { GeneralSubscriptionRedemption } from "./types/model/GeneralSubscriptionRedemption";
import { DebtSecuritiesGeneralAffairs } from "./types/model/DebtSecuritiesGeneralAffairs";
import { MergerGeneralAffairs } from "./types/model/MergerGeneralAffairs";
import { SecuritiesIssued } from "./types/model/SecuritiesIssued";
import { CompanyInfo } from "./types/model/CompanyInfo";

/**
 * ## [KO]
 * 증권신고서 주요정보를 제공합니다.
 *
 * @link https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS006
 *
 * ## [EN]
 * Provides major information of securities registration statements.
 *
 * @link https://engopendart.fss.or.kr/guide/main.do?apiGrpCd=DE006
 */
export class DartSecuritiesRegistrationInfo<
  K extends KeyMode = "INJECTED",
> extends DartBase<K> {
  /**
   * ## [KO] - 지분증권
   * 증권신고서(지분증권) 주요정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054
   *
   * ## [EN] - Equity securities
   * Provides major information of equity securities registration statements.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE006&apiId=2020054
   */
  public async getEquitySecurities(
    params: SecuritiesRegistrationParams,
    ...args: DartKeyArgs<K>
  ): Promise<
    SecuritiesRegistrationResponse<
      [
        SecuritiesRegistrationGroup<EquitySecuritiesGeneralAffairs>,
        SecuritiesRegistrationGroup<EquitySecuritiesType>,
        SecuritiesRegistrationGroup<UnderwriterInfo>,
        SecuritiesRegistrationGroup<FundUsage>,
        SecuritiesRegistrationGroup<SalesHolder>,
        SecuritiesRegistrationGroup<GeneralSubscriptionRedemption>,
      ]
    >
  > {
    return await this.get<
      SecuritiesRegistrationResponse<
        [
          SecuritiesRegistrationGroup<EquitySecuritiesGeneralAffairs>,
          SecuritiesRegistrationGroup<EquitySecuritiesType>,
          SecuritiesRegistrationGroup<UnderwriterInfo>,
          SecuritiesRegistrationGroup<FundUsage>,
          SecuritiesRegistrationGroup<SalesHolder>,
          SecuritiesRegistrationGroup<GeneralSubscriptionRedemption>,
        ]
      >
    >("estkRs.json", params, this.getKeyFromArgs(args));
  }

  /**
   * ## [KO] - 채무증권
   * 증권신고서(채무증권) 주요정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020055
   *
   * ## [EN] - Debt securities
   * Provides major information of debt securities registration statements.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE006&apiId=2020055
   */
  public async getDebtSecurities(
    params: SecuritiesRegistrationParams,
    ...args: DartKeyArgs<K>
  ): Promise<
    SecuritiesRegistrationResponse<
      [
        SecuritiesRegistrationGroup<DebtSecuritiesGeneralAffairs>,
        SecuritiesRegistrationGroup<UnderwriterInfo>,
        SecuritiesRegistrationGroup<FundUsage>,
        SecuritiesRegistrationGroup<SalesHolder>,
      ]
    >
  > {
    return await this.get<
      SecuritiesRegistrationResponse<
        [
          SecuritiesRegistrationGroup<DebtSecuritiesGeneralAffairs>,
          SecuritiesRegistrationGroup<UnderwriterInfo>,
          SecuritiesRegistrationGroup<FundUsage>,
          SecuritiesRegistrationGroup<SalesHolder>,
        ]
      >
    >("bdRs.json", params, this.getKeyFromArgs(args));
  }

  /**
   * ## [KO] - 증권예탁증권
   * 증권신고서(증권예탁증권) 주요정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020056
   *
   * ## [EN] - Depositary securities
   * Provides major information of depositary securities registration statements.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE006&apiId=2020056
   */
  public async getDepositarySecurities(
    params: SecuritiesRegistrationParams,
    ...args: DartKeyArgs<K>
  ): Promise<
    SecuritiesRegistrationResponse<
      [
        SecuritiesRegistrationGroup<EquitySecuritiesGeneralAffairs>,
        SecuritiesRegistrationGroup<EquitySecuritiesType>,
        SecuritiesRegistrationGroup<UnderwriterInfo>,
        SecuritiesRegistrationGroup<FundUsage>,
        SecuritiesRegistrationGroup<SalesHolder>,
      ]
    >
  > {
    return await this.get<
      SecuritiesRegistrationResponse<
        [
          SecuritiesRegistrationGroup<EquitySecuritiesGeneralAffairs>,
          SecuritiesRegistrationGroup<EquitySecuritiesType>,
          SecuritiesRegistrationGroup<UnderwriterInfo>,
          SecuritiesRegistrationGroup<FundUsage>,
          SecuritiesRegistrationGroup<SalesHolder>,
        ]
      >
    >("stkdpRs.json", params, this.getKeyFromArgs(args));
  }

  /**
   * ## [KO] - 합병
   * 증권신고서(합병) 주요정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057
   *
   * ## [EN] - Merger
   * Provides major information of merger securities registration statements.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE006&apiId=2020057
   */
  public async getMerger(
    params: SecuritiesRegistrationParams,
    ...args: DartKeyArgs<K>
  ): Promise<
    SecuritiesRegistrationResponse<
      [
        SecuritiesRegistrationGroup<MergerGeneralAffairs>,
        SecuritiesRegistrationGroup<SecuritiesIssued>,
        SecuritiesRegistrationGroup<CompanyInfo>,
      ]
    >
  > {
    return await this.get<
      SecuritiesRegistrationResponse<
        [
          SecuritiesRegistrationGroup<MergerGeneralAffairs>,
          SecuritiesRegistrationGroup<SecuritiesIssued>,
          SecuritiesRegistrationGroup<CompanyInfo>,
        ]
      >
    >("mgRs.json", params, this.getKeyFromArgs(args));
  }

  /**
   * ## [KO] - 주식의포괄적교환·이전
   * 증권신고서(주식의포괄적교환·이전) 주요정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020058
   *
   * ## [EN] - Comprehensive stock exchange and transfer
   * Provides major information of comprehensive stock exchange and transfer
   * securities registration statements.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE006&apiId=2020058
   */
  public async getComprehensiveStockExchangeTransfer(
    params: SecuritiesRegistrationParams,
    ...args: DartKeyArgs<K>
  ): Promise<
    SecuritiesRegistrationResponse<
      [
        SecuritiesRegistrationGroup<MergerGeneralAffairs>,
        SecuritiesRegistrationGroup<SecuritiesIssued>,
        SecuritiesRegistrationGroup<CompanyInfo>,
      ]
    >
  > {
    return await this.get<
      SecuritiesRegistrationResponse<
        [
          SecuritiesRegistrationGroup<MergerGeneralAffairs>,
          SecuritiesRegistrationGroup<SecuritiesIssued>,
          SecuritiesRegistrationGroup<CompanyInfo>,
        ]
      >
    >("extrRs.json", params, this.getKeyFromArgs(args));
  }

  /**
   * ## [KO] - 분할
   * 증권신고서(분할) 주요정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020059
   *
   * ## [EN] - Spin-off
   * Provides major information of spin-off securities registration statements.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE006&apiId=2020059
   */
  public async getSpinOff(
    params: SecuritiesRegistrationParams,
    ...args: DartKeyArgs<K>
  ): Promise<
    SecuritiesRegistrationResponse<
      [
        SecuritiesRegistrationGroup<MergerGeneralAffairs>,
        SecuritiesRegistrationGroup<SecuritiesIssued>,
        SecuritiesRegistrationGroup<CompanyInfo>,
      ]
    >
  > {
    return await this.get<
      SecuritiesRegistrationResponse<
        [
          SecuritiesRegistrationGroup<MergerGeneralAffairs>,
          SecuritiesRegistrationGroup<SecuritiesIssued>,
          SecuritiesRegistrationGroup<CompanyInfo>,
        ]
      >
    >("dvRs.json", params, this.getKeyFromArgs(args));
  }
}
