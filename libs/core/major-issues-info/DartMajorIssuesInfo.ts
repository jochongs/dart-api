import { DartBase } from "../DartBase";
import { AssetTransferOtherPutBackOption } from "./types/model/AssetTransferOtherPutBackOption";
import { BankruptcyOccurrence } from "./types/model/BankruptcyOccurrence";
import { BondWithWarrantIssueDecision } from "./types/model/BondWithWarrantIssueDecision";
import { BonusIssueDecision } from "./types/model/BonusIssueDecision";
import { BusinessAcquisitionDecision } from "./types/model/BusinessAcquisitionDecision";
import { BusinessTransferDecision } from "./types/model/BusinessTransferDecision";
import { CapitalReductionDecision } from "./types/model/CapitalReductionDecision";
import { CombinedCapitalIncreaseDecision } from "./types/model/CombinedCapitalIncreaseDecision";
import { CompanyDivisionDecision } from "./types/model/CompanyDivisionDecision";
import { CompanyDivisionMergerDecision } from "./types/model/CompanyDivisionMergerDecision";
import { CompanyMergerDecision } from "./types/model/CompanyMergerDecision";
import { ConvertibleBondIssueDecision } from "./types/model/ConvertibleBondIssueDecision";
import { CreditorBankManagementProcedureCommencement } from "./types/model/CreditorBankManagementProcedureCommencement";
import { CreditorBankManagementProcedureTermination } from "./types/model/CreditorBankManagementProcedureTermination";
import { DissolutionCauseOccurrence } from "./types/model/DissolutionCauseOccurrence";
import { ExchangeableBondIssueDecision } from "./types/model/ExchangeableBondIssueDecision";
import { LawsuitFiling } from "./types/model/LawsuitFiling";
import { OtherCompanyStockAndInvestmentSecuritiesAcquisitionDecision } from "./types/model/OtherCompanyStockAndInvestmentSecuritiesAcquisitionDecision";
import { OtherCompanyStockAndInvestmentSecuritiesTransferDecision } from "./types/model/OtherCompanyStockAndInvestmentSecuritiesTransferDecision";
import { OverseasSecuritiesDelisting } from "./types/model/OverseasSecuritiesDelisting";
import { OverseasSecuritiesDelistingDecision } from "./types/model/OverseasSecuritiesDelistingDecision";
import { OverseasSecuritiesListing } from "./types/model/OverseasSecuritiesListing";
import { OverseasSecuritiesListingDecision } from "./types/model/OverseasSecuritiesListingDecision";
import { PaidInCapitalIncreaseDecision } from "./types/model/PaidInCapitalIncreaseDecision";
import { RehabilitationProcedureApplication } from "./types/model/RehabilitationProcedureApplication";
import { StockExchangeTransferDecision } from "./types/model/StockExchangeTransferDecision";
import { StockRelatedBondAcquisitionDecision } from "./types/model/StockRelatedBondAcquisitionDecision";
import { StockRelatedBondTransferDecision } from "./types/model/StockRelatedBondTransferDecision";
import { SuspensionOfBusiness } from "./types/model/SuspensionOfBusiness";
import { TangibleAssetAcquisitionDecision } from "./types/model/TangibleAssetAcquisitionDecision";
import { TangibleAssetTransferDecision } from "./types/model/TangibleAssetTransferDecision";
import { TreasuryStockAcquisitionDecision } from "./types/model/TreasuryStockAcquisitionDecision";
import { TreasuryStockAcquisitionTrustContractCancellationDecision } from "./types/model/TreasuryStockAcquisitionTrustContractCancellationDecision";
import { TreasuryStockAcquisitionTrustContractConclusionDecision } from "./types/model/TreasuryStockAcquisitionTrustContractConclusionDecision";
import { TreasuryStockDisposalDecision } from "./types/model/TreasuryStockDisposalDecision";
import { WriteDownContingentConvertibleBondIssueDecision } from "./types/model/WriteDownContingentConvertibleBondIssueDecision";
import { GetAssetTransferOtherPutBackOptionParams } from "./types/params/GetAssetTransferOtherPutBackOptionParams";
import { GetBankruptcyOccurrenceParams } from "./types/params/GetBankruptcyOccurrenceParams";
import { GetBondWithWarrantIssueDecisionParams } from "./types/params/GetBondWithWarrantIssueDecisionParams";
import { GetBonusIssueDecisionParams } from "./types/params/GetBonusIssueDecisionParams";
import { GetBusinessAcquisitionDecisionParams } from "./types/params/GetBusinessAcquisitionDecisionParams";
import { GetBusinessTransferDecisionParams } from "./types/params/GetBusinessTransferDecisionParams";
import { GetCapitalReductionDecisionParams } from "./types/params/GetCapitalReductionDecisionParams";
import { GetCombinedCapitalIncreaseDecisionParams } from "./types/params/GetCombinedCapitalIncreaseDecisionParams";
import { GetCompanyDivisionDecisionParams } from "./types/params/GetCompanyDivisionDecisionParams";
import { GetCompanyDivisionMergerDecisionParams } from "./types/params/GetCompanyDivisionMergerDecisionParams";
import { GetCompanyMergerDecisionParams } from "./types/params/GetCompanyMergerDecisionParams";
import { GetConvertibleBondIssueDecisionParams } from "./types/params/GetConvertibleBondIssueDecisionParams";
import { GetCreditorBankManagementProcedureCommencementParams } from "./types/params/GetCreditorBankManagementProcedureCommencementParams";
import { GetCreditorBankManagementProcedureTerminationParams } from "./types/params/GetCreditorBankManagementProcedureTerminationParams";
import { GetDissolutionCauseOccurrenceParams } from "./types/params/GetDissolutionCauseOccurrenceParams";
import { GetExchangeableBondIssueDecisionParams } from "./types/params/GetExchangeableBondIssueDecisionParams";
import { GetLawsuitFilingParams } from "./types/params/GetLawsuitFilingParams";
import { GetOtherCompanyStockAndInvestmentSecuritiesAcquisitionDecisionParams } from "./types/params/GetOtherCompanyStockAndInvestmentSecuritiesAcquisitionDecisionParams";
import { GetOtherCompanyStockAndInvestmentSecuritiesTransferDecisionParams } from "./types/params/GetOtherCompanyStockAndInvestmentSecuritiesTransferDecisionParams";
import { GetOverseasSecuritiesDelistingDecisionParams } from "./types/params/GetOverseasSecuritiesDelistingDecisionParams";
import { GetOverseasSecuritiesDelistingParams } from "./types/params/GetOverseasSecuritiesDelistingParams";
import { GetOverseasSecuritiesListingDecisionParams } from "./types/params/GetOverseasSecuritiesListingDecisionParams";
import { GetOverseasSecuritiesListingParams } from "./types/params/GetOverseasSecuritiesListingParams";
import { GetPaidInCapitalIncreaseDecisionParams } from "./types/params/GetPaidInCapitalIncreaseDecisionParams";
import { GetRehabilitationProcedureApplicationParams } from "./types/params/GetRehabilitationProcedureApplicationParams";
import { GetStockExchangeTransferDecisionParams } from "./types/params/GetStockExchangeTransferDecisionParams";
import { GetStockRelatedBondAcquisitionDecisionParams } from "./types/params/GetStockRelatedBondAcquisitionDecisionParams";
import { GetStockRelatedBondTransferDecisionParams } from "./types/params/GetStockRelatedBondTransferDecisionParams";
import { GetSuspensionOfBusinessParams } from "./types/params/GetSuspensionOfBusinessParams";
import { GetTangibleAssetAcquisitionDecisionParams } from "./types/params/GetTangibleAssetAcquisitionDecisionParams";
import { GetTangibleAssetTransferDecisionParams } from "./types/params/GetTangibleAssetTransferDecisionParams";
import { GetTreasuryStockAcquisitionDecisionParams } from "./types/params/GetTreasuryStockAcquisitionDecisionParams";
import { GetTreasuryStockAcquisitionTrustContractCancellationDecisionParams } from "./types/params/GetTreasuryStockAcquisitionTrustContractCancellationDecisionParams";
import { GetTreasuryStockAcquisitionTrustContractConclusionDecisionParams } from "./types/params/GetTreasuryStockAcquisitionTrustContractConclusionDecisionParams";
import { GetTreasuryStockDisposalDecisionParams } from "./types/params/GetTreasuryStockDisposalDecisionParams";
import { GetWriteDownContingentConvertibleBondIssueDecisionParams } from "./types/params/GetWriteDownContingentConvertibleBondIssueDecisionParams";
import { BasicMajorIssuesInfoResponse } from "./types/responses/BasicMajorIssuesInfoResponse";

