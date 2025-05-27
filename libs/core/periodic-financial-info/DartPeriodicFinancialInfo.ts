import { DartBase } from "../DartBase";
import { SingleCompanyAccountInfo } from "./types/models/SingleCompanyAccountInfo";
import { GetSingleCompanyAccountInfoParams } from "./types/params/GetSingleCompanyAccountInfoParams";
import { BasicPeriodicFinancialInfoResponse } from "./types/responses/BasicPeriodicFinancialInfoResponse";

/**
 * ## [KO] - 정기보고서 재무정보
 *
 * @link https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS003
 *
 * ## [EN] - List of Financial Information from Periodic Reports
 *
 * @link https://engopendart.fss.or.kr/guide/main.do?apiGrpCd=DE003
 */
export class DartPeriodicFinancialInfo extends DartBase {
  /**
   * ## [KO] - 단일회사 주요계정
   * 상장법인(유가증권, 코스닥) 및 주요 비상장법인(사업보고서 제출대상 & IFRS 적용)이 제출한 정기보고서 내에
   * XBRL재무제표의 주요계정과목(재무상태표, 손익계산서)을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019016
   *
   * ## [EN] - Major accounts of a single company
   * We provide the major accounts (financial statements, income statements)
   * of the XBRL financial statements in the periodic reports submitted
   * by listed corporations (KOSPI, KOSDAQ) and major unlisted corporations
   * (required to submit annual reports and subject to IFRS).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00033
   */
  public async getSingleCompanyAccountInfo(
    params: GetSingleCompanyAccountInfoParams
  ): Promise<BasicPeriodicFinancialInfoResponse<SingleCompanyAccountInfo>> {
    return await this.get<
      BasicPeriodicFinancialInfoResponse<SingleCompanyAccountInfo>
    >("fnlttSinglAcnt.json", params);
  }
}
