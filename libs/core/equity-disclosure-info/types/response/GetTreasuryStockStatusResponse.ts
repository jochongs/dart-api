import { TreasuryStockStatus } from "../../model/TreasuryStockStatus";

/**
 * ## [KO]
 * `GetTreasuryStockStatus` 메서드 응답 결과
 *
 * ## [EN]
 * Response of `GetTreasuryStockStatus` method
 */
export interface GetTreasuryStockStatusResponse {
  list: TreasuryStockStatus[];
}
