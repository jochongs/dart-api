import { KeyMode } from "./KeyMode";

export type DartKeyArgs<K extends KeyMode> = K extends "INJECTED"
  ? [key?: string]
  : [key: string];
