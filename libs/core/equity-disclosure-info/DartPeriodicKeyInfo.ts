import { DartBase } from "../DartBase";
import { ExecutiveMajorShareholderReport } from "./types/model/ExecutiveMajorShareholderReport";
import { MajorShareholdingReport } from "./types/model/MajorShareholdingReport";
import { GetExecutiveMajorShareholderReportParams } from "./types/params/GetExecutiveMajorShareholderReportParams";
import { GetMajorShareholdingReportParams } from "./types/params/GetMajorShareholdingReportParams";
import { BasicEquityDisclosureInfoResponse } from "./types/response/BasicEquityDisclosureInfoResponse";

/**
 * ## [KO] - 지분공시 종합정보 목록
 *
 * @link https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS004
 *
 * ## [EN] - List of Consolidated Equity Disclosure Information
 *
 * @link https://engopendart.fss.or.kr/guide/main.do?apiGrpCd=DE004
 */
export class DartEquityDisclosureInfo extends DartBase {
  /**
   * ## [KO] - 대량보유 상황보고
   * 주식등의 대량보유상황보고서 내에 대량보유 상황보고 정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=2019021
   *
   * ## [EN] - 임원ㆍ주요주주 소유보고
   * 임원ㆍ주요주주특정증권등 소유상황보고서 내에 임원ㆍ주요주주 소유보고 정보를 제공합니다.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE004&apiId=AE00040
   */
  public async getMajorShareholdingReport(
    params: GetMajorShareholdingReportParams
  ): Promise<BasicEquityDisclosureInfoResponse<MajorShareholdingReport>> {
    return await this.get<
      Promise<BasicEquityDisclosureInfoResponse<MajorShareholdingReport>>
    >("majorstock.json", params);
  }

  /**
   * ## [KO] - 임원ㆍ주요주주 소유보고
   * 임원ㆍ주요주주특정증권등 소유상황보고서 내에 임원ㆍ주요주주 소유보고 정보를 제공합니다.
   *
   * @link
   *
   * ## [EN] - Report of executives and major shareholders’ ownership
   * Report of executives and major shareholders’ ownership information is provided in the report on status of specific securities, etc. owned by executives and major shareholders.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE004&apiId=AE00040
   */
  public async getExecutiveMajorShareholderReport(
    params: GetExecutiveMajorShareholderReportParams
  ): Promise<
    BasicEquityDisclosureInfoResponse<ExecutiveMajorShareholderReport>
  > {
    return await this.get<
      BasicEquityDisclosureInfoResponse<ExecutiveMajorShareholderReport>
    >("elestock.json", params);
  }
}
