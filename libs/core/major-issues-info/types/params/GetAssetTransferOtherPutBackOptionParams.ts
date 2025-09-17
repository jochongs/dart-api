import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetAssetTransferOtherPutBackOptionParams
  extends Pick<DartRequestParams, "corp_code"> {
  /**
   * ## [KO] - 시작일(최초접수일)
   * 검색시작 접수일자(YYYYMMDD) ※ 2015년 이후 부터 정보제공
   *
   * ## [EN] - Start date (date first filed)
   * Filing date when search starts (YYYYMMDD)
   * ※ Information provided since 2015
   */
  bgn_de: string;

  /**
   * ## [KO] - 종료일(최초접수일)
   * 검색종료 접수일자(YYYYMMDD) ※ 2015년 이후 부터 정보제공
   *
   * ## [EN] - End date (date first filed)
   * Filing date when search ends (YYYYMMDD)
   * ※ Information provided since 2015
   */
  end_de: string;
}
