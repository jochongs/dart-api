import { DartBase } from "../DartBase";
import { BasicPeriodicReportsParams } from "./types/BasicPeriodicReportsParams";
import { BasicPeriodicReportsResponse } from "./types/BasicPeriodicReportsResponse";
import { CapitalChangeStatus } from "./types/model/CapitalChangeStatus";
import { CommercialPaperBalance } from "./types/model/CommercialPaperBalance";
import { DebtIssuanceStatus } from "./types/model/DebtIssuanceStatus";
import { DividendInfo } from "./types/model/DividendInfo";
import { EmployeeStatus } from "./types/model/EmployeeStatus";
import { ExecutiveStatus } from "./types/model/ExecutiveStatus";
import { ExternalInvestmentStatus } from "./types/model/ExternalInvestmentStatus";
import { IndividualDirectorCompensation } from "./types/model/IndividualDirectorCompensation";
import { MajorShareholderChange } from "./types/model/MajorShareholderChange";
import { MajorShareholderStatus } from "./types/model/MajorShareholderStatus";
import { MinorShareholderStatus } from "./types/model/MinorShareholderStatus";
import { Top5ExecutiveCompensation } from "./types/model/Top5ExecutiveCompensation";
import { TotalDirectorCompensation } from "./types/model/TotalDirectorCompensation";
import { TotalStockStatus } from "./types/model/TotalStockStatus";
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

  /**
   * ## [KO] - 직원 현황
   * 정기보고서(사업, 분기, 반기보고서) 내에 직원 현황을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019011
   *
   * ## [EN] - Status of staff
   * Status of staff is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00012
   */
  public async getEmployeeStatus(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<EmployeeStatus>> {
    return await this.get<BasicPeriodicReportsResponse<EmployeeStatus>>(
      "empSttus.json",
      params
    );
  }

  /**
   * ## [KO] - 이사·감사의 개인별 보수현황(5억원 이상)
   * 정기보고서(사업, 분기, 반기보고서) 내에 이사·감사의 개인별 보수현황(5억원 이상)을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019012
   *
   * ## [EN] - Remuneration for individual directors and auditors
   * Remuneration for individual directors and auditors is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00013
   */
  public async getIndividualDirectorCompensation(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<IndividualDirectorCompensation>> {
    return await this.get<
      BasicPeriodicReportsResponse<IndividualDirectorCompensation>
    >("hmvAuditIndvdlBySttus.json", params);
  }

  /**
   * ## [KO] -	이사·감사 전체의 보수현황(보수지급금액 - 이사·감사 전체)
   * 정기보고서(사업, 분기, 반기보고서) 내에 이사·감사 전체의 보수현황(보수지급금액 - 이사·감사 전체)을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019013
   *
   * ## [EN] - Remuneration for all directors and auditors
   * Remuneration for all directors and auditors is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00014
   */
  public async getTotalDirectorCompensation(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<TotalDirectorCompensation>> {
    return await this.get<
      BasicPeriodicReportsResponse<TotalDirectorCompensation>
    >("hmvAuditAllSttus.json", params);
  }

  /**
   * ## [KO] - 개인별 보수지급 금액(5억이상 상위5인)
   * 정기보고서(사업, 분기, 반기보고서) 내에 개인별 보수지급 금액(5억이상 상위5인)을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019014
   *
   * ## [EN] - Individual remuneration amounts (top 5 over KRW 500 million)
   * Individual remuneration amounts (top five over KRW 500 million) is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00015
   */
  public async getTop5ExecutiveCompensation(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<Top5ExecutiveCompensation>> {
    return await this.get<
      BasicPeriodicReportsResponse<Top5ExecutiveCompensation>
    >(`indvdlByPay.json`, params);
  }

  /**
   * ## [KO] - 타법인 출자현황
   * 정기보고서(사업, 분기, 반기보고서) 내에 타법인 출자현황을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019015
   *
   * ## [EN] - Investment in other corporations
   * Investment in other corporations is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00016
   */
  public async getExternalInvestmentStatus(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<ExternalInvestmentStatus>> {
    return await this.get<
      BasicPeriodicReportsResponse<ExternalInvestmentStatus>
    >("otrCprInvstmntSttus.json", params);
  }

  /**
   * ## [KO] - 주식의 총수 현황
   * 정기보고서(사업, 분기, 반기보고서) 내에 주식의총수현황을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020002
   *
   * ## [EN] - Status of total stock number
   * Status of total number of shares is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00017
   */
  public async getTotalStockStatus(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<TotalStockStatus>> {
    return await this.get<BasicPeriodicReportsResponse<TotalStockStatus>>(
      "stockTotqySttus.json",
      params
    );
  }

  /**
   * ## [KO] - 채무증권 발행실적
   * 정기보고서(사업, 분기, 반기보고서) 내에 채무증권 발행실적을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020003
   *
   * ## [EN] - Debt securities issuance performance
   * Debt securities issuance performance is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00018
   */
  public async getDebtIssuanceStatus(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<DebtIssuanceStatus>> {
    return await this.get<BasicPeriodicReportsResponse<DebtIssuanceStatus>>(
      "detScritsIsuAcmslt.json",
      params
    );
  }

  /**
   * ## [KO] - 기업어음증권 미상환 잔액
   * 정기보고서(사업, 분기, 반기보고서) 내에 기업어음증권 미상환 잔액을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2020004
   *
   * ## [EN] - Outstanding balance on commercial paper securities
   * Outstanding balance on corporate commercial paper securities is provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00019
   */
  public async getCommercialPaperBalance(
    params: BasicPeriodicReportsParams
  ): Promise<BasicPeriodicReportsResponse<CommercialPaperBalance>> {
    return await this.get<BasicPeriodicReportsResponse<CommercialPaperBalance>>(
      "entrprsBilScritsNrdmpBlce.json",
      params
    );
  }
}
