import { DartIndicatorCategoryCodeType } from "../../../../types/DartIndicatorCategoryCodeType";
import { DartRequestParams } from "../../../../types/DartRequestParams";

export interface GetFinancialIndicatorsOfCompanyParams
  extends Pick<DartRequestParams, "corp_code" | "bsns_year" | "reprt_code"> {
  idx_cl_code: DartIndicatorCategoryCodeType;
}
