import { Axios } from "axios";
import { DartOptions } from "../types/DartOptions";

export abstract class DartBase {
  private readonly API_KEY: string;
  private readonly language: "KR" | "EN";
  protected readonly axios: Axios;

  constructor(options: DartOptions) {
    this.API_KEY = options.key;
    this.language = options.language ?? "KR";

    this.axios = new Axios({
      baseURL: this.get_URL(),
    });
  }

  /**
   * ## [KO]
   * API 키를 가져오는 메서드입니다.
   *
   * ## [EN]
   * Method to get the API key.
   */
  protected get_API_KEY(): string {
    return this.API_KEY;
  }

  /**
   * ## [KO]
   * 언어 옵션에 따라 URL을 반환하는 메서드입니다.
   * 응답 결과를 영어로 받고 싶다면 options.language를 "EN"으로 설정하세요.
   *
   * ## [EN]
   * Method to return the URL based on the language option.
   * If you want to receive the response in Korean, set options.language to "KR".
   */
  protected get_URL() {
    return this.language === "KR"
      ? "https://opendart.fss.or.kr/api"
      : "https://engopendart.fss.or.kr/engapi";
  }
}
