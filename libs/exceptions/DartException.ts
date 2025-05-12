import { DartExceptionStatusType } from "../types/DartExceptionStatus";

export class DartException {
  constructor(
    public readonly status: DartExceptionStatusType,
    public readonly message: string
  ) {}
}
