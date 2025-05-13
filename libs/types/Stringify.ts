export type Stringify<T> = T extends object
  ? {
      [K in keyof T]: string;
    }
  : string;
