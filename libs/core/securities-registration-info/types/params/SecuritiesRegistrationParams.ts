import { DartRequestParams } from "../../../../types/DartRequestParams";

/**
 * ## [KO]
 * `DartSecuritiesRegistrationInfo` 메서드의 기본 파라미터 정보
 *
 * ## [EN]
 * Basic parameter information of `DartSecuritiesRegistrationInfo` method
 */
export interface SecuritiesRegistrationParams
  extends Pick<DartRequestParams, "corp_code" | "bgn_de" | "end_de"> {}
