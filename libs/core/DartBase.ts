import { DartOptions } from "../types/DartOptions";

export abstract class DartBase {
  constructor(protected readonly options: DartOptions) {}
}
