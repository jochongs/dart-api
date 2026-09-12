# DS004 - DartEquityDisclosureInfo

지분공시 종합정보를 제공합니다. 주요주주(5% 이상 보유)의 대량보유 보고서 및 임원·주요주주의 주식 소유 변동 보고서를 조회할 수 있습니다.

**OpenDart 그룹:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS004](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS004)

```typescript
import { DartEquityDisclosureInfo } from "dart-api";

const dart = new DartEquityDisclosureInfo({ key: "YOUR_API_KEY" });
```

---

## 공통 파라미터

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |

## 공통 응답 구조

```typescript
interface BasicEquityDisclosureInfoResponse<T> {
  status: DartStatus;
  message: string;
  list: T[];
}
```

모든 목록 항목 모델은 공통 기본 필드를 포함합니다: `rcept_no`(접수번호), `corp_cls`(법인구분), `corp_code`(고유번호), `corp_name`(법인명).

---

## 메서드

### `getMajorShareholdingReport(params)` — 주요주주 대량보유 보고서

5% 이상 주식 보유 시 의무적으로 제출하는 대량보유 상황 보고서를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=2019021](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=2019021)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |

**반환값:** `BasicEquityDisclosureInfoResponse<MajorShareholdingReport>`

자본시장법에 따라, 상장법인의 주식 등을 5% 이상 보유하게 된 자(주요주주)는 5영업일 이내에 금융감독원에 보고서를 제출해야 합니다. 이후 보유 비율이 1% 이상 변동되는 경우에도 추가 보고가 필요합니다.

**사용 예시:**

```typescript
const result = await dart.getMajorShareholdingReport({
  corp_code: "00126380",
});

if (result.status === "000") {
  result.list.forEach((report) => {
    console.log(report.rcept_no, report.corp_name);
  });
}
```

---

### `getExecutiveMajorShareholderReport(params)` — 임원·주요주주 소유보고서

임원 및 주요주주의 주식 소유 변동 보고서를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=AE00040](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS004&apiId=AE00040)

**파라미터:**

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| corp_code | string | 필수 | 고유번호 (8자리) |

**반환값:** `BasicEquityDisclosureInfoResponse<ExecutiveMajorShareholderReport>`

이사, 감사 등 임원과 10% 이상 주요주주는 주식 소유 변동 사항을 보고해야 합니다. 이 메서드는 해당 보고서 목록을 반환합니다.

**사용 예시:**

```typescript
const result = await dart.getExecutiveMajorShareholderReport({
  corp_code: "00126380",
});

if (result.status === "000") {
  result.list.forEach((report) => {
    console.log(report.rcept_no, report.corp_name);
  });
}
```
