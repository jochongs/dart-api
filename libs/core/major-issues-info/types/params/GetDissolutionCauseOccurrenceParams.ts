import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetDissolutionCauseOccurrenceParams
  extends Pick<DartRequestParams, "corp_code" | "bgn_de" | "end_de"> {}
