import { DartExceptionStatus } from "../types/DartExceptionStatus";

export class DartException {
  constructor(
    public readonly status: DartExceptionStatus,
    public readonly message: string
  ) {}
}
