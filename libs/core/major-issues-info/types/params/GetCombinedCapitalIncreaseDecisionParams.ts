import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetCombinedCapitalIncreaseDecisionParams
  extends Pick<DartRequestParams, "corp_code" | "bgn_de" | "end_de"> {}
