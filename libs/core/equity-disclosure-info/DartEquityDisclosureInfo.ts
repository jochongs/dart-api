import { DartMethodOptions } from "../../types/DartMethodOptions";
import { DartBase } from "../DartBase";
import { GetCapitalChangeStatusParams } from "./types/params/GetCapitalChangeStatusParams";
import { GetDividendInfoParams } from "./types/params/GetDividendInfoParams";
import { GetCapitalChangeStatusResponse } from "./types/response/GetCapitalChangeStatusResponse";
import { GetDividendInfoResponse } from "./types/response/GetDividendInfoResponse";

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
   * ## EN - Status of capital increase (reduction)
   * Status of capital increase (reduction) is provided
   * in the periodic reports (annual, quarterly, semi-annual reports).
   */
  public async getCapitalChangeStatus(
    params: GetCapitalChangeStatusParams
  ): Promise<GetCapitalChangeStatusResponse> {
    return await this.get<GetCapitalChangeStatusResponse>("irdsSttus.json", {
      corp_code: params.corp_code,
      bsns_year: params.bsns_year,
      reprt_code: params.reprt_code,
    });
  }

  /**
   * ## [KO] - 배당에 관한 사항
   * 정기보고서(사업, 분기, 반기보고서) 내에 배당에 관한 사항을 제공합니다.
   *
   * ## [EN] - Matters related to dividends
   * Matters related to dividends are provided in the periodic reports
   * (annual, quarterly, semi-annual reports).
   */
  public async getDividendInfo(
    params: GetDividendInfoParams
  ): Promise<GetDividendInfoResponse> {
    return await this.get<GetDividendInfoResponse>("alotMatter.json", {
      corp_code: params.corp_code,
      bsns_year: params.bsns_year,
      reprt_code: params.reprt_code,
    });
  }
}
