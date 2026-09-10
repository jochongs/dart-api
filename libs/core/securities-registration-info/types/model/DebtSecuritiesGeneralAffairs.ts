import { SecuritiesRegistrationBase } from "./SecuritiesRegistrationBase";

/**
 * ## [KO] - 채무증권 일반사항
 * 채무증권 신고서 내 일반사항 섹션
 *
 * ## [EN] - Debt securities general affairs
 * General affairs section in debt securities reports
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020055
 */
export interface DebtSecuritiesGeneralAffairs extends SecuritiesRegistrationBase {
  /**
   * ## [KO] - 종목명
   *
   * ## [EN] - Issue name
   */
  tm: string;

  /**
   * ## [KO] - 채무증권명
   *
   * ## [EN] - Debt securities name
   */
  bdnmn: string;

  /**
   * ## [KO] - 발행/매출방법
   *
   * ## [EN] - Offering/sales method
   */
  slmth: string;

  /**
   * ## [KO] - 발행총액
   *
   * ## [EN] - Total issuance amount (KRW)
   */
  fta: string;

  /**
   * ## [KO] - 매출총액
   *
   * ## [EN] - Total sales amount (KRW)
   */
  slta: string;

  /**
   * ## [KO] - 발행/매출가격(액면가대비)
   *
   * ## [EN] - Issuance/sales price (relative to par value)
   */
  isprc: string;

  /**
   * ## [KO] - 표면이자율
   *
   * ## [EN] - Coupon rate
   */
  intr: string;

  /**
   * ## [KO] - 만기이자율
   *
   * ## [EN] - Yield to maturity
   */
  isrr: string;

  /**
   * ## [KO] - 원리금지급대리인
   *
   * ## [EN] - Principal and interest payment agent
   */
  rpd: string;

  /**
   * ## [KO] - 발행일이후이자지급
   *
   * ## [EN] - Interest payment after issuance date
   */
  print_pymint: string;

  /**
   * ## [KO] - 발행회사명
   *
   * ## [EN] - Issuing company name
   */
  mngt_cmp: string;

  /**
   * ## [KO] - 신용등급(신용평가기관)
   *
   * ## [EN] - Credit rating (credit rating agency)
   */
  cdrt_int: string;

  /**
   * ## [KO] - 청약기간
   *
   * ## [EN] - Subscription period
   */
  sbd: string;

  /**
   * ## [KO] - 납입일
   *
   * ## [EN] - Payment date
   */
  pymd: string;

  /**
   * ## [KO] - 청약공고일
   *
   * ## [EN] - Subscription announcement date
   */
  sband: string;

  /**
   * ## [KO] - 배정공고일
   *
   * ## [EN] - Allocation announcement date
   */
  asand: string;

  /**
   * ## [KO] - 배정기준일
   *
   * ## [EN] - Allocation reference date
   */
  asstd: string;

  /**
   * ## [KO] - 예탁기관
   *
   * ## [EN] - Depository institution
   */
  dpcrn: string;

  /**
   * ## [KO] - 예탁금액
   *
   * ## [EN] - Deposit amount (KRW)
   */
  dpcr_amt: string;

  /**
   * ## [KO] - 사용용도/목적
   *
   * ## [EN] - Intended use/purpose
   */
  usarn: string;

  /**
   * ## [KO] - 사용계획
   *
   * ## [EN] - Usage plan
   */
  usntn: string;

  /**
   * ## [KO] - 원리금지급경험
   *
   * ## [EN] - Principal and interest payment experience
   */
  wnexpl_at: string;

  /**
   * ## [KO] - 인수인
   *
   * ## [EN] - Underwriter name
   */
  udtintnm: string;

  /**
   * ## [KO] - 보증이자율
   *
   * ## [EN] - Guarantee interest rate
   */
  grt_int: string;

  /**
   * ## [KO] - 보증총액
   *
   * ## [EN] - Total guarantee amount (KRW)
   */
  grt_amt: string;

  /**
   * ## [KO] - 조기상환구조 관리
   *
   * ## [EN] - Early redemption structure management
   */
  icmg_mgknd: string;

  /**
   * ## [KO] - 조기상환구조 관리금액
   *
   * ## [EN] - Early redemption structure management amount (KRW)
   */
  icmg_mgamt: string;

  /**
   * ## [KO] - 주식연계
   *
   * ## [EN] - Stock linkage
   */
  estk_exstk: string;

  /**
   * ## [KO] - 전환/교환비율
   *
   * ## [EN] - Conversion/exchange ratio
   */
  estk_exrt: string;

  /**
   * ## [KO] - 전환/교환가격
   *
   * ## [EN] - Conversion/exchange price (KRW)
   */
  estk_exprc: string;

  /**
   * ## [KO] - 전환/교환기간
   *
   * ## [EN] - Conversion/exchange period
   */
  estk_expd: string;

  /**
   * ## [KO] - 주요사항보고서 접수번호
   *
   * ## [EN] - Major event report receipt number (14 digits)
   */
  rpt_rcpn: string;

  /**
   * ## [KO] - 이중상환청구권부 여부
   *
   * ## [EN] - Whether covered bond
   */
  drcb_at: string;

  /**
   * ## [KO] - 이중상환청구권부 기초자산
   *
   * ## [EN] - Covered bond underlying asset
   */
  drcb_uast: string;

  /**
   * ## [KO] - 이중상환청구권부 옵션종류
   *
   * ## [EN] - Covered bond option type
   */
  drcb_optknd: string;

  /**
   * ## [KO] - 이중상환청구권부 방법
   *
   * ## [EN] - Covered bond method
   */
  drcb_mtd: string;
}
