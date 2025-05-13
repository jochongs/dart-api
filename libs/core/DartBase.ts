import { Axios } from "axios";
import { DartOptions } from "../types/DartOptions";
import { DartExceptionResponse, DartResponse } from "../types/DartResponse";
import { DartException } from "../exceptions/DartException";

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

  /**
   * ## [KO]
   * GET 요청을 보내는 메서드입니다.
   * params 인자에 API 키를 포함하여 요청을 보냅니다.
   *
   * ## [EN]
   * Method to send a GET request.
   * Includes the API key in the params argument when sending the request.
   */
  protected async get<T>(path: string, params: any = {}): Promise<T> {
    const response = await this.axios.get<DartResponse<T> | string>(path, {
      params: {
        crtfc_key: this.get_API_KEY(),
        ...params,
      },
    });

    let dartResponse: DartResponse<T>;

    if (typeof response.data === "string") {
      dartResponse = JSON.parse(response.data);
    } else {
      dartResponse = response.data;
    }

    if (this.isDartException(dartResponse)) {
      throw new DartException(dartResponse.status, dartResponse.message);
    }

    return dartResponse;
  }

  /**
   * ## [KO]
   * API 응답이 예외 응답인지 확인하는 메서드입니다.
   *
   * ## [EN]
   * Method to check if the API response is an exception response.
   */
  protected isDartException<T>(
    response: DartResponse<T>
  ): response is DartExceptionResponse {
    return response.status !== "000";
  }
}
