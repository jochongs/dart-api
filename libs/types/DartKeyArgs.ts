import { KeyMode } from "./KeyMode";

export type DartKeyArgs<K extends KeyMode> = K extends "INJECTED"
  ? [key?: string]
  : K extends "REQUIRED"
    ? [key: string]
    : [];
