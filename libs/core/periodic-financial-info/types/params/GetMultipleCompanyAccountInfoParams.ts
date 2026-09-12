import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetMultipleCompanyAccountInfoParams extends Pick<
  DartRequestParams,
  "corp_code" | "bsns_year" | "reprt_code"
> {}
