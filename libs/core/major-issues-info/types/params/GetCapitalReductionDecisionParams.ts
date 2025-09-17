import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetCapitalReductionDecisionParams
  extends Pick<DartRequestParams, "corp_code" | "bgn_de" | "end_de"> {}
