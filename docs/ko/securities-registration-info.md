# DS006 - DartSecuritiesRegistrationInfo

증권신고서의 주요 정보를 제공합니다. 지분증권, 채무증권, 증권예탁증권(DR), 합병, 주식의 포괄적 교환·이전, 분할 등 다양한 유형의 증권신고서를 조회할 수 있습니다.

**OpenDart 그룹:** [https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS006](https://opendart.fss.or.kr/guide/main.do?apiGrpCd=DS006)

```typescript
import { DartSecuritiesRegistrationInfo } from "dart-api";

const dart = new DartSecuritiesRegistrationInfo({ key: "YOUR_API_KEY" });
```

---

## 응답 구조

이 모듈은 다른 모든 모듈과 **다른 응답 구조**를 사용합니다. 단순한 `list` 배열 대신, `group` 배열을 반환하며 각 요소는 신고서의 특정 섹션을 나타냅니다.

```typescript
interface SecuritiesRegistrationResponse<T extends SecuritiesRegistrationGroup<any>[]> {
  result: {
    status: DartStatus;  // 성공 여부 ("000" = 정상)
    message: string;     // 응답 메시지
  };
  group: T;  // 섹션별 데이터 배열
}

interface SecuritiesRegistrationGroup<T> {
  title: string;  // 섹션 제목 (예: "일반사항", "증권의종류")
  list: T[];      // 해당 섹션의 데이터 배열
}
```

상태 정보는 최상위가 아닌 `result` 필드 아래에 중첩되어 있습니다.

### 기본 모델 필드

이 모듈의 모든 모델은 `SecuritiesRegistrationBase`를 확장합니다.

| 필드 | 설명 |
|---|---|
| rcept_no | 접수번호 |
| corp_cls | 법인구분 |
| corp_code | 고유번호 (8자리) |
| corp_name | 법인명 |

---

## 공통 파라미터

```typescript
interface SecuritiesRegistrationParams {
  corp_code: string;  // 고유번호 (8자리)
  bgn_de: string;     // 검색 시작일 (YYYYMMDD)
  end_de: string;     // 검색 종료일 (YYYYMMDD)
}
```

---

## 메서드

### `getEquitySecurities(params)` — 지분증권

증권신고서(지분증권)의 주요 정보를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054)

**반환값:** 6개 그룹으로 구성된 응답

#### Group 0: `EquitySecuritiesGeneralAffairs` — 일반사항

| 필드 | 설명 |
|---|---|
| sbd | 청약기간 |
| pymd | 납입일 |
| sband | 청약공고일 |
| asand | 배정공고일 |
| asstd | 배정기준일 |
| exstk | 신주인수권 행사대상증권 (기존 주주) |
| exprc | 신주인수권 행사가격 (원) |
| expd | 신주인수권 행사기간 종료일 |
| rpt_rcpn | 주요사항보고서 접수번호 (14자리) |

#### Group 1: `EquitySecuritiesType` — 증권의 종류

| 필드 | 설명 |
|---|---|
| stksen | 증권 구분 |
| stkcnt | 수량 |
| fv | 액면가액 (원) |
| slprc | 발행/매출가액 (원) |
| slta | 발행/매출총액 (원) |
| slmthn | 발행/매출방법 |

#### Group 2: `UnderwriterInfo` — 인수인 정보

| 필드 | 설명 |
|---|---|
| actsen | 인수인 구분 |
| actnmn | 인수인명 |
| stksen | 증권 구분 |
| udtcnt | 인수 수량 |
| udtamt | 인수 금액 (원) |
| udtprc | 인수 대가 |
| udtmth | 인수 방법 |

#### Group 3: `FundUsage` — 자금의 사용 목적

| 필드 | 설명 |
|---|---|
| se | 구분 |
| amt | 금액 (원) |

#### Group 4: `SalesHolder` — 매출인에 관한 사항

| 필드 | 설명 |
|---|---|
| hdr | 보유자 |
| rl_cmp | 회사와의 관계 |
| bfsl_hdstk | 매출 전 보유 주식수 |
| slstk | 매출 주식수 |
| atsl_hdstk | 매출 후 보유 주식수 |

#### Group 5: `GeneralSubscriptionRedemption` — 일반청약자 환매청구권

| 필드 | 설명 |
|---|---|
| grtrs | 환매청구 대상 증권 |
| exavivr | 환매청구 가능 여부 |
| grtcnt | 환매청구 수량 |
| expd | 환매청구 기간 |
| exprc | 환매청구 가격 (원) |

**TypeScript 사용 예시:**

