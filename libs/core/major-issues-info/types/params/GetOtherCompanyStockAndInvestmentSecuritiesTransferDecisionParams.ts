import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetOtherCompanyStockAndInvestmentSecuritiesTransferDecisionParams extends Pick<
  DartRequestParams,
  "corp_code" | "bgn_de" | "end_de"
> {}
