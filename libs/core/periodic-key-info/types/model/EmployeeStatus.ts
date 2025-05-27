import { BasicPeriodicReportsInfo } from "./BasicPeriodicReportsInfo";

/**
 * ## [KO] - 직원 현황
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS002&apiId=2019011
 *
 * ## [EN] - Status of staff
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE002&apiId=AE00012
 */
export interface EmployeeStatus extends BasicPeriodicReportsInfo {
  /**
   * ## [KO] - 사 업부문
   *
   * ## [EN] - Business division
   */
  fo_bbm: string;

  /**
   * ## [KO] - 성별
   * 남, 여
   *
   * ## [EN] - Gender
   * Male, female
   */
  sexdstn: string;

  /**
   * ## [KO] - 개정 전 직원 수 정규직
   *
   * ## [EN] - Number of employees(before the form amendment in December 2015) (Permanent)
   */
  reform_bfe_emp_co_rgllbr: string;

  /**
   * ## [KO] - 개정 전 직원 수 계약직
   *
   * ## [EN] - "Number of employees(before the form amendment in December 2015) (Contract)"
   */
  reform_bfe_emp_co_cnttk: string;

  /**
   * ## [KO] - 개정 전 직원 수 기타
   *
   * ## [EN] - "Number of employees(before the form amendment in December 2015) (Other)"
   */
  reform_bfe_emp_co_etc: string;

  /**
   * ## [KO] - 정규직 수
   * 상근, 비상근
   *
   * ## [EN] - Number of employees (Workers withno fixed term) (Total)
   * Standing, non-standing
   */
  rgllbr_co: string;

  /**
   * ## [KO] - 정규직 단시간 근로자 수
   * 대표이사, 이사, 사외이사 등
   *
   * ## [EN] - Number of employees (Workers withno fixed term) (Part-timeworkers)
   * CEO, director, outside director, etc.
   */
  rgllbr_abacpt_labrr_co: string;

  /**
   * ## [KO] - 계약직 수
   * 9,999,999,999
   *
   * ## [EN] - Number of employees (Fixed-term employee) (Total)
   * 9,999,999,999
   */
  cnttk_co: string;

  /**
   * ## [KO] - 계약직 단시간 근로자 수
   * 9,999,999,999
   *
   * ## [EN] - Number of employees (Fixed-term employee) (Part-timeworkers)
   * 9,999,999,999
   */
  cnttk_abacpt_labrr_co: string;

  /**
   * ## [KO] - 합계
   * 9,999,999,999
   *
   * ## [EN] - Total
   * 9,999,999,999
   */
  sm: string;

  /**
   * ## [KO] - 평균 근속 연수
   * 9,999,999,999
   *
   * ## [EN] - Average years of service
   * 9,999,999,999
   */
  avrg_cnwk_sdytrn: string;

  /**
   * ## [KO] - 연간 급여 총액
   * 9,999,999,999
   *
   * ## [EN] - Total annual compensation
   * 9,999,999,999
   */
  fyer_salary_totamt: string;

  /**
   * ## [KO] - 1인평균 급여 액
   * 9,999,999,999
   *
   * ## [EN] - Average salary per person
   */
  jan_salary_am: string;

  /**
   * ## [KO] - 비고
   *
   * ## [EN] - Note
   */
  rm: string;

  /**
   * ## [KO] - 결산기준일
   * YYYY-MM-DD
   *
   * ## [EN] - Settlement date
   * YYYY-MM-DD
   */
  stlm_dt: string;
}
