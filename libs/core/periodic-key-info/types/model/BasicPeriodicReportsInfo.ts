import { DartModel } from "../../../../types/DartModel";

/**
 * ## [KO] - 정기보고서 주요 정보 기본 인자
 *
 * ## [EN] - Basic parameters for major information of periodic reports
 */
export interface BasicPeriodicReportsInfo
  extends Pick<
    DartModel,
    "rcept_no" | "corp_cls" | "corp_code" | "corp_name"
  > {}
