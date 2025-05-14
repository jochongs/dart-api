/**
 * ## [KO]
 * Dart API를 사용 중에 발생한 알 수 없는 에러를 처리하는 메서드입니다.
 *
 * ## [EN]
 * Method to handle unknown errors that occur while using the Dart API.
 */
export class DartError extends Error {
  public readonly content?: any;

  constructor(message: string, content?: any) {
    super(message);
    this.content = content;
    this.name = "DartError";
  }
}
