import { DartModel } from "../../../../types/DartModel";

export interface DissolutionCauseOccurrence
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 해산사유
   * 해산사유
   *
   * ## [EN] - Cause of dissolution
   * Cause of dissolution
   */
  ds_rs: string;

  /**
   * ## [KO] - 해산사유발생일(결정일)
   * 해산사유발생일(결정일)
   *
   * ## [EN] - Date of dissolution cause occurrence (decision date)
   * Date of dissolution cause occurrence (decision date)
   */
  ds_rsd: string;

  /**
   * ## [KO] - 사외이사 참석여부(참석)
   * 사외이사 참석 인원 수 (참석)
   *
   * ## [EN] - Attendance of outside directors (present)
   * Number of outside directors attended (present)
   */
  od_a_at_t: string;

  /**
   * ## [KO] - 사외이사 참석여부(불참)
   * 사외이사 참석 인원 수 (불참)
   *
   * ## [EN] - Attendance of outside directors (absent)
   * Number of outside directors not attended (absent)
   */
  od_a_at_b: string;

  /**
   * ## [KO] - 감사(감사위원) 참석 여부
   * 감사(감사위원) 참석 여부
   *
   * ## [EN] - Auditor (audit committee) attendance
   * Auditor (audit committee) attendance
   */
  adt_a_atn: string;
}
