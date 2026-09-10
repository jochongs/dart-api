import { DartModel } from "../../../../types/DartModel";

/**
 * ## [KO] - 증권신고서 기본 인터페이스
 * DS006 모든 모델의 공통 필드 (접수번호, 법인구분, 고유번호, 법인명)
 *
 * ## [EN] - Securities registration base interface
 * Common fields for all DS006 models (filing no, corporation type, corporation code, corporation name)
 */
export interface SecuritiesRegistrationBase
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {}
