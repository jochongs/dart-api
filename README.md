# Dart-API for NodeJS

TypeScript/Node.js wrapper for the [DART (Data Analysis, Retrieval and Transfer System)](https://engopendart.fss.or.kr/) Open API, provided by the Financial Supervisory Service of Korea.

This library wraps the raw `DART API` into modular, developer-friendly classes, making it easy to integrate `DART` data into Node.js applications.

## 🚀 Features

- 🔧 Structured and typed API methods for all major DART report types
- 🧩 Modular architecture (`DisclosureInfo`, `MajorIssuesInfo`, etc.)
- 🇰🇷 Multi-language support (EN/KR documentation)
- 📦 Simple integration with any Node.js/TypeScript backend

## 🛠 Usage

```ts
import { DartDisclosureInfo } from "dart-api";

const dart = new DartDisclosureInfo({ key: "YOUR_API_KEY" });

const results = await dart.searchDisclosures({
  corp_code: "00126380",
  bgn_de: "20240101",
  end_de: "20241231",
});

console.log(results.list);
```

> Each module (e.g., `DartMajorIssuesInfo`, `DartSecuritiesRegistrationInfo`) exposes functions tailored to its report type.

## 📚 Documentation

- [English Docs](./docs/en/index.md)
- [Korean Docs](./docs/ko/index.md)
