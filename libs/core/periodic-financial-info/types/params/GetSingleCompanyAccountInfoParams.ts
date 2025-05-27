import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetSingleCompanyAccountInfoParams
  extends Pick<DartRequestParams, "corp_code" | "bsns_year" | "reprt_code"> {}
