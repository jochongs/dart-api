export type DartMethodOptions<T extends boolean> = {
  /**
   * ## [KO]
   * Typescript 타입에 맞도록 가공할 것인지 선택하는 옵션입니다.
   *
   * `true`로 설정하면 API 응답을 Typescript 타입에 맞게 가공합니다.
   * `false`로 설정하면 모든 응답을 API 응답 받은 string 타입 그대로 반환됩니다.
   *
   * ## [EN]
   * Option to process the API response to match the Typescript type.
   *
   * `true` processes the API response to match the Typescript type.
   * `false` returns all responses as the original string type received from the API.
   *
   * @default true
   */
  raw?: T;
};
