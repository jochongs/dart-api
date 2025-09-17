export interface BonusIssueDecision {
  /**
   * ## [KO] - 접수번호(14자리)
   * ※ 공시뷰어 연결 예시
   * - PC용: https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
   *
   * ## [EN] - Filing No. (14 digits)
   * ※ Example link to Disclosure Viewer
   * - For PCs: https://englishdart.fss.or.kr/dsbh001/main.do?rcpNo=FilingNumber
   */
  rcept_no: string;

  /**
   * ## [KO] - 법인구분
   * Y(유가), K(코스닥), N(코넥스), E(기타)
   *
   * ## [EN] - Corporation type
   * Y (KOSPI), K (KOSDAQ), N (KONEX), E (Other)
   */
  corp_cls: string;

  /**
   * ## [KO] - 고유번호 (8자리)
   * 공시대상회사의 고유번호
   *
   * ## [EN] - Corporation code (8 digits)
   * Corporation code of disclosing company
   */
  corp_code: string;

  /**
   * ## [KO] - 회사명
   * 공시대상 회사명
   *
   * ## [EN] - Corporation name
   * Name of the disclosing company
   */
  corp_name: string;

  /**
   * ## [KO] - 신주의 종류와 수 (보통주식)
   * 단위: 주
   *
   * ## [EN] - Class and number of new stock (Common stock)
   * Unit: shares
   */
  nstk_ostk_cnt: string;

  /**
   * ## [KO] - 신주의 종류와 수 (기타주식)
   * 단위: 주
   *
   * ## [EN] - Class and number of new stock (Other stock classes)
   * Unit: shares
   */
  nstk_estk_cnt: string;

  /**
   * ## [KO] - 1주당 액면가액 (원)
   *
   * ## [EN] - Par value per share (KRW)
   */
  fv_ps: string;

  /**
   * ## [KO] - 증자 전 발행주식총수 (보통주식)
   * 단위: 주
   *
   * ## [EN] - Total number of shares issued before capital increase (Common stock)
   * Unit: shares
   */
  bfic_tisstk_ostk: string;

  /**
   * ## [KO] - 증자 전 발행주식총수 (기타주식)
   * 단위: 주
   *
   * ## [EN] - Total number of shares issued before capital increase (Other stock classes)
   * Unit: shares
   */
  bfic_tisstk_estk: string;

  /**
   * ## [KO] - 신주배정기준일
   *
   * ## [EN] - Record date for new share allotment
   */
  nstk_asstd: string;

  /**
   * ## [KO] - 1주당 신주배정 주식수 (보통주식)
   * 소수점 최대 20자리
   *
   * ## [EN] - Number of new stocks allocated per share (Common stock)
   * Up to 20 decimal points
   */
  nstk_ascnt_ps_ostk: string;

  /**
   * ## [KO] - 1주당 신주배정 주식수 (기타주식)
   * 소수점 최대 20자리
   *
   * ## [EN] - Number of new stocks allocated per share (Other stock classes)
   * Up to 20 decimal points
   */
  nstk_ascnt_ps_estk: string;

  /**
   * ## [KO] - 신주의 배당기산일
   *
   * ## [EN] - Record date of dividend payout
   */
  nstk_dividrk: string;

  /**
   * ## [KO] - 신주권 교부예정일
   *
   * ## [EN] - Scheduled delivery date of new share certificates
   */
  nstk_dlprd: string;

  /**
   * ## [KO] - 신주의 상장예정일
   *
   * ## [EN] - Scheduled listing date for new shares
   */
  nstk_lstprd: string;

  /**
   * ## [KO] - 이사회결의일 (결정일)
   *
   * ## [EN] - Date of board resolution (decision date)
   */
  bddd: string;
}
