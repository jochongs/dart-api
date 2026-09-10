import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetBusinessAcquisitionDecisionParams extends Pick<
  DartRequestParams,
  "corp_code" | "bgn_de" | "end_de"
> {}
