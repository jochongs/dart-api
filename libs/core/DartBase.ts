import { Axios, AxiosResponse } from "axios";
import { DartOptions } from "../types/DartOptions";
import { DartExceptionResponse, DartResponse } from "../types/DartResponse";
import { DartException } from "../exceptions/DartException";
import { DartMethodOptions } from "../types/DartMethodOptions";
import { XMLParser } from "fast-xml-parser";
import {
  dartResponseContentType,
  DartResponseContentType,
} from "../types/DartResponseContentType";
import { DartError } from "../types/DartError";

export abstract class DartBase {
  private readonly API_KEY: string;
  private readonly language: "KR" | "EN";
  private readonly xmlParser: XMLParser;
  protected readonly axios: Axios;

  constructor(options: DartOptions) {
    this.API_KEY = options.key;
    this.language = options.language ?? "KR";

    this.axios = new Axios({
      baseURL: this.get_URL(),
    });

    this.xmlParser = new XMLParser();
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
    const response = await this.axios.get<ArrayBuffer>(path, {
      params: {
        crtfc_key: this.get_API_KEY(),
        ...params,
      },
      responseType: "arraybuffer",
    });

    if (response.status !== 200) {
      throw new DartError(
        `DART API request failed with status code ${response.status}`,
        response.headers
      );
    }

    const contentType = this.extractResponseContentType(response);

    if (contentType === dartResponseContentType.X_MSDOWLOAD) {
      return response.data as T;
    }

    const dartResponse: DartResponse<T | string> =
      await this.getResponseBodyWithJsonForm(contentType, response.data);

    if (this.isDartException(dartResponse)) {
      throw new DartException(dartResponse.status, dartResponse.message);
    }

    return dartResponse;
  }

  /**
   * ## [KO]
   * XML과 JSON 응답을 처리하는 메서드입니다.
   *
   * ## [EN]
   * Method to handle XML and JSON responses.
   */
  private async getResponseBodyWithJsonForm<T>(
    contentType: DartResponseContentType,
    data: ArrayBuffer
  ): Promise<Exclude<T, string>> {
    if (contentType === dartResponseContentType.XML) {
      const xmlString = new TextDecoder("utf-8").decode(data);
      return this.xmlParser.parse(xmlString).result;
    }

    if (contentType === dartResponseContentType.JSON) {
      const jsonString = new TextDecoder("utf-8").decode(data);
      return JSON.parse(jsonString);
    }

    throw new DartError(`Unsupported content type: ${contentType}`, data);
  }

  /**
   * ## [KO]
   * 응답의 Content-Type을 추출하는 메서드입니다.
   *
   * ## [EN]
   * Method to extract the Content-Type from the response.
   */
  private extractResponseContentType(
    response: AxiosResponse
  ): DartResponseContentType {
    const contentTypeHeader = response.headers["content-type"];

    if (contentTypeHeader.includes("application/json")) {
      return dartResponseContentType.JSON;
    } else if (contentTypeHeader.includes("application/xml")) {
      return dartResponseContentType.XML;
    } else if (contentTypeHeader.includes("x-msdownload")) {
      return dartResponseContentType.X_MSDOWLOAD;
    } else {
      throw new DartError(
        `Unsupported content type: ${contentTypeHeader}`,
        response.headers
      );
    }
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

  /**
   * ## [KO]
   * `DartMethodOptions`의 기본 옵션 값을 정해주는 메서드입니다.
   *
   * ## [EN]
   * Method to set the default option values for `DartMethodOptions`.
   */
  protected getMethodOptions<T extends boolean = true>(
    options?: DartMethodOptions<T>
  ): Required<DartMethodOptions<T>> {
    return {
      raw: options?.raw ?? (true as T),
    };
  }
}
