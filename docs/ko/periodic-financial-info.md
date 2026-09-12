# DS003 - DartPeriodicFinancialInfo

정기보고서의 재무정보를 제공합니다. 주요 계정과목 요약부터 XBRL 기반의 전체 재무제표 데이터까지 조회할 수 있습니다.

**OpenDart 그룹:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS003](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS003)

```typescript
import { DartPeriodicFinancialInfo } from "dart-api";

const dart = new DartPeriodicFinancialInfo({ key: "YOUR_API_KEY" });
```

---

## 공통 타입

### ReportCodeType (보고서 코드)

| 값 | 보고서 종류 |
|---|---|
| `11011` | 사업보고서 |
| `11012` | 반기보고서 |
| `11013` | 1분기보고서 |
| `11014` | 3분기보고서 |

### fs_div — 재무제표 구분

| 값 | 설명 |
|---|---|
| `"OFS"` | 별도 재무제표 |
| `"CFS"` | 연결 재무제표 |

### 공통 응답 구조

```typescript
interface BasicPeriodicFinancialInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
```

---

## 메서드

### `getSingleCompanyAccountInfo(params)` — 단일회사 주요계정

단일 법인의 정기보고서 내 주요 계정과목(재무상태표, 손익계산서 등)을 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019016](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019016)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |
| bsns_year | string | 필수 | 사업연도 4자리 |
| reprt_code | ReportCodeType | 필수 | 보고서 코드 |

**반환값:** `BasicPeriodicFinancialInfoResponse<SingleCompanyAccountInfo>`

**SingleCompanyAccountInfo 필드:**

| 필드 | 설명 |
|---|---|
| rcept_no | 접수번호 |
| reprt_code | 보고서 코드 |
| bsns_year | 사업연도 |
| corp_code | 고유번호 |
| sj_div | 재무제표 구분 (BS, IS 등) |
| sj_nm | 재무제표명 |
| account_id | 계정 XBRL ID |
| account_nm | 계정명 |
| account_detail | 계정 상세 |
| thstrm_nm | 당기 기간명 |
| thstrm_amount | 당기 금액 |
| frmtrm_nm | 전기 기간명 |
| frmtrm_amount | 전기 금액 |
| bfefrmtrm_nm | 전전기 기간명 |
| bfefrmtrm_amount | 전전기 금액 |
| ord | 표시 순서 |
| currency | 통화 코드 |

---

### `getMultipleCompanyAccountInfo(params)` — 다중회사 주요계정

여러 법인의 주요 계정과목을 한 번에 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019017](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019017)

**파라미터:** `getSingleCompanyAccountInfo`와 동일. `corp_code` 필드에 쉼표로 구분된 여러 고유번호를 입력할 수 있습니다 (예: `"00126380,00164779"`).

**반환값:** `BasicPeriodicFinancialInfoResponse<MultipleCompanyAccountInfo>`

---

### `getOriginalFinancialStateFile(params)` — 재무제표 원본 XBRL 파일

재무제표의 XBRL 원본 파일을 다운로드합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019019](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019019)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |
| bsns_year | string | 필수 | 사업연도 4자리 |
| reprt_code | ReportCodeType | 필수 | 보고서 코드 |
| rcept_no | string | 필수 | 접수번호 (14자리) |
| fs_div | `"OFS"` \| `"CFS"` | 필수 | 재무제표 구분 |
| sj_div | string | 필수 | 재무제표 종류 (예: `"BS"`, `"IS"`) |

**반환값:** `Promise<ArrayBuffer>` — XBRL 원본 파일

---

### `getFullFinancialStatements(params)` — 전체 재무제표

재무제표의 모든 계정과목을 상세하게 조회합니다 (주요 계정만이 아닌 전체).

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019020](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019020)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |
| bsns_year | string | 필수 | 사업연도 4자리 |
| reprt_code | ReportCodeType | 필수 | 보고서 코드 |
| fs_div | `"OFS"` \| `"CFS"` | 필수 | 재무제표 구분 |
| sj_div | string | 필수 | 재무제표 종류 |

**반환값:** `BasicPeriodicFinancialInfoResponse<FullFinancialStatements>`

`FullFinancialStatements` 모델은 `SingleCompanyAccountInfo`의 모든 필드에 더해 XBRL 계층 구조를 위한 추가 필드를 포함합니다.

---

### `getXbrlTaxonomyFormat(params)` — XBRL 택소노미 재무제표 양식

법인의 재무보고서에 사용된 XBRL 택소노미 형식을 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=AE00037](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=AE00037)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |
| bsns_year | string | 필수 | 사업연도 4자리 |
| reprt_code | ReportCodeType | 필수 | 보고서 코드 |

**반환값:** `BasicPeriodicFinancialInfoResponse<XbrlTaxonomyFormat>`

---

### `getFinancialIndicatorsOfCompany(params)` — 단일회사 주요 재무지표

단일 법인의 주요 재무지표(비율, 수치)를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2022001](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2022001)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |
| bsns_year | string | 필수 | 사업연도 4자리 |
| reprt_code | ReportCodeType | 필수 | 보고서 코드 |

**반환값:** `BasicPeriodicFinancialInfoResponse<IndicatorCategoryCode>`

---

### `getFinancialIndicesOfCompanies(params)` — 다중회사 주요 재무지표

여러 법인의 주요 재무지표를 한 번에 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2022002](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2022002)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 쉼표로 구분된 고유번호 |
| bsns_year | string | 필수 | 사업연도 4자리 |
| reprt_code | ReportCodeType | 필수 | 보고서 코드 |

**반환값:** `BasicPeriodicFinancialInfoResponse<FinancialIndicesOfCompanies>`

---

## 사용 예시

```typescript
// 삼성전자 2023년 사업보고서 주요 계정과목 조회
const result = await dart.getSingleCompanyAccountInfo({
  corp_code: "00126380",
  bsns_year: "2023",
  reprt_code: 11011,
});

if (result.status === "000") {
  result.list.forEach((account) => {
    console.log(account.account_nm, account.thstrm_amount);
  });
}

// 여러 법인 비교
const multi = await dart.getMultipleCompanyAccountInfo({
  corp_code: "00126380,00164779",
  bsns_year: "2023",
  reprt_code: 11011,
});
```
