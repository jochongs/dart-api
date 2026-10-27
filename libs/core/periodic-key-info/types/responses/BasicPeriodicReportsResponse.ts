import { DartStatus } from "../../../../types/DartStatus";
import { BasicPeriodicReportsInfo } from "../model/BasicPeriodicReportsInfo";

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

/**
 * ## [KO] - 정기보고서 응답 Ver 2.0
 * 회사·접수 정보는 최상위에, 개인별·사업연도별 보수 정보는 `group`에 담깁니다.
 * `T`는 `group` 배열의 항목 타입입니다.
 *
 * ## [EN] - Periodic report response Ver 2.0
 * Company and filing information is at the top level; `group` contains remuneration by person and fiscal year.
 * `T` is the type of each item in the `group` array.
 */
export interface BasicPeriodicReportsResponseV2<T>
  extends BasicPeriodicReportsInfo {
  status: DartStatus;
  message: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;

  group: T[];
}
