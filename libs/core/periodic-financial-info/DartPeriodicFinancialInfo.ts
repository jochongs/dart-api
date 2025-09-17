import { DartBase } from "../DartBase";
import { FullFinancialStatements } from "./types/models/FullFinancialStatements";
import { MultipleCompanyAccountInfo } from "./types/models/MultipleCompanyAccountInfo";
import { SingleCompanyAccountInfo } from "./types/models/SingleCompanyAccountInfo";
import { XbrlTaxonomyFormat } from "./types/models/XbrlTaxonomyFormat";
import { GetFullFinancialStatementsParams } from "./types/params/getFullFinancialStatementsParams";
import { GetOriginalFinancialStateFileParams } from "./types/params/GetOriginalFinancialStateFileParams";
import { GetSingleCompanyAccountInfoParams } from "./types/params/GetSingleCompanyAccountInfoParams";
import { GetXbrlTaxonomyFormatParams } from "./types/params/GetXbrlTaxonomyFormatParams";
import { BasicPeriodicFinancialInfoResponse } from "./types/responses/BasicPeriodicFinancialInfoResponse";

/**
 * ## [KO] - 정기보고서 재무정보
 *
 * @link https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS003
 *
 * ## [EN] - List of Financial Information from Periodic Reports
 *
 * @link https://engopendart.fss.or.kr/guide/main.do?apiGrpCd=DE003
 */
export class DartPeriodicFinancialInfo extends DartBase {
  /**
   * ## [KO] - 단일회사 주요계정
   * 상장법인(유가증권, 코스닥) 및 주요 비상장법인(사업보고서 제출대상 & IFRS 적용)이 제출한 정기보고서 내에
   * XBRL재무제표의 주요계정과목(재무상태표, 손익계산서)을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019016
   *
   * ## [EN] - Major accounts of a single company
   * We provide the major accounts (financial statements, income statements)
   * of the XBRL financial statements in the periodic reports submitted
   * by listed corporations (KOSPI, KOSDAQ) and major unlisted corporations
   * (required to submit annual reports and subject to IFRS).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00033
   */
  public async getSingleCompanyAccountInfo(
    params: GetSingleCompanyAccountInfoParams
  ): Promise<BasicPeriodicFinancialInfoResponse<SingleCompanyAccountInfo>> {
    return await this.get<
      BasicPeriodicFinancialInfoResponse<SingleCompanyAccountInfo>
    >("fnlttSinglAcnt.json", params);
  }

  /**
   * ## [KO] - 다중회사 주요계정
   * 상장법인(유가증권, 코스닥) 및 주요 비상장법인(사업보고서 제출대상 & IFRS 적용)이 제출한 정기보고서 내에
   * XBRL재무제표의 주요계정과목(재무상태표, 손익계산서)을 제공합니다. (대상법인 복수조회 가능)
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019017
   *
   * ## [EN] - Major accounts of multiple companies
   * We provide the major accounts (financial statements, income statements) of the XBRL financial statements in the periodic reports submitted by listed corporations
   * (KOSPI, KOSDAQ) and major unlisted corporations (required to submit annual reports and subject to IFRS). You can view multiple subject corporations.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00034
   */
  public async getMultipleCompanyAccountInfo(
    params: GetSingleCompanyAccountInfoParams
  ): Promise<BasicPeriodicFinancialInfoResponse<MultipleCompanyAccountInfo>> {
    return await this.get<
      BasicPeriodicFinancialInfoResponse<MultipleCompanyAccountInfo>
    >("fnlttMultiAcnt.json", params);
  }

  /**
   * ## [KO] - 재무제표 원본파일(XBRL)
   * 상장법인(유가증권, 코스닥) 및 주요 비상장법인(사업보고서 제출대상 & IFRS 적용)이 제출한 정기보고서 내에 XBRL재무제표의 원본파일(XBRL)을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019019
   *
   * ## [EN] - Original financial statement file (XBRL)
   * The original XBRL financial statement file (XBRL) in the periodic reports submitted by a listed corporation is provided.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00035
   */
  public async getOriginalFinancialStateFile(
    params: GetOriginalFinancialStateFileParams
  ): Promise<ArrayBuffer> {
    return await this.get<ArrayBuffer>("fnlttXbrl.xml", params);
  }

  /**
   * ## [KO] - 단일회사 전체 재무제표
   * 상장법인(유가증권, 코스닥) 및 주요 비상장법인(사업보고서 제출대상 & IFRS 적용)이 제출한 정기보고서 내에 XBRL재무제표의 모든계정과목을 제공합니다.
   *
   * @link https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019020
   *
   * ## [EN] - Single company’s full financial statements
   * We provide all the titles of account (financial statements, income statements) of the XBRL financial statements in the periodic reports submitted by listed corporations (KOSPI, KOSDAQ) and major unlisted corporations (required to submit annual reports and subject to IFRS).
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00036
   */
  public async getFullFinancialStatements(
    params: GetFullFinancialStatementsParams
  ): Promise<BasicPeriodicFinancialInfoResponse<FullFinancialStatements>> {
    return await this.get<
      BasicPeriodicFinancialInfoResponse<FullFinancialStatements>
    >("fnlttSinglAcntAll.json", params);
  }

  /**
   * ## [KO] - XBRL택사노미재무제표양식
   * 금융감독원 회계포탈에서 제공하는 IFRS 기반 XBRL 재무제표 공시용 표준계정과목체계(계정과목) 을 제공합니다.
   *
   * @link
   *
   * ## [EN] - XBRL taxonomy financial statements format
   * The standard account code system (title of account) for IFRS-based XBRL financial statement disclosure supplied by the accounting portal of the Financial Supervisory Service is provided.
   *
   * @link https://engopendart.fss.or.kr/guide/detail.do?apiGrpCd=DE003&apiId=AE00037
   */
  public async getXbrlTaxonomyFormat(
    params: GetXbrlTaxonomyFormatParams
  ): Promise<BasicPeriodicFinancialInfoResponse<XbrlTaxonomyFormat>> {
    return await this.get<
      BasicPeriodicFinancialInfoResponse<XbrlTaxonomyFormat>
    >("xbrlTaxonomy.json", params);
  }
}
