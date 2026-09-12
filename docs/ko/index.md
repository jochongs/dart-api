# dart-api

금융감독원 전자공시시스템(DART) Open API를 위한 TypeScript/Node.js 래퍼 라이브러리입니다.

## 설치

```bash
npm install dart-api
```

## 시작하기

모든 모듈 클래스는 인스턴스 생성 시 `DartOptions` 객체를 인수로 받습니다.

```typescript
interface DartOptions {
  key: string;              // DART Open API 인증키
  language?: "EN" | "KR";  // 응답 언어 설정 (기본값: "KR")
}
```

API 인증키는 [https://opendart.fss.or.kr](https://opendart.fss.or.kr)에서 무료로 발급받을 수 있습니다.

### 기본 사용 예시

```typescript
import { DartDisclosureInfo } from "dart-api";

const dart = new DartDisclosureInfo({
  key: "YOUR_API_KEY",
  language: "KR",
});

const result = await dart.searchDisclosures({
  corp_code: "00126380",
  bgn_de: "20240101",
  end_de: "20241231",
});

if (result.status === "000") {
  console.log(result.list);
}
```

## 모듈 목록

| 모듈 클래스 | 카테고리 | 설명 | 링크 |
|---|---|---|---|
| DartDisclosureInfo | DS001 | 공시정보 | [disclosure-info.md](disclosure-info.md) |
| DartPeriodicKeyInfo | DS002 | 정기보고서 주요정보 | [periodic-key-info.md](periodic-key-info.md) |
| DartPeriodicFinancialInfo | DS003 | 정기보고서 재무정보 | [periodic-financial-info.md](periodic-financial-info.md) |
| DartEquityDisclosureInfo | DS004 | 지분공시 종합정보 | [equity-disclosure-info.md](equity-disclosure-info.md) |
| DartMajorIssuesInfo | DS005 | 주요사항보고서 주요정보 | [major-issues-info.md](major-issues-info.md) |
| DartSecuritiesRegistrationInfo | DS006 | 증권신고서 주요정보 | [securities-registration-info.md](securities-registration-info.md) |

## 공통 타입

### DartMarketType

상장 법인의 시장 구분을 나타냅니다.

| 값 | 시장 |
|---|---|
| `"Y"` | 유가증권시장 (KOSPI) |
| `"K"` | 코스닥시장 (KOSDAQ) |
| `"N"` | 코넥스시장 (KONEX) |
| `"E"` | 기타 (비상장 또는 해외) |

### ReportCodeType

정기보고서의 종류를 나타냅니다.

| 값 | 보고서 종류 |
|---|---|
| `11011` | 사업보고서 (Annual) |
| `11012` | 반기보고서 (Semi-annual) |
| `11013` | 1분기보고서 (Q1) |
| `11014` | 3분기보고서 (Q3) |

### DartStatus

모든 API 응답에는 요청 성공 여부를 나타내는 `status` 필드가 포함됩니다.

| 값 | 의미 |
|---|---|
| `"000"` | 정상 처리 |
| 기타 | 오류 — `message` 필드에서 상세 내용 확인 |

```typescript
const result = await dart.someMethod(params);

if (result.status !== "000") {
  console.error(`DART API 오류: ${result.message}`);
}
```