/**
 * ## [KO] - 주요사항보고서 주요정보 목록
 *
 * @link https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS005
 *
 * ## [EN] - List of Key Information from Reports on Major Issues
 *
 * @link https://engopendart.fss.or.kr/guide/main.do?apiGrpCd=DE005
 */
export class DartMajorIssuesInfo extends DartBase {
  /**
   * ## [KO] - 자산양수도(기타), 풋백옵션
   * 주요사항보고서(자산양수도(기타), 풋백옵션) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020018
   *
   * ## [EN] - Transfer and Acquisition of Assets (Other), Put Back Option
   * Main points are provided in the Report on Major Issues
   * (Transfer and Acquisition of Assets (Other), Put Back option).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00042
   */
  public async getAssetTransferOtherPutBackOption(
    params: GetAssetTransferOtherPutBackOptionParams
  ): Promise<BasicMajorIssuesInfoResponse<AssetTransferOtherPutBackOption>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<AssetTransferOtherPutBackOption>
    >("astInhtrfEtcPtbkOpt.json", params);
  }

  /**
   * ## [KO] - 부도발생
   * 주요사항보고서(부도발생) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020019
   *
   * ## [EN] - Bankruptcy Occurrence
   * Main points are provided in the Report on Major Issues (Bankruptcy Occurrence).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00043
   */
  public async getBankruptcyOccurrence(
    params: GetBankruptcyOccurrenceParams
  ): Promise<BasicMajorIssuesInfoResponse<BankruptcyOccurrence>> {
    return await this.get<BasicMajorIssuesInfoResponse<BankruptcyOccurrence>>(
      "dfOcr.json",
      params
    );
  }

  /**
   * ## [KO] - 영업정지
   * 주요사항보고서(영업정지) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020020
   *
   * ## [EN] - Suspension of Business
   * Main points are provided in the Report on Major Issues (Suspension of Business).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00044
   */
  public async getSuspensionOfBusiness(
    params: GetSuspensionOfBusinessParams
  ): Promise<BasicMajorIssuesInfoResponse<SuspensionOfBusiness>> {
    return await this.get<BasicMajorIssuesInfoResponse<SuspensionOfBusiness>>(
      "bsnSp.json",
      params
    );
  }

  /**
   * ## [KO] - 회생절차 개시신청
   * 주요사항보고서(회생절차 개시신청) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020021
   *
   * ## [EN] - Application for Commencement of Rehabilitation Procedures
   * Main points are provided in the Report on Major Issues
   * (Application for Commencement of Rehabilitation Procedures).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00045
   */
  public async getRehabilitationProcedureApplication(
    params: GetRehabilitationProcedureApplicationParams
  ): Promise<BasicMajorIssuesInfoResponse<RehabilitationProcedureApplication>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<RehabilitationProcedureApplication>
    >("ctrcvsBgrq.json", params);
  }

  /**
   * ## [KO] - 해산사유 발생
   * 주요사항보고서(해산사유 발생) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020022
   *
   * ## [EN] - Occurrence of Dissolution Cause
   * Main points are provided in the Report on Major Issues (Occurrence of Dissolution Cause).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00046
   */
  public async getDissolutionCauseOccurrence(
    params: GetDissolutionCauseOccurrenceParams
  ): Promise<BasicMajorIssuesInfoResponse<DissolutionCauseOccurrence>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<DissolutionCauseOccurrence>
    >("dsRsOcr.json", params);
  }

  /**
   * ## [KO] - 유상증자 결정
   * 주요사항보고서(유상증자 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020023
   *
   * ## [EN] - Decision of Paid-in Capital Increase
   * Main points are provided in the Report on Major Issues (Decision of Paid-in Capital Increase).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00047
   */
  public async getPaidInCapitalIncreaseDecision(
    params: GetPaidInCapitalIncreaseDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<PaidInCapitalIncreaseDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<PaidInCapitalIncreaseDecision>
    >("piicDecsn.json", params);
  }

  /**
   * ## [KO] - 무상증자 결정
   * 주요사항보고서(무상증자 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020024
   *
   * ## [EN] - Decision of Capital Increase without Consideration
   * Main points are provided in the Report on Major Issues (Decision of Capital Increase without Consideration).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00048
   */
  public async getBonusIssueDecision(
    params: GetBonusIssueDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<BonusIssueDecision>> {
    return await this.get<BasicMajorIssuesInfoResponse<BonusIssueDecision>>(
      "fricDecsn.json",
      params
    );
  }

  /**
   * ## [KO] - 유무상증자 결정
   * 주요사항보고서(유무상증자 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020025
   *
   * ## [EN] - Decision on Paid-in Capital Increase/Capital Increase without Consideration
   * Main points are provided in the Report on Major Issues
   * (Decision on Paid-in Capital Increase/Capital Increase without Consideration).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00049
   */
  public async getCombinedCapitalIncreaseDecision(
    params: GetCombinedCapitalIncreaseDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<CombinedCapitalIncreaseDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<CombinedCapitalIncreaseDecision>
    >("pifricDecsn.json", params);
  }

  /**
   * ## [KO] - 감자 결정
   * 주요사항보고서(감자 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020026
   *
   * ## [EN] - Decision on Capital Reduction
   * Main points are provided in the Report on Major Issues (Decision on Capital Reduction).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00050
   */
  public async getCapitalReductionDecision(
    params: GetCapitalReductionDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<CapitalReductionDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<CapitalReductionDecision>
    >("crDecsn.json", params);
  }

  /**
   * ## [KO] - 채권은행 등의 관리절차 개시
   * 주요사항보고서(채권은행 등의 관리절차 개시) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020027
   *
   * ## [EN] - Commencement of Administrative Proceedings by Creditor Banks, etc.
   * Main points are provided in the Report on Major Issues (Commencement of Administrative Proceedings by Creditor Banks, etc.).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00051
   */
  public async getCreditorBankManagementProcedureCommencement(
    params: GetCreditorBankManagementProcedureCommencementParams
  ): Promise<BasicMajorIssuesInfoResponse<CreditorBankManagementProcedureCommencement>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<CreditorBankManagementProcedureCommencement>
    >("bnkMngtPcbg.json", params);
  }

  /**
   * ## [KO] - 소송 등의 제기
   * 주요사항보고서(소송 등의 제기) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020028
   *
   * ## [EN] - Lawsuit Filing, etc.
   * Main points are provided in the Report on Major Issues (Lawsuit Filing, etc.).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00052
   */
  public async getLawsuitFiling(
    params: GetLawsuitFilingParams
  ): Promise<BasicMajorIssuesInfoResponse<LawsuitFiling>> {
    return await this.get<BasicMajorIssuesInfoResponse<LawsuitFiling>>(
      "lwstLg.json",
      params
    );
  }

  /**
   * ## [KO] - 해외 증권시장 주권등 상장 결정
   * 주요사항보고서(해외 증권시장 주권등 상장 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020029
   *
   * ## [EN] - Decision on Overseas Securities Market Stock Listing
   * Main points are provided in the Report on Major Issues (Decision on Overseas Securities Market Stock Listing).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00053
   */
  public async getOverseasSecuritiesListingDecision(
    params: GetOverseasSecuritiesListingDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<OverseasSecuritiesListingDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<OverseasSecuritiesListingDecision>
    >("ovLstDecsn.json", params);
  }

  /**
   * ## [KO] - 해외 증권시장 주권등 상장폐지 결정
   * 주요사항보고서(해외 증권시장 주권등 상장폐지 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020030
   *
   * ## [EN] - Decision on Overseas Securities Market Stock Delisting
   * Main points are provided in the Report on Major Issues (Decision on Overseas Securities Market Stock Delisting).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00054
   */
  public async getOverseasSecuritiesDelistingDecision(
    params: GetOverseasSecuritiesDelistingDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<OverseasSecuritiesDelistingDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<OverseasSecuritiesDelistingDecision>
    >("ovDlstDecsn.json", params);
  }

  /**
   * ## [KO] - 해외 증권시장 주권등 상장
   * 주요사항보고서(해외 증권시장 주권등 상장) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020031
   *
   * ## [EN] - Overseas Securities Market Stock Listing
   * Main points are provided in the Report on Major Issues (Overseas Securities Market Stock Listing).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00055
   */
  public async getOverseasSecuritiesListing(
    params: GetOverseasSecuritiesListingParams
  ): Promise<BasicMajorIssuesInfoResponse<OverseasSecuritiesListing>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<OverseasSecuritiesListing>
    >("ovLst.json", params);
  }

  /**
   * ## [KO] - 해외 증권시장 주권등 상장폐지
   * 주요사항보고서(해외 증권시장 주권등 상장폐지) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020032
   *
   * ## [EN] - Overseas Securities Market Stock Delisting
   * Main points are provided in the Report on Major Issues (Overseas Securities Market Stock Delisting).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00056
   */
  public async getOverseasSecuritiesDelisting(
    params: GetOverseasSecuritiesDelistingParams
  ): Promise<BasicMajorIssuesInfoResponse<OverseasSecuritiesDelisting>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<OverseasSecuritiesDelisting>
    >("ovDlst.json", params);
  }

  /**
   * ## [KO] - 전환사채권 발행결정
   * 주요사항보고서(전환사채권 발행결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020033
   *
   * ## [EN] - Decision on Convertible Bond Issuance
   * Main points are provided in the Report on Major Issues (Decision on Convertible Bond Issuance).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00057
   */
  public async getConvertibleBondIssueDecision(
    params: GetConvertibleBondIssueDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<ConvertibleBondIssueDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<ConvertibleBondIssueDecision>
    >("cvbdIsDecsn.json", params);
  }

  /**
   * ## [KO] - 신주인수권부사채권 발행결정
   * 주요사항보고서(신주인수권부사채권 발행결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020034
   *
   * ## [EN] - Decision on Bond with Warrant Issuance
   * Main points are provided in the Report on Major Issues (Decision on Bond with Warrant Issuance).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00058
   */
  public async getBondWithWarrantIssueDecision(
    params: GetBondWithWarrantIssueDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<BondWithWarrantIssueDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<BondWithWarrantIssueDecision>
    >("bdwtIsDecsn.json", params);
  }

  /**
   * ## [KO] - 교환사채권 발행결정
   * 주요사항보고서(교환사채권 발행결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020035
   *
   * ## [EN] - Decision on Exchangeable Bond Issuance
   * Main points are provided in the Report on Major Issues (Decision on Exchangeable Bond Issuance).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00059
   */
  public async getExchangeableBondIssueDecision(
    params: GetExchangeableBondIssueDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<ExchangeableBondIssueDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<ExchangeableBondIssueDecision>
    >("exbdIsDecsn.json", params);
  }

  /**
   * ## [KO] - 채권은행 등의 관리절차 중단
   * 주요사항보고서(채권은행 등의 관리절차 중단) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020036
   *
   * ## [EN] - Termination of Administrative Proceedings by Creditor Banks, etc.
   * Main points are provided in the Report on Major Issues (Termination of Administrative Proceedings by Creditor Banks, etc.).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00060
   */
  public async getCreditorBankManagementProcedureTermination(
    params: GetCreditorBankManagementProcedureTerminationParams
  ): Promise<BasicMajorIssuesInfoResponse<CreditorBankManagementProcedureTermination>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<CreditorBankManagementProcedureTermination>
    >("bnkMngtPcsp.json", params);
  }

  /**
   * ## [KO] - 상각형 조건부자본증권 발행결정
   * 주요사항보고서(상각형 조건부자본증권 발행결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020037
   *
   * ## [EN] - Decision on Write-Down Contingent Convertible Bond Issuance
   * Main points are provided in the Report on Major Issues (Decision on Write-Down Contingent Convertible Bond Issuance).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00061
   */
  public async getWriteDownContingentConvertibleBondIssueDecision(
    params: GetWriteDownContingentConvertibleBondIssueDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<WriteDownContingentConvertibleBondIssueDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<WriteDownContingentConvertibleBondIssueDecision>
    >("wdCocobdIsDecsn.json", params);
  }

  /**
   * ## [KO] - 자기주식 취득 결정
   * 주요사항보고서(자기주식 취득 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020038
   *
   * ## [EN] - Decision on Treasury Stock Acquisition
   * Main points are provided in the Report on Major Issues (Decision on Treasury Stock Acquisition).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00062
   */
  public async getTreasuryStockAcquisitionDecision(
    params: GetTreasuryStockAcquisitionDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<TreasuryStockAcquisitionDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<TreasuryStockAcquisitionDecision>
    >("tsstkAqDecsn.json", params);
  }

  /**
   * ## [KO] - 자기주식 처분 결정
   * 주요사항보고서(자기주식 처분 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020039
   *
   * ## [EN] - Decision on Treasury Stock Disposal
   * Main points are provided in the Report on Major Issues (Decision on Treasury Stock Disposal).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00063
   */
  public async getTreasuryStockDisposalDecision(
    params: GetTreasuryStockDisposalDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<TreasuryStockDisposalDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<TreasuryStockDisposalDecision>
    >("tsstkDpDecsn.json", params);
  }

  /**
   * ## [KO] - 자기주식취득 신탁계약 체결 결정
   * 주요사항보고서(자기주식취득 신탁계약 체결 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020040
   *
   * ## [EN] - Decision on Conclusion of Treasury Stock Acquisition Trust Contract
   * Main points are provided in the Report on Major Issues (Decision on Conclusion of Treasury Stock Acquisition Trust Contract).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00064
   */
  public async getTreasuryStockAcquisitionTrustContractConclusionDecision(
    params: GetTreasuryStockAcquisitionTrustContractConclusionDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<TreasuryStockAcquisitionTrustContractConclusionDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<TreasuryStockAcquisitionTrustContractConclusionDecision>
    >("tsstkAqTrctrCnsDecsn.json", params);
  }

  /**
   * ## [KO] - 자기주식취득 신탁계약 해지 결정
   * 주요사항보고서(자기주식취득 신탁계약 해지 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020041
   *
   * ## [EN] - Decision on Cancellation of Treasury Stock Acquisition Trust Contract
   * Main points are provided in the Report on Major Issues (Decision on Cancellation of Treasury Stock Acquisition Trust Contract).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00065
   */
  public async getTreasuryStockAcquisitionTrustContractCancellationDecision(
    params: GetTreasuryStockAcquisitionTrustContractCancellationDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<TreasuryStockAcquisitionTrustContractCancellationDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<TreasuryStockAcquisitionTrustContractCancellationDecision>
    >("tsstkAqTrctrCcDecsn.json", params);
  }

  /**
   * ## [KO] - 영업양수 결정
   * 주요사항보고서(영업양수 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020042
   *
   * ## [EN] - Decision on Business Acquisition
   * Main points are provided in the Report on Major Issues (Decision on Business Acquisition).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00066
   */
  public async getBusinessAcquisitionDecision(
    params: GetBusinessAcquisitionDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<BusinessAcquisitionDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<BusinessAcquisitionDecision>
    >("bsnInhDecsn.json", params);
  }

  /**
   * ## [KO] - 영업양도 결정
   * 주요사항보고서(영업양도 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020043
   *
   * ## [EN] - Decision on Business Transfer
   * Main points are provided in the Report on Major Issues (Decision on Business Transfer).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00067
   */
  public async getBusinessTransferDecision(
    params: GetBusinessTransferDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<BusinessTransferDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<BusinessTransferDecision>
    >("bsnTrfDecsn.json", params);
  }

  /**
   * ## [KO] - 유형자산 양수 결정
   * 주요사항보고서(유형자산 양수 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020044
   *
   * ## [EN] - Decision on Tangible Asset Acquisition
   * Main points are provided in the Report on Major Issues (Decision on Tangible Asset Acquisition).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00068
   */
  public async getTangibleAssetAcquisitionDecision(
    params: GetTangibleAssetAcquisitionDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<TangibleAssetAcquisitionDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<TangibleAssetAcquisitionDecision>
    >("tgastInhDecsn.json", params);
  }

  /**
   * ## [KO] - 유형자산 양도 결정
   * 주요사항보고서(유형자산 양도 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020045
   *
   * ## [EN] - Decision on Tangible Asset Transfer
   * Main points are provided in the Report on Major Issues (Decision on Tangible Asset Transfer).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00069
   */
  public async getTangibleAssetTransferDecision(
    params: GetTangibleAssetTransferDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<TangibleAssetTransferDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<TangibleAssetTransferDecision>
    >("tgastTrfDecsn.json", params);
  }

  /**
   * ## [KO] - 타법인 주식 및 출자증권 양수결정
   * 주요사항보고서(타법인 주식 및 출자증권 양수결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020046
   *
   * ## [EN] - Decision on Acquisition of Other Company Stock and Investment Securities
   * Main points are provided in the Report on Major Issues (Decision on Acquisition of Other Company Stock and Investment Securities).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00070
   */
  public async getOtherCompanyStockAndInvestmentSecuritiesAcquisitionDecision(
    params: GetOtherCompanyStockAndInvestmentSecuritiesAcquisitionDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<OtherCompanyStockAndInvestmentSecuritiesAcquisitionDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<OtherCompanyStockAndInvestmentSecuritiesAcquisitionDecision>
    >("otcprStkInvscrInhDecsn.json", params);
  }

  /**
   * ## [KO] - 타법인 주식 및 출자증권 양도결정
   * 주요사항보고서(타법인 주식 및 출자증권 양도결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020047
   *
   * ## [EN] - Decision on Transfer of Other Company Stock and Investment Securities
   * Main points are provided in the Report on Major Issues (Decision on Transfer of Other Company Stock and Investment Securities).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00071
   */
  public async getOtherCompanyStockAndInvestmentSecuritiesTransferDecision(
    params: GetOtherCompanyStockAndInvestmentSecuritiesTransferDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<OtherCompanyStockAndInvestmentSecuritiesTransferDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<OtherCompanyStockAndInvestmentSecuritiesTransferDecision>
    >("otcprStkInvscrTrfDecsn.json", params);
  }

  /**
   * ## [KO] - 주권 관련 사채권 양수 결정
   * 주요사항보고서(주권 관련 사채권 양수 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020048
   *
   * ## [EN] - Decision on Acquisition of Stock-Related Bond
   * Main points are provided in the Report on Major Issues (Decision on Acquisition of Stock-Related Bond).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00072
   */
  public async getStockRelatedBondAcquisitionDecision(
    params: GetStockRelatedBondAcquisitionDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<StockRelatedBondAcquisitionDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<StockRelatedBondAcquisitionDecision>
    >("stkrtbdInhDecsn.json", params);
  }

  /**
   * ## [KO] - 주권 관련 사채권 양도 결정
   * 주요사항보고서(주권 관련 사채권 양도 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020049
   *
   * ## [EN] - Decision on Transfer of Stock-Related Bond
   * Main points are provided in the Report on Major Issues (Decision on Transfer of Stock-Related Bond).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00073
   */
  public async getStockRelatedBondTransferDecision(
    params: GetStockRelatedBondTransferDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<StockRelatedBondTransferDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<StockRelatedBondTransferDecision>
    >("stkrtbdTrfDecsn.json", params);
  }

  /**
   * ## [KO] - 회사합병 결정
   * 주요사항보고서(회사합병 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020050
   *
   * ## [EN] - Decision on Company Merger
   * Main points are provided in the Report on Major Issues (Decision on Company Merger).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00074
   */
  public async getCompanyMergerDecision(
    params: GetCompanyMergerDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<CompanyMergerDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<CompanyMergerDecision>
    >("cmpMgDecsn.json", params);
  }

  /**
   * ## [KO] - 회사분할 결정
   * 주요사항보고서(회사분할 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020051
   *
   * ## [EN] - Decision on Company Division
   * Main points are provided in the Report on Major Issues (Decision on Company Division).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00075
   */
  public async getCompanyDivisionDecision(
    params: GetCompanyDivisionDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<CompanyDivisionDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<CompanyDivisionDecision>
    >("cmpDvDecsn.json", params);
  }

  /**
   * ## [KO] - 회사분할합병 결정
   * 주요사항보고서(회사분할합병 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020052
   *
   * ## [EN] - Decision on Company Division Merger
   * Main points are provided in the Report on Major Issues (Decision on Company Division Merger).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00076
   */
  public async getCompanyDivisionMergerDecision(
    params: GetCompanyDivisionMergerDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<CompanyDivisionMergerDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<CompanyDivisionMergerDecision>
    >("cmpDvmgDecsn.json", params);
  }

  /**
   * ## [KO] - 주식교환·이전 결정
   * 주요사항보고서(주식교환·이전 결정) 내에 주요 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS005&apiId=2020053
   *
   * ## [EN] - Decision on Stock Exchange/Transfer
   * Main points are provided in the Report on Major Issues (Decision on Stock Exchange/Transfer).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE005&apiId=AE00077
   */
  public async getStockExchangeTransferDecision(
    params: GetStockExchangeTransferDecisionParams
  ): Promise<BasicMajorIssuesInfoResponse<StockExchangeTransferDecision>> {
    return await this.get<
      BasicMajorIssuesInfoResponse<StockExchangeTransferDecision>
    >("stkExtrDecsn.json", params);
  }
}
