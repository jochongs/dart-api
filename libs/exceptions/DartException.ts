import { DartExceptionStatus } from "../types/DartStatus";

/**
 * ## [KO]
 * DART API에서 발생하는 예외를 나타내는 클래스입니다.
 *
 * ## [EN]
 * Class representing exceptions that occur in the DART API.
 */
export class DartException {
  constructor(
    public readonly status: DartExceptionStatus,
    public readonly message: string
  ) {}
}
