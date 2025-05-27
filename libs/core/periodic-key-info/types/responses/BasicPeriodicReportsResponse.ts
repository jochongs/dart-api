import { DartStatus } from "../../../../types/DartStatus";

/**
 * ## [KO] - 정기보고서 응답
 * `T`를 확인하세요.
 *
 * ## [EN] - Periodic report response
 * Check `T`.
 */
export interface BasicPeriodicReportsResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
