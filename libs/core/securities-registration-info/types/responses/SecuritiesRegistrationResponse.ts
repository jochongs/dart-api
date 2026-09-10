import { DartStatus } from "../../../../types/DartStatus";

/**
 * ## [KO] - 증권신고서 그룹 항목
 * 증권신고서 응답 내 각 섹션(일반사항, 증권의종류 등)을 나타냅니다.
 *
 * ## [EN] - Securities registration group item
 * Represents each section (general affairs, securities type, etc.)
 * within the securities registration response.
 */
export interface SecuritiesRegistrationGroup<T> {
  title: string;
  list: T[];
}

/**
 * ## [KO] - 증권신고서 응답
 * DS006 증권신고서 주요정보 API의 공통 응답 타입입니다.
 * `group` 배열 내 각 항목은 섹션별 데이터를 담고 있습니다.
 *
 * ## [EN] - Securities registration response
 * Common response type for DS006 Securities Registration Key Information APIs.
 * Each item in the `group` array contains data for a specific section.
 *
 * @link https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS006
 */
export interface SecuritiesRegistrationResponse<T extends SecuritiesRegistrationGroup<any>[]> {
  result: {
    status: DartStatus;
    message: string;
  };
  group: T;
}
