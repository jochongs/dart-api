import { DartBase } from "../DartBase";
import { SearchDisclosuresRequestDto } from "./DTOs/request/SearchDisclosuresRequestDto";
import { PublicNotificationType } from "./types/PublicNotificationType";

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
    dto;
    const result = await this.axios.get("/list.json", {
      params: {
        crtfc_key: this.get_API_KEY(),
        bgn_de: "20250101",
        end_de: "20250209",
        pblntf_detail_ty: (dto as any).pblntf_detail_ty,
        pblntf_ty: (dto as any).pblntf_ty,
      },
    });

    return JSON.parse(result.data);
  }
}

// const a = {
//   corp_code: "00116426",
//   corp_name: "IREM",
//   stock_code: "009730",
//   corp_cls: "K",
//   report_nm: "[Corrected description]Annual Report (2020.12)",
//   rcept_no: "20250124000843",
//   flr_nm: "이렘",
//   rcept_dt: "20250124",
//   rm: "CC",
// };

// const b = {
//   corp_code: "00134176",
//   corp_name: "SEWOO GLOBAL",
//   stock_code: "013000",
//   corp_cls: "Y",
//   report_nm:
//     "[Added attachment]Decision on Cash Dividends and Dividends in Kind              ",
//   rcept_no: "20250207800408",
//   flr_nm: "세우글로벌",
//   rcept_dt: "20250207",
//   rm: "SC",
// };
