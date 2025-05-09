import { DartExceptionStatusType } from "./DartExceptionStatus";

export class DartException {
  constructor(
    public readonly status: DartExceptionStatusType,
    public readonly message: string
  ) {}
}
