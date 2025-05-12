/**
 * ## [KO]
 * DART Open API의 응답 코드 상수입니다.
 * 공시 API 호출 시 반환되는 상태 메시지를 코드로 구분하여 처리할 수 있습니다.
 *
 * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001#:~:text=API%20%EA%B2%B0%EA%B3%BC-,%EB%A9%94%EC%8B%9C%EC%A7%80%20%EC%84%A4%EB%AA%85,-%2D%20000%20%3A
 *
 * ## [EN]
 * Response code constants for the DART Open API.
 * These codes help identify and handle the status of disclosure API responses.
 *
 * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE001&apiId=AE00001#:~:text=API%20result-,Message,-description
 */
export const dartStatus = {
  /**
   * ## [KO]
   * 정상
   *
   * ## [EN]
   * Normal
   */
  SUCCESS: "000",

  /**
   * ## [KO]
   * 등록되지 않은 키입니다.
   *
   * ## [EN]
   * This is not a registered key.
   */
  INVALID_KEY: "010",

  /**
   * ## [KO]
   * 사용할 수 없는 키입니다. 오픈API에 등록되었으나, 일시적으로 사용 중지된 키를 통하여 검색하는 경우 발생합니다.
   *
   * ## [EN]
   * This key cannot be used.
   * This error occurs when a search is made through a key
   * that is registered to Open API but temporarily suspended.
   */
  UNUSABLE_KEY: "011",

  /**
   * ## [KO]
   * 접근할 수 없는 IP입니다.
   *
   * ## [EN]
   * This IP is not available.
   */
  BLOCKED_IP: "012",

  /**
   * ## [KO]
   * 조회된 데이타가 없습니다.
   *
   * ## [EN]
   * No data viewed.
   */
  NO_DATA: "013",

  /**
   * ## [KO]
   * 파일이 존재하지 않습니다
   *
   * ## [EN]
   * The file does not exist.
   */
  FILE_NOT_FOUND: "014",

  /**
   * ## [KO]
   * 요청 제한을 초과하였습니다.
   * 일반적으로는 20,000건 이상의 요청에 대하여 이 에러 메시지가 발생되나, 요청 제한이 다르게 설정된 경우에는 이에 준하여 발생됩니다.
   *
   * ## [EN]
   * Call limit exceeded.
   * Although this error message is usually generated
   * in response to at least 20,000 requests,
   * it may occur at different thresholds if the rate limit is configured otherwise.
   */
  REQUEST_LIMIT_EXCEEDED: "020",

  /**
   * ## [KO]
   * 조회 가능한 회사 개수가 초과하였습니다.(최대 100건)
   *
   * ## [EN]
   * You exceeded the number of companies viewable at a time (up to 100).
   */
  COMPANY_LIMIT_EXCEEDED: "021",

  /**
   * ## [KO]
   * 필드의 부적절한 값입니다. 필드 설명에 없는 값을 사용한 경우에 발생하는 메시지입니다.
   *
   * ## [EN]
   * The value does not comply with the field.
   * This message is generated when a value not included in the field description is entered.
   */
  INVALID_FIELD_VALUE: "100",

  /**
   * ## [KO]
   * 부적절한 접근입니다.
   *
   * ## [EN]
   * Inappropriate access.
   */
  UNAUTHORIZED_ACCESS: "101",

  /**
   * ## [KO]
   * 시스템 점검으로 인한 서비스가 중지 중입니다.
   *
   * ## [EN]
   * The service is suspended for maintenance.
   */
  SYSTEM_MAINTENANCE: "800",

  /**
   * ## [KO]
   * 정의되지 않은 오류가 발생하였습니다.
   *
   * ## [EN]
   * An undefined error has occurred.
   */
  UNKNOWN_ERROR: "900",

  /**
   * ## [KO]
   * 사용자 계정의 개인정보 보유기간이 만료되어 사용할 수 없는 키입니다.
   * 관리자 이메일(opendart@fss.or.kr)로 문의하시기 바랍니다.
   *
   * ## [EN]
   * This key is unusable because the personal information retention period
   * for the user account has expired.
   * Please inquire at the admin email (opendart@fss.or.kr).
   */
  PERSONAL_INFO_EXPIRED: "901",
} as const;

/**
 * ## [KO]
 * `dartStatus` 객체에 정의된 응답 코드 문자열 타입입니다.
 * API 응답의 상태 코드를 타입 수준에서 제한하고 싶을 때 사용할 수 있습니다.
 *
 * ## [EN]
 * String union type derived from the keys of `dartStatus`.
 * Useful for type-safe handling of known DART API response codes.
 */
export type DartStatus = (typeof dartStatus)[keyof typeof dartStatus];
