import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetOverseasSecuritiesDelistingDecisionParams extends Pick<
  DartRequestParams,
  "corp_code" | "bgn_de" | "end_de"
> {}
