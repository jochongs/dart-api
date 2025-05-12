import { DartStatus } from "../types/DartStatus";

export class DartException {
  constructor(
    public readonly status: DartStatus,
    public readonly message: string
  ) {}
}
