import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetExchangeableBondIssueDecisionParams extends Pick<
  DartRequestParams,
  "corp_code" | "bgn_de" | "end_de"
> {}
