# DS001 - DartDisclosureInfo

공시 검색 및 기업 개황 정보를 제공합니다.

**OpenDart 그룹:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS001](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS001)

```typescript
import { DartDisclosureInfo } from "dart-api";

const dart = new DartDisclosureInfo({ key: "YOUR_API_KEY" });
```

---

## 메서드

### `searchDisclosures(params)` — 공시검색

조건에 맞는 공시 목록을 검색합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 선택 | 고유번호 (8자리) |
| bgn_de | string (YYYYMMDD) | 선택 | 검색 시작일 |
| end_de | string (YYYYMMDD) | 선택 | 검색 종료일 |
| last_reprt_at | `"Y"` \| `"N"` | 선택 | 최종보고서 여부 |
| pblntf_ty | PublicNotificationType | 선택 | 공시유형 (A~J) |
| corp_cls | `"Y"` \| `"K"` \| `"N"` \| `"E"` | 선택 | 법인구분 |
| page_no | number | 선택 | 페이지 번호 (기본값: 1) |
| page_count | number (1~100) | 선택 | 페이지당 건수 (기본값: 10) |
| sort | `"date"` \| `"crp"` \| `"rpt"` | 선택 | 정렬 기준 |
| sort_mth | `"desc"` \| `"asc"` | 선택 | 정렬 방향 |

**반환값:** `SearchDisclosuresResponse<Disclosure>`

```typescript
interface SearchDisclosuresResponse<T> {
  status: DartStatus;
  message: string;
  page_no: number;
  page_count: number;
  total_count: number;
  total_page: number;
  list: T[];
}

interface Disclosure {
  corp_cls: string;    // 법인구분
  corp_name: string;   // 법인명
  corp_code: string;   // 고유번호 (8자리)
  stock_code: string;  // 종목코드
  report_nm: string;   // 보고서명
  rcept_no: string;    // 접수번호 (14자리)
  flr_nm: string;      // 공시 제출인명
  rcept_dt: string;    // 접수일자 (YYYYMMDD)
  rm: string;          // 비고
}
```

**사용 예시:**

```typescript
const result = await dart.searchDisclosures({
  corp_code: "00126380",
  bgn_de: "20240101",
  end_de: "20241231",
  page_count: 20,
  sort: "date",
  sort_mth: "desc",
});

console.log(`전체 공시 수: ${result.total_count}`);
result.list.forEach((d) => console.log(d.report_nm, d.rcept_dt));
```

---

### `getOverviewOfCorporate(corp_code)` — 기업개황

고유번호로 기업의 기본 개황 정보를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019002](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019002)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |

**반환값:** `GetOverviewOfCorporateResponse<CorporateStatusOverview>`

```typescript
interface CorporateStatusOverview {
  corp_name: string;      // 법인명 (한국어)
  corp_name_eng: string;  // 법인명 (영문)
  stock_name: string;     // 종목명
  stock_code: string;     // 종목코드
  ceo_nm: string;         // 대표이사
  corp_cls: string;       // 법인구분
  jurir_no: string;       // 법인등록번호
  bizr_no: string;        // 사업자등록번호
  adres: string;          // 주소
  hm_url: string;         // 홈페이지 URL
  ir_url: string;         // IR 홈페이지 URL
  phn_no: string;         // 전화번호
  fax_no: string;         // 팩스번호
  induty_code: string;    // 업종코드
  est_dt: string;         // 설립일
  acc_mt: string;         // 결산월
}
```

**사용 예시:**

```typescript
const result = await dart.getOverviewOfCorporate("00126380");

if (result.status === "000") {
  const corp = result.list[0];
  console.log(corp.corp_name, corp.ceo_nm, corp.hm_url);
}
```

---

### `getOriginalDisclosureDocumentFile(rcept_no)` — 공시서류원본파일

공시서류 원본 파일을 ZIP 아카이브로 다운로드합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| rcept_no | string | 필수 | 접수번호 (14자리) |

**반환값:** `Promise<ArrayBuffer>`

반환된 `ArrayBuffer`는 공시서류 원본 파일이 담긴 ZIP 아카이브입니다.

**사용 예시:**

```typescript
import { writeFileSync } from "fs";

const buffer = await dart.getOriginalDisclosureDocumentFile("20240115000001");
writeFileSync("disclosure.zip", Buffer.from(buffer));
```

---

### `getDisclosureCorporationCode()` — 고유번호

DART에 등록된 전체 법인의 고유번호 목록을 ZIP 아카이브로 다운로드합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003)

**파라미터:** 없음

**반환값:** `Promise<ArrayBuffer>`

반환된 `ArrayBuffer`는 법인명과 고유번호 매핑 정보가 담긴 XML 파일과 텍스트 파일이 포함된 ZIP 아카이브입니다. 다른 API 호출에 사용할 `corp_code` 값을 확인하는 데 활용합니다.

**사용 예시:**

```typescript
import { writeFileSync } from "fs";

const buffer = await dart.getDisclosureCorporationCode();
writeFileSync("corp_codes.zip", Buffer.from(buffer));
```
