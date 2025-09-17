import { DartBase } from "../DartBase";
import { AssetTransferOtherPutBackOption } from "./types/model/AssetTransferOtherPutBackOption";
import { BankruptcyOccurrence } from "./types/model/BankruptcyOccurrence";
import { SuspensionOfBusiness } from "./types/model/SuspensionOfBusiness";
import { GetAssetTransferOtherPutBackOptionParams } from "./types/params/GetAssetTransferOtherPutBackOptionParams";
import { GetBankruptcyOccurrenceParams } from "./types/params/GetBankruptcyOccurrenceParams";
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
}
