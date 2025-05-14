export const dartResponseContentType = {
  JSON: "json",
  XML: "xml",
  X_MSDOWLOAD: "x-msdownload",
} as const;

export type DartResponseContentType =
  (typeof dartResponseContentType)[keyof typeof dartResponseContentType];
