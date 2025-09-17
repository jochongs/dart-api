import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetOriginalFinancialStateFileParams
  extends Pick<DartRequestParams, "reprt_code" | "rcept_no"> {}
