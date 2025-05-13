import { dartStatus } from "./DartStatus";

export type SuccessResponseDto<T> = {
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

export type ExceptionResponseDto = {
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

export type BasicResponseDto<T> = SuccessResponseDto<T> | ExceptionResponseDto;
