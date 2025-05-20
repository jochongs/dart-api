import { TreasuryStockTransaction } from "../../model/TreasuryStockTransaction";

/**
 * ## [KO]
 * `getTreasuryStockTransactions` 메서드 응답 결과
 *
 * ## [EN]
 * Response of `getTreasuryStockTransactions` method
 */
export interface GetTreasuryStockTransactionsResponse {
  list: TreasuryStockTransaction[];
}
