import { DartModel } from "../../../../types/DartModel";

export interface LawsuitFiling
  extends Pick<DartModel, "rcept_no" | "corp_cls" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 사건의 명칭
   * 사건의 명칭
   *
   * ## [EN] - Case name
   * Case name
   */
  icnm: string;

  /**
   * ## [KO] - 원고ㆍ신청인
   * 원고ㆍ신청인
   *
   * ## [EN] - Plaintiff/Applicant
   * Plaintiff/Applicant
   */
  ac_ap: string;

  /**
   * ## [KO] - 청구내용
   * 청구내용
   *
   * ## [EN] - Claim content
   * Claim content
   */
  rq_cn: string;

  /**
   * ## [KO] - 관할법원
   * 관할법원
   *
   * ## [EN] - Competent court
   * Competent court
   */
  cpct: string;

  /**
   * ## [KO] - 향후대책
   * 향후대책
   *
   * ## [EN] - Future countermeasures
   * Future countermeasures
   */
  ft_ctp: string;

  /**
   * ## [KO] - 제기일자
   * 제기일자
   *
   * ## [EN] - Filing date
   * Filing date
   */
  lgd: string;

  /**
   * ## [KO] - 확인일자
   * 확인일자
   *
   * ## [EN] - Confirmation date
   * Confirmation date
   */
  cfd: string;
}