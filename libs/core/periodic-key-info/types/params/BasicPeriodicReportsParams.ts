import { DartRequestParams } from "../../../../types/DartRequestParams";

/**
 * ## [KO]
 * `DartEquityDisclosureInfo` 메서드의 기본 파라미터 정보
 *
 * ## [EN]
 * Basic parameter information of `DartEquityDisclosureInfo` method
 */
export interface BasicPeriodicReportsParams
  extends Pick<DartRequestParams, "corp_code" | "bsns_year" | "reprt_code"> {}
