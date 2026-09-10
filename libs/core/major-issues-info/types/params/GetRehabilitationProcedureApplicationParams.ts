import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetRehabilitationProcedureApplicationParams
  extends Pick<DartRequestParams, "corp_code" | "bgn_de" | "end_de"> {}
