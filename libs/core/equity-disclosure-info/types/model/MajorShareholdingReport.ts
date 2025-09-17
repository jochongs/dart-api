import { DartModel } from "../../../../types/DartModel";

/**
 * ## [KO] - 대량보유 상황보고
 * 주식등의 대량보유상황보고서 내에 대량보유 상황보고 정보를 제공합니다.
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=2019021
 *
 * ## [EN] - 임원ㆍ주요주주 소유보고
 * 임원ㆍ주요주주특정증권등 소유상황보고서 내에 임원ㆍ주요주주 소유보고 정보를 제공합니다.
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE004&apiId=AE00040
 */
export interface MajorShareholdingReport
  extends Pick<DartModel, "rcept_no" | "corp_code" | "corp_name"> {
  /**
   * ## [KO] - 접수일자
   * 공시 접수일자 (YYYYMMDD)
   *
   * ## [EN] - Filing date
   * Disclosure filing date (YYYYMMDD)
   */
  rcept_dt: string;

  /**
   * ## [KO] - 보고구분
   * 주식등의 대량보유 상황 보고구분
   *
   * ## [EN] - Report type
   * Type of significant holdings of stocks report
   */
  report_tp: string;

  /**
   * ## [KO] - 대표보고자
   * 대표보고자
   *
   * ## [EN] - Lead reporting entity
   * Lead reporting entity
   */
  repror: string;

  /**
   * ## [KO] - 보유주식등의 수
   * 보유주식등의 수
   *
   * ## [EN] - Number of shares held
   * Number of shares, etc. held
   */
  stkqy: string;

  /**
   * ## [KO] - 보유주식등의 증감
   * 보유주식등의 증감
   *
   * ## [EN] - Change in number of shares held
   * Increase or decrease of held stocks, etc.
   */
  stkqy_irds: string;

  /**
   * ## [KO] - 보유비율
   * 보유비율
   *
   * ## [EN] - Holding ratio
   * Holding ratio
   */
  stkrt: string;

  /**
   * ## [KO] - 보유비율 증감
   * 보유비율 증감
   *
   * ## [EN] - Change in holding ratio
   * Increase or decrease of holding ratio
   */
  stkrt_irds: string;

  /**
   * ## [KO] - 주요체결 주식등의 수
   * 주요체결 주식등의 수
   *
   * ## [EN] - Number of major executed stocks
   * Number of major executed stocks, etc.
   */
  ctr_stkqy: string;

  /**
   * ## [KO] - 주요체결 보유비율
   * 주요체결 보유비율
   *
   * ## [EN] - Holding ratio of major executed stocks
   * Holding ratio of major executed stocks
   */
  ctr_stkrt: string;

  /**
   * ## [KO] - 보고사유
   * 보고사유
   *
   * ## [EN] - Cause of report
   * Cause of report
   */
  report_resn: string;
}
