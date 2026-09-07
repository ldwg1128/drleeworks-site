---
title: 오래 유지할 수 있는 정적 사이트 기반 만들기
slug: durable-static-site-foundation
translationKey: durable-static-site-foundation
lang: ko
published: 2026-09-07
category: 컴퓨팅
tags:
  - Astro
  - 아키텍처
  - 유지보수
author: DrLeeWorks
summary: 초기 백엔드 없이도 확장할 수 있는 콘텐츠 중심 기술 사이트 구조를 설명합니다.
recommended: false
draft: false
---

오래 유지할 기술 사이트는 콘텐츠, 표현 방식과 배포 책임을 분리해야 합니다. Markdown은 이식성을 유지하고, 구조화된 메타데이터는 반복되는 화면을 구성하며, 정적 출력은 호스팅을 단순하게 만듭니다.

## 설계 원칙

1. 공통 인터페이스 문구는 하나의 locale 모듈에서 관리합니다.
2. 릴리스 정보는 구조화된 콘텐츠로 저장합니다.
3. 이미지에는 안정적이고 예측 가능한 경로를 부여합니다.
4. 실제 작업 흐름에 필요한 시점에만 서버 기능을 추가합니다.

게시물에는 코드도 포함할 수 있습니다.

```ts
const releaseChannel = 'github-releases';
```
