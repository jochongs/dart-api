/**
 * ## [KO] - 재무제표구분 Enum
 * Dart OpenAPI의 재무제표 구분값들을 정의
 *
 * ## [EN] - Financial statement type Enum
 * Defines the type values for financial statements in Dart OpenAPI
 */
export enum DartFinancialStatementType {
  /**
   * ## [KO] - 재무상태표 (연결, 유동/비유동법)
   * ## [EN] - Statement of Financial Position (Consolidated, Current/Non-current Method)
   */
  BS1 = "BS1",

  /**
   * ## [KO] - 재무상태표 (개별, 유동/비유동법)
   * ## [EN] - Statement of Financial Position (Separate, Current/Non-current Method)
   */
  BS2 = "BS2",

  /**
   * ## [KO] - 재무상태표 (연결, 유동성배열법)
   * ## [EN] - Statement of Financial Position (Consolidated, Liquidity Order Method)
   */
  BS3 = "BS3",

  /**
   * ## [KO] - 재무상태표 (개별, 유동성배열법)
   * ## [EN] - Statement of Financial Position (Separate, Liquidity Order Method)
   */
  BS4 = "BS4",

  /**
   * ## [KO] - 손익계산서 (연결, 기능별분류)
   * ## [EN] - Income Statement (Consolidated, Classification by Function)
   */
  IS1 = "IS1",

  /**
   * ## [KO] - 손익계산서 (개별, 기능별분류)
   * ## [EN] - Income Statement (Separate, Classification by Function)
   */
  IS2 = "IS2",

  /**
   * ## [KO] - 손익계산서 (연결, 성격별분류)
   * ## [EN] - Income Statement (Consolidated, Classification by Nature)
   */
  IS3 = "IS3",

  /**
   * ## [KO] - 손익계산서 (개별, 성격별분류)
   * ## [EN] - Income Statement (Separate, Classification by Nature)
   */
  IS4 = "IS4",

  /**
   * ## [KO] - 포괄손익계산서 (연결, 세후)
   * ## [EN] - Comprehensive Income Statement (Consolidated, Post-Tax)
   */
  CIS1 = "CIS1",

  /**
   * ## [KO] - 포괄손익계산서 (개별, 세후)
   * ## [EN] - Comprehensive Income Statement (Separate, Post-Tax)
   */
  CIS2 = "CIS2",

  /**
   * ## [KO] - 포괄손익계산서 (연결, 세전)
   * ## [EN] - Comprehensive Income Statement (Consolidated, Pre-Tax)
   */
  CIS3 = "CIS3",

  /**
   * ## [KO] - 포괄손익계산서 (개별, 세전)
   * ## [EN] - Comprehensive Income Statement (Separate, Pre-Tax)
   */
  CIS4 = "CIS4",

  /**
   * ## [KO] - 단일 포괄손익계산서 (연결, 기능별분류, 세후포괄손익)
   * ## [EN] - Single Comprehensive Income Statement (Consolidated, Function, Post-Tax Comprehensive Income)
   */
  DCIS1 = "DCIS1",

  /**
   * ## [KO] - 단일 포괄손익계산서 (개별, 기능별분류, 세후포괄손익)
   * ## [EN] - Single Comprehensive Income Statement (Separate, Function, Post-Tax Comprehensive Income)
   */
  DCIS2 = "DCIS2",

  /**
   * ## [KO] - 단일 포괄손익계산서 (연결, 기능별분류, 세전)
   * ## [EN] - Single Comprehensive Income Statement (Consolidated, Function, Pre-Tax)
   */
  DCIS3 = "DCIS3",

  /**
   * ## [KO] - 단일 포괄손익계산서 (개별, 기능별분류, 세전)
   * ## [EN] - Single Comprehensive Income Statement (Separate, Function, Pre-Tax)
   */
  DCIS4 = "DCIS4",

  /**
   * ## [KO] - 단일 포괄손익계산서 (연결, 성격별분류, 세후포괄손익)
   * ## [EN] - Single Comprehensive Income Statement (Consolidated, Nature, Post-Tax Comprehensive Income)
   */
  DCIS5 = "DCIS5",

  /**
   * ## [KO] - 단일 포괄손익계산서 (개별, 성격별분류, 세후포괄손익)
   * ## [EN] - Single Comprehensive Income Statement (Separate, Nature, Post-Tax Comprehensive Income)
   */
  DCIS6 = "DCIS6",

  /**
   * ## [KO] - 단일 포괄손익계산서 (연결, 성격별분류, 세전)
   * ## [EN] - Single Comprehensive Income Statement (Consolidated, Nature, Pre-Tax)
   */
  DCIS7 = "DCIS7",

  /**
   * ## [KO] - 단일 포괄손익계산서 (개별, 성격별분류, 세전)
   * ## [EN] - Single Comprehensive Income Statement (Separate, Nature, Pre-Tax)
   */
  DCIS8 = "DCIS8",

  /**
   * ## [KO] - 현금흐름표 (연결, 직접법)
   * ## [EN] - Statement of Cash Flows (Consolidated, Direct Method)
   */
  CF1 = "CF1",

  /**
   * ## [KO] - 현금흐름표 (개별, 직접법)
   * ## [EN] - Statement of Cash Flows (Separate, Direct Method)
   */
  CF2 = "CF2",

  /**
   * ## [KO] - 현금흐름표 (연결, 간접법)
   * ## [EN] - Statement of Cash Flows (Consolidated, Indirect Method)
   */
  CF3 = "CF3",

  /**
   * ## [KO] - 현금흐름표 (개별, 간접법)
   * ## [EN] - Statement of Cash Flows (Separate, Indirect Method)
   */
  CF4 = "CF4",

  /**
   * ## [KO] - 자본변동표 (연결)
   * ## [EN] - Statement of Changes in Equity (Consolidated)
   */
  SCE1 = "SCE1",

  /**
   * ## [KO] - 자본변동표 (개별)
   * ## [EN] - Statement of Changes in Equity (Separate)
   */
  SCE2 = "SCE2",
}
