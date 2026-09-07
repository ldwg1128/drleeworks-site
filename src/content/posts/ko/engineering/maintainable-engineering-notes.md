---
title: 유지 가능한 공학 노트를 작성하는 방법
slug: maintainable-engineering-notes
translationKey: maintainable-engineering-notes
lang: ko
published: 2026-09-07
category: 공학
tags: [문서화, 연구, 재현성]
author: DrLeeWorks
summary: 계산, 실험 조건과 판단 근거를 나중에도 재현할 수 있도록 기록하는 기본 구조를 소개합니다.
recommended: true
draft: false
---

공학 노트는 결과뿐 아니라 **결과에 도달한 과정**을 보존해야 합니다. 최소한 목적, 입력값, 가정, 사용한 도구와 결과를 함께 기록합니다.

## 권장 구조

| 항목 | 기록할 내용 |
| --- | --- |
| 목적 | 해결하려는 질문 |
| 조건 | 재료, 경계조건, 버전 |
| 방법 | 계산식 또는 실험 절차 |
| 결과 | 표, 그림, 원시 데이터 위치 |

간단한 모델의 에너지는 다음처럼 쓸 수 있습니다.

$$E = \frac{1}{2}kx^2$$

코드와 그림은 글과 별도 파일로 관리하면 이후 CDN으로 옮기기도 쉽습니다.

```python
energy = 0.5 * stiffness * displacement**2
```
