import { DartBase } from "../DartBase";
import { AssetTransferOtherPutBackOption } from "./types/model/AssetTransferOtherPutBackOption";
import { BankruptcyOccurrence } from "./types/model/BankruptcyOccurrence";
import { BonusIssueDecision } from "./types/model/BonusIssueDecision";
import { CombinedCapitalIncreaseDecision } from "./types/model/CombinedCapitalIncreaseDecision";
import { DissolutionCauseOccurrence } from "./types/model/DissolutionCauseOccurrence";
import { PaidInCapitalIncreaseDecision } from "./types/model/PaidInCapitalIncreaseDecision";
import { RehabilitationProcedureApplication } from "./types/model/RehabilitationProcedureApplication";
import { SuspensionOfBusiness } from "./types/model/SuspensionOfBusiness";
import { GetAssetTransferOtherPutBackOptionParams } from "./types/params/GetAssetTransferOtherPutBackOptionParams";
import { GetBankruptcyOccurrenceParams } from "./types/params/GetBankruptcyOccurrenceParams";
import { GetBonusIssueDecisionParams } from "./types/params/GetBonusIssueDecisionParams";
import { GetCombinedCapitalIncreaseDecisionParams } from "./types/params/GetCombinedCapitalIncreaseDecisionParams";
import { GetDissolutionCauseOccurrenceParams } from "./types/params/GetDissolutionCauseOccurrenceParams";
import { GetPaidInCapitalIncreaseDecisionParams } from "./types/params/GetPaidInCapitalIncreaseDecisionParams";
import { GetRehabilitationProcedureApplicationParams } from "./types/params/GetRehabilitationProcedureApplicationParams";
import { GetSuspensionOfBusinessParams } from "./types/params/GetSuspensionOfBusinessParams";
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
}
