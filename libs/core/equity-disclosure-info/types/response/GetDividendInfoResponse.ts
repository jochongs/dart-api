import { DividendInfo } from "../../model/DividendInfo";

/**
 * ## [KO]
 * `getDividendInfo` 메서드 응답 결과
 *
 * ## [EN]
 * Response of `getDividendInfo` method
 */
export interface GetDividendInfoResponse {
  list: DividendInfo[];
}
