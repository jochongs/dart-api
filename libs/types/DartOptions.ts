export type DartOptions = {
  /**
   * ## [KO]
   * DART Open API 인증키입니다. 모든 API 요청 시 필수입니다.
   *
   * @link https://opendart.fss.or.kr/uss/umt/EgovMberInsertView.do
   *
   *
   * ## [EN]
   * This is the API key for DART Open API. Required for all API requests.
   *
   * @link https://engopendart.fss.or.kr/uss/umt/EgovMberInsertView.do
   */
  key: string;

  /**
   * ## [KO]
   * 응답 언어를 선택하는 옵션입니다. `"KR"`은 한국어, `"EN"`은 영어 응답을 요청합니다.
   * 명시하지 않으면 기본값으로 `"KR"`이 사용됩니다.
   *
   * @default "KR"
   *
   * ## [EN]
   * Option to select the response language. `"KR"` requests Korean responses, while `"EN"` requests English responses.
   * Defaults to `"KR"` if not specified.
   *
   * @default "KR"
   */
  language?: "EN" | "KR";
};
