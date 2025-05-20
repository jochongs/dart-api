import { CapitalChangeStatus } from "../../model/CaptialStatus";

/**
 * ## [KO]
 * `getCapitalChangeStatus` 메서드 응답 결과
 *
 * ## [EN]
 * Response of `getCapitalChangeStatus` method
 */
export type GetCapitalChangeStatusResponse = {
  list: CapitalChangeStatus[];
};