```typescript
const response = await dart.getEquitySecurities({
  corp_code: "00126380",
  bgn_de: "20240101",
  end_de: "20241231",
});

if (response.result.status !== "000") {
  console.error(`오류: ${response.result.message}`);
} else {
  // 인덱스로 각 그룹에 접근 — 타입이 완전히 추론됨
  const generalAffairs = response.group[0];   // SecuritiesRegistrationGroup<EquitySecuritiesGeneralAffairs>
  const securitiesTypes = response.group[1];  // SecuritiesRegistrationGroup<EquitySecuritiesType>
  const underwriters = response.group[2];     // SecuritiesRegistrationGroup<UnderwriterInfo>
  const fundUsage = response.group[3];        // SecuritiesRegistrationGroup<FundUsage>
  const salesHolders = response.group[4];     // SecuritiesRegistrationGroup<SalesHolder>
  const redemptions = response.group[5];      // SecuritiesRegistrationGroup<GeneralSubscriptionRedemption>

  console.log("섹션 제목:", generalAffairs.title);
  generalAffairs.list.forEach((item) => {
    console.log("납입일:", item.pymd);
    console.log("청약기간:", item.sbd);
    console.log("신주인수권 행사가격:", item.exprc);
  });

  securitiesTypes.list.forEach((item) => {
    console.log("구분:", item.stksen, "수량:", item.stkcnt, "가격:", item.slprc);
  });

  fundUsage.list.forEach((item) => {
    console.log("사용 목적:", item.se, "금액:", item.amt);
  });
}
```

---

### `getDebtSecurities(params)` — 채무증권

증권신고서(채무증권)의 주요 정보를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020055](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020055)

**반환값:** 4개 그룹으로 구성된 응답

#### Group 0: `DebtSecuritiesGeneralAffairs` — 일반사항

| 필드 | 설명 |
|---|---|
| tm | 종목명 |
| bdnmn | 채무증권명 |
| slmth | 발행/매출 방법 |
| fta | 발행 총액 (원) |
| slta | 매출 총액 (원) |
| isprc | 발행/매출가격 (액면가 대비) |
| intr | 표면이자율 |
| isrr | 만기이자율 |
| rpd | 원리금지급대리인 |
| print_pymint | 발행일 이후 이자 지급 |
| mngt_cmp | 발행회사명 |
| cdrt_int | 신용등급 (신용평가기관) |
| sbd | 청약기간 |
| pymd | 납입일 |
| sband | 청약공고일 |
| asand | 배정공고일 |
| asstd | 배정기준일 |
| dpcrn | 예탁기관 (수탁회사명) |
| dpcr_amt | 예탁 금액 (원) |
| usarn | 사용 용도/목적 |
| usntn | 사용 계획 |
| wnexpl_at | 원리금 지급 경험 설명 여부 |
| udtintnm | 인수 중개인명 |
| grt_int | 보증 이자율 |
| grt_amt | 보증 총액 (원) |
| icmg_mgknd | 조기상환 구조 관리 유형 (보증인 유형) |
| icmg_mgamt | 조기상환 구조 관리 금액 (원) |
| estk_exstk | 주식 연계 여부 |
| estk_exrt | 전환/교환 비율 |
| estk_exprc | 전환/교환 가격 (원) |
| estk_expd | 전환/교환 기간 |
| rpt_rcpn | 주요사항보고서 접수번호 (14자리) |
| drcb_at | 이중상환청구권부 여부 |
| drcb_uast | 이중상환청구권부 기초자산 |
| drcb_optknd | 이중상환청구권부 옵션 종류 |
| drcb_mtd | 이중상환청구권부 방법 |

#### Group 1: `UnderwriterInfo` — 인수인 정보 (지분증권과 동일)

#### Group 2: `FundUsage` — 자금의 사용 목적 (지분증권과 동일)

#### Group 3: `SalesHolder` — 매출인에 관한 사항 (지분증권과 동일)

**사용 예시:**

```typescript
const response = await dart.getDebtSecurities({
  corp_code: "00126380",
  bgn_de: "20240101",
  end_de: "20241231",
});

if (response.result.status === "000") {
  const generalAffairs = response.group[0];
  generalAffairs.list.forEach((item) => {
    console.log("채무증권명:", item.bdnmn);
    console.log("표면이자율:", item.intr);
    console.log("발행 총액:", item.fta);
    console.log("신용등급:", item.cdrt_int);
  });
}
```

---

### `getDepositarySecurities(params)` — 증권예탁증권

증권신고서(증권예탁증권, DR)의 주요 정보를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020056](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020056)

**반환값:** 5개 그룹으로 구성된 응답

