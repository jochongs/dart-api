import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetFullFinancialStatementsParams
  extends Pick<
    DartRequestParams,
    "corp_code" | "bsns_year" | "reprt_code" | "fs_div"
  > {}
