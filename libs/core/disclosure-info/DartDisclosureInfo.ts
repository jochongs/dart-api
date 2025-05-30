import { DartMethodOptions } from "../../types/DartMethodOptions";
import { DartBase } from "../DartBase";
import {
  CorporateStatusOverview,
  RawCorporateStatusOverview,
} from "./model/CorporateStatusOverview";
import { Disclosure, RawDisclosure } from "./model/Disclosure";
import { SearchDisclosuresParams } from "./types/param/SearchDisclosuresParams";
import { GetOverviewOfCorporateResponse } from "./types/response/GetOverviewOfCorporateResponse";
import { SearchDisclosuresResponse } from "./types/response/SearchDisclosuresResponse";

/**
 * ## [KO]
 * 공시유형, 회사, 날짜 등의 다양한 조건으로 공시보고서를 조회할 수 있는 기능을 제공합니다.
 * 또한, DART에 등록된 기업의 개황정보, 공시서류 원본파일, 고유번호 조회 등 공시 관련 API에 접근할 수 있습니다.
 *
 * @link https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS001
 *
 * ## [EN]
 * Provides functionality to retrieve disclosure reports based on various criteria such as disclosure type, company, and date.
 * Also grants access to disclosure-related APIs including company overview, original report files, and company identifiers registered with DART.
 *
 * @link https://engopendart.fss.or.kr/guide/main.do?apiGrpCd=DE001
 */
export class DartDisclosureInfo extends DartBase {
  /**
   * ## [KO] - 공시 검색
   * 공시 유형별, 회사별, 날짜별 등 여러가지 조건으로 공시보고서 검색기능을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001
   *
   * ## [EN] - Search disclosures
   * Search functions are provided to search disclosure reports
   * by different filters including disclosure type, company, date, etc.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE001&apiId=AE00001
   */
  public async searchDisclosures<TRaw extends boolean = true>(
    params: SearchDisclosuresParams,
    options?: DartMethodOptions<TRaw>
  ): Promise<
    TRaw extends true
      ? SearchDisclosuresResponse<RawDisclosure>
      : SearchDisclosuresResponse<Disclosure>
  > {
    const filledOptions = this.getMethodOptions(options);

    const response = await this.get<SearchDisclosuresResponse<RawDisclosure>>(
      "/list.json",
      {
        corp_code: params.corp_code,
        bgn_de: params.bgn_de,
        end_de: params.end_de,
        last_report_at: params.last_reprt_at,
        pblntf_ty: params.pblntf_ty,
        pblntf_detail_ty: params.pblntf_detail_ty,
        corp_cls: params.corp_cls,
        sort: params.sort,
        sort_mth: params.sort_mth,
        page_no: params.page_no,
        page_count: params.page_count,
      }
    );

    if (filledOptions.raw) {
      return response as SearchDisclosuresResponse<RawDisclosure> as any;
    }

    return {
      ...response,
      list: response.list.map(Disclosure.fromRaw),
    } as SearchDisclosuresResponse<Disclosure> as any;
  }

  /**
   * ## [KO] - 기업개황
   * DART에 등록되어있는 기업의 개황정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019002
   *
   * ## [EN] - Overview of corporate status
   * Provide a status overview of a corporation registered with DART.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE001&apiId=AE00002
   *
   * @param corp_code - [KO]기업 고유번호: 공시대상회사의 고유번호(8자리)
   * @param corp_code - [EN]Corporation code: Corporation code of disclosing company (8 digits)
   */
  public async getOverviewOfCorporate<TRaw extends boolean = true>(
    corp_code: string,
    options?: DartMethodOptions<TRaw>
  ): Promise<
    TRaw extends true
      ? GetOverviewOfCorporateResponse<RawCorporateStatusOverview>
      : GetOverviewOfCorporateResponse<CorporateStatusOverview>
  > {
    const filledOptions = this.getMethodOptions(options);

    const response = await this.get<
      GetOverviewOfCorporateResponse<RawCorporateStatusOverview>
    >("/company.json", {
      corp_code,
    });

    if (filledOptions.raw) {
      return response as GetOverviewOfCorporateResponse<RawCorporateStatusOverview> as any;
    }

    return CorporateStatusOverview.fromRaw(
      response
    ) as GetOverviewOfCorporateResponse<CorporateStatusOverview> as any;
  }

  /**
   * ## [KO] - 공시서류원본파일
   * 공시보고서 원본파일을 제공합니다.
   *
   * ## [EN] - Original disclosure document file
   * The original disclosure document files are provided.
   *
   * @param rcept_no - [KO]접수번호: 공시보고서의 접수번호
   * @param rcept_no - [EN]Receipt number: Receipt number of the disclosure report
   */
  public async getOriginalDisclosureDocumentFile(
    rcept_no: string
  ): Promise<ArrayBuffer> {
    const response = await this.get<ArrayBuffer>("/document.xml", {
      rcept_no: rcept_no,
    });

    return response;
  }

  /**
   * ## [KO] - 공시 고유번호
   * DART에 등록되어있는 공시대상회사의 고유번호,회사명,종목코드, 최근변경일자를 파일로 제공합니다.
   *
   * ## [EN] - Disclosure Corporation code
   * The corporation code, company name, item code,
   * and date of the latest change for a company subject to disclosure
   * and registered with DART are provided in file form.
   */
  public async getDisclosureCorporationCode(): Promise<ArrayBuffer> {
    const response = await this.get<ArrayBuffer>("/corpCode.xml");

    return response;
  }
}
