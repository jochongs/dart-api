import {
  CorporateStatusOverview,
  RawCorporateStatusOverview,
} from "../../model/CorporateStatusOverview";

/**
 * ## [KO]
 * `getOverviewOfCorporate` 메서드 응답 결과
 *
 * ## [EN]
 * Response of `getOverviewOfCorporate` method
 */
export type GetOverviewOfCorporateResponse<
  T extends CorporateStatusOverview | RawCorporateStatusOverview
> = T;
