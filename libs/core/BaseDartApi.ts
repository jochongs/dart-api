import { DartOptions } from "../types/DartOptions";

export abstract class BaseDartApi {
  constructor(protected readonly options: DartOptions) {}
}
