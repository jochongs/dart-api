import { dartStatus } from "./DartStatus";

export type DartSuccessResponse<T> = {
  /**
   * ## [KO]
   * 정상 API 응답.
   *
   * ## [EN]
   * Normal API response.
   */
  status: typeof dartStatus.SUCCESS;

  /**
   * ## [KO]
   * 정상 API 응답 메시지.
   *
   * ## [EN]
   * Normal API response message.
   */
  message: string;
} & T;

export type DartExceptionResponse = {
  /**
   * ## [KO]
   * 비정상 API 응답.
   * `dartStatus`를 확인하세요.
   *
   * ## [EN]
   * Abnormal API response.
   * Check `dartStatus`.
   */
  status: Exclude<typeof dartStatus, typeof dartStatus.SUCCESS>;

  /**
   * ## [KO]
   * 비정상 API 응답 메시지
   *
   * ## [EN]
   * Abnormal API response message
   */
  message: string;
};

export type DartResponse<T> = DartSuccessResponse<T> | DartExceptionResponse;
