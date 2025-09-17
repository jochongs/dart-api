import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetRehabilitationProcedureApplicationParams
  extends Pick<DartRequestParams, "corp_code" | "end_de" | "bgn_de"> {}
