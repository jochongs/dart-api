import { DartBase } from "../DartBase";
import { BasicPeriodicReportsParams } from "./types/BasicPeriodicReportsParams";
import { BasicPeriodicReportsResponse } from "./types/BasicPeriodicReportsResponse";
import { CapitalChangeStatus } from "./types/model/CapitalChangeStatus";
import { DividendInfo } from "./types/model/DividendInfo";
import { ExecutiveStatus } from "./types/model/ExecutiveStatus";
import { MajorShareholderChange } from "./types/model/MajorShareholderChange";
import { MajorShareholderStatus } from "./types/model/MajorShareholderStatus";
import { MinorShareholderStatus } from "./types/model/MinorShareholderStatus";
import { TreasuryStockStatus } from "./types/model/TreasuryStockStatus";

/**
 * ## [KO]
 * 정기보고서 주요 정보를 제공합니다.
 *
 * @link https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS002
 *
 * ## [EN]
 * Provides major information of periodic reports.
 *
 * @link https://engopendart.fss.or.kr/guide/main.do?apiGrpCd=DE002
 */
export class DartEquityDisclosureInfo extends DartBase {
  /**
   * ## KO - 증자(감자) 현황
   * 정기보고서(사업, 분기, 반기보고서) 내에 증자(감자) 현황을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019004
   *
   * ## EN - Status of capital increase (reduction)
   * Status of capital increase (reduction) is provided
   * in the periodic reports (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00005
   */
  public async getCapitalChangeStatus(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<CapitalChangeStatus>> {
    return await this.get<BasicPeriodicReportsResponse<CapitalChangeStatus>>(
      "irdsSttus.json",
      params
    );
  }

  /**
   * ## [KO] - 배당에 관한 사항
   * 정기보고서(사업, 분기, 반기보고서) 내에 배당에 관한 사항을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019005
   *
   * ## [EN] - Matters related to dividends
   * Matters related to dividends are provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00006
   */
  public async getDividendInfo(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<DividendInfo>> {
    return await this.get<BasicPeriodicReportsResponse<DividendInfo>>(
      "alotMatter.json",
      params
    );
  }

  /**
   * ## [KO] - 자기주식 취득 및 처분 현황
   * 정기보고서(사업, 분기, 반기보고서) 내에 자기주식 취득 및 처분 현황을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019006
   *
   * ## [EN] - Information on treasury stock acquisition and disposal
   * Information on treasury stock acquisition
   * and disposal is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00007
   */
  public async getTreasuryStockStatus(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<TreasuryStockStatus>> {
    return await this.get<BasicPeriodicReportsResponse<TreasuryStockStatus>>(
      "tesstkAcqsDspsSttus.json",
      params
    );
  }

  /**
   * ## [KO] - 최대주주 현황
   * 정기보고서(사업, 분기, 반기보고서) 내에 최대주주 현황을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019007
   *
   * ## [EN] - Information on largest shareholder
   * Information on largest shareholder is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00008
   */
  public async getMajorShareholderStatus(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<MajorShareholderStatus>> {
    return await this.get<BasicPeriodicReportsResponse<MajorShareholderStatus>>(
      "hyslrSttus.json",
      params
    );
  }

  /**
   * ## [KO] - 최대주주 변동현황
   * 정기보고서(사업, 분기, 반기보고서) 내에 최대주주 변동현황을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019008
   *
   * ## [EN] - Changes of the largest shareholder
   * Changes of the largest shareholder is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00009
   */
  public async getMajorShareholderChange(params: BasicPeriodicReportsParams) {
    return await this.get<BasicPeriodicReportsResponse<MajorShareholderChange>>(
      "hyslrChgSttus.json",
      params
    );
  }

  /**
   * ## [KO] - 소액주주 현황
   * 정기보고서(사업, 분기, 반기보고서) 내에 소액주주 현황을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019009
   *
   * ## EN - Information on minority shareholders
   * Information on minority shareholders is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00010
   */
  public async getMinorShareholderStatus(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<MinorShareholderStatus>> {
    return await this.get<
      Promise<BasicPeriodicReportsResponse<MinorShareholderStatus>>
    >("mrhlSttus.json", params);
  }

  /**
   * ## [KO] - 임원 현황
   * 정기보고서(사업, 분기, 반기보고서) 내에 임원 현황을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019010
   *
   * ## [EN] - Status of executives
   * Status of executives is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00011
   */
  public async getExecutiveStatus(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<ExecutiveStatus>> {
    return await this.get<BasicPeriodicReportsResponse<ExecutiveStatus>>(
      "exctvSttus.json",
      params
    );
  }
}
