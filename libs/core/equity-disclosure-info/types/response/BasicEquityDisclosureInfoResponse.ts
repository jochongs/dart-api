import { DartStatus } from "../../../../types/DartStatus";

export interface BasicEquityDisclosureInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