| 그룹 | 모델 | 설명 |
|---|---|---|
| 0 | `EquitySecuritiesGeneralAffairs` | 일반사항 (지분증권과 동일) |
| 1 | `EquitySecuritiesType` | 증권의 종류 (지분증권과 동일) |
| 2 | `UnderwriterInfo` | 인수인 정보 |
| 3 | `FundUsage` | 자금의 사용 목적 |
| 4 | `SalesHolder` | 매출인에 관한 사항 |

---

### `getMerger(params)` — 합병

증권신고서(합병)의 주요 정보를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057)

**반환값:** 3개 그룹으로 구성된 응답

#### Group 0: `MergerGeneralAffairs` — 일반사항

| 필드 | 설명 |
|---|---|
| stn | 구분/공시 유형 |
| bddd | 이사회 결의일 |
| ctrd | 합병 계약일 |
| gmtsck_shddstd | 주주총회 예정 기준일 |
| ap_gmtsck | 예정 주주총회 날짜 |
| aprskh_pd_bgd | 주식매수청구권 행사기간 시작일 |
| aprskh_pd_edd | 주식매수청구권 행사기간 종료일 |
| aprskh_prc | 주식매수청구권 행사가격 (원) |
| mgdt_etc | 특이사항/합병 상세 내용 |
| rt_vl | 합병비율 산정 가치 |
| exevl_int | 외부 평가기관 |
| grtmn_etc | 보증인 특이사항 |
| rpt_rcpn | 주요사항보고서 접수번호 (14자리) |

#### Group 1: `SecuritiesIssued` — 발행 증권

| 필드 | 설명 |
|---|---|
| kndn | 증권 종류 |
| cnt | 수량 |
| fv | 액면가액 (원) |
| slprc | 발행/매출가액 (원) |
| slta | 발행/매출총액 (원) |

#### Group 2: `CompanyInfo` — 당사회사에 관한 사항

| 필드 | 설명 |
|---|---|
| cmpnm | 회사명 |
| sen | 구분 (합병회사, 피합병회사 등) |
| tast | 총자산 (원) |
| cpt | 자본금 (원) |
| isstk_knd | 발행주식 종류 |
| isstk_cnt | 발행주식 수량 |

**사용 예시:**

```typescript
const response = await dart.getMerger({
  corp_code: "00126380",
  bgn_de: "20200101",
  end_de: "20241231",
});

if (response.result.status === "000") {
  const generalAffairs = response.group[0];
  const companies = response.group[2];

  generalAffairs.list.forEach((item) => {
    console.log("이사회 결의일:", item.bddd);
    console.log("주주총회 예정일:", item.ap_gmtsck);
  });

  companies.list.forEach((company) => {
    console.log(`${company.sen}: ${company.cmpnm} (총자산: ${company.tast})`);
  });
}
```

---

### `getComprehensiveStockExchangeTransfer(params)` — 주식의 포괄적 교환·이전

증권신고서(주식의 포괄적 교환·이전)의 주요 정보를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020058](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020058)

**반환값:** 합병(`getMerger`)과 동일한 모델 타입으로 구성된 3개 그룹

| 그룹 | 모델 | 설명 |
|---|---|---|
| 0 | `MergerGeneralAffairs` | 일반사항 |
| 1 | `SecuritiesIssued` | 발행 증권 |
| 2 | `CompanyInfo` | 당사회사에 관한 사항 |

---

### `getSpinOff(params)` — 분할

증권신고서(분할)의 주요 정보를 조회합니다.

**OpenDart:** [https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020059](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020059)

**반환값:** 합병(`getMerger`)과 동일한 모델 타입으로 구성된 3개 그룹

| 그룹 | 모델 | 설명 |
|---|---|---|
| 0 | `MergerGeneralAffairs` | 일반사항 |
| 1 | `SecuritiesIssued` | 발행 증권 |
| 2 | `CompanyInfo` | 당사회사에 관한 사항 |

---

## 메서드 요약

| 메서드 | 설명 | 그룹 수 | OpenDart |
|---|---|---|---|
| `getEquitySecurities` | 지분증권 증권신고서 | 6 | [2020054](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020054) |
| `getDebtSecurities` | 채무증권 증권신고서 | 4 | [2020055](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020055) |
| `getDepositarySecurities` | 증권예탁증권(DR) 증권신고서 | 5 | [2020056](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020056) |
| `getMerger` | 합병 증권신고서 | 3 | [2020057](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020057) |
| `getComprehensiveStockExchangeTransfer` | 주식의 포괄적 교환·이전 증권신고서 | 3 | [2020058](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020058) |
| `getSpinOff` | 분할 증권신고서 | 3 | [2020059](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS006&apiId=2020059) |
