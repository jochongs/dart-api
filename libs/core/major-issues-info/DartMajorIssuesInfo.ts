import { DartBase } from "../DartBase";
import { AssetTransferOtherPutBackOption } from "./types/model/AssetTransferOtherPutBackOption";
import { GetAssetTransferOtherPutBackOptionParams } from "./types/params/GetAssetTransferOtherPutBackOptionParams";
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
}
