import { DartStatus } from "../../../../types/DartStatus";

export interface BasicMajorIssuesInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
