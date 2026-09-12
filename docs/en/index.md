# dart-api

A TypeScript/Node.js wrapper library for the DART (Data Analysis, Retrieval and Transfer System) Open API provided by the Korean Financial Supervisory Service (FSS).

## Installation

```bash
npm install dart-api
```

## Getting Started

All module classes accept a `DartOptions` object at instantiation:

```typescript
interface DartOptions {
  key: string;         // Your DART Open API key
  language?: "EN" | "KR";  // Response language (default: "KR")
}
```

Obtain a free API key by registering at [https://opendart.fss.or.kr](https://opendart.fss.or.kr).

### Basic Usage

```typescript
import { DartDisclosureInfo } from "dart-api";

const dart = new DartDisclosureInfo({
  key: "YOUR_API_KEY",
  language: "EN",
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

## Modules

| Module Class | Category | Description | Link |
|---|---|---|---|
| DartDisclosureInfo | DS001 | Disclosure Information | [disclosure-info.md](disclosure-info.md) |
| DartPeriodicKeyInfo | DS002 | Periodic Reports Key Info | [periodic-key-info.md](periodic-key-info.md) |
| DartPeriodicFinancialInfo | DS003 | Periodic Reports Financial Info | [periodic-financial-info.md](periodic-financial-info.md) |
| DartEquityDisclosureInfo | DS004 | Equity Disclosure Info | [equity-disclosure-info.md](equity-disclosure-info.md) |
| DartMajorIssuesInfo | DS005 | Major Issues Reports | [major-issues-info.md](major-issues-info.md) |
| DartSecuritiesRegistrationInfo | DS006 | Securities Registration Info | [securities-registration-info.md](securities-registration-info.md) |

## Common Types

### DartMarketType

Represents the stock market classification of a listed company.

| Value | Market |
|---|---|
| `"Y"` | KOSPI (Korea Composite Stock Price Index) |
| `"K"` | KOSDAQ |
| `"N"` | KONEX |
| `"E"` | Other (unlisted or foreign) |

### ReportCodeType

Identifies the type of periodic report.

| Value | Report Type |
|---|---|
| `11011` | Annual report (사업보고서) |
| `11012` | Semi-annual report, H1 (반기보고서) |
| `11013` | Q1 quarterly report (1분기보고서) |
| `11014` | Q3 quarterly report (3분기보고서) |

### DartStatus

Every API response includes a `status` field indicating whether the request succeeded.

| Value | Meaning |
|---|---|
| `"000"` | Success |
| Other | Error — check the accompanying `message` field for details |

```typescript
const result = await dart.someMethod(params);

if (result.status !== "000") {
  console.error(`DART API error: ${result.message}`);
}
```
