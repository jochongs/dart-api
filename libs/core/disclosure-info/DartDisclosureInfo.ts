import { DartBase } from "../DartBase";
import { SearchDisclosuresRequestDto } from "./DTOs/request/SearchDisclosuresRequestDto";

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
  public async searchDisclosures(dto: SearchDisclosuresRequestDto) {
    const result = await this.axios.get<string>("/list.json", {
      params: {
        crtfc_key: this.get_API_KEY(),
        corp_code: dto.corp_code,
        bgn_de: dto.bgn_de,
        end_de: dto.end_de,
        last_report_at: dto.last_reprt_at,
        pblntf_ty: dto.pblntf_ty,
        pblntf_detail_ty: dto.pblntf_detail_ty,
        corp_cls: dto.corp_cls,
        sort: dto.sort,
        sort_mth: dto.sort_mth,
        page_no: dto.page_no,
        page_count: dto.page_count,
      },
    });

    return JSON.parse(result.data);
  }
}
