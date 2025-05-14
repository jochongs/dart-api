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
   * ## [KO]
   * DART에 등록되어있는 기업의 개황정보를 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019002
   *
   * ## [EN]
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
}
