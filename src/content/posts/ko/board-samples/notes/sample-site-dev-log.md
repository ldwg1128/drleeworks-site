---
title: DrLeeWorks 사이트 개발 기록
slug: drleeworks-site-development-log
lang: ko
published: 2026-09-01
category: 기록
tags: [개발기록]
author: DrLeeWorks
summary: DrLeeWorks 사이트의 콘텐츠 중심 구조와 한영 route를 정리한 짧은 개발 기록입니다.
sample: true
draft: false
---

사이트의 첫 구조는 정적 배포와 반복적인 글 작성을 우선순위로 두고 Astro와 Markdown content collection으로 구성했습니다.

## 이번에 정리한 부분

상단 navigation은 최소화하고 주요 섹션을 sidebar에 모았습니다. 게시판은 같은 카드와 태그 필터를 공유하도록 단순화했습니다.

## 다음 작업

실제 소프트웨어 정보와 대표 이미지를 교체한 뒤 배포 도메인과 분석 도구를 순차적으로 연결할 예정입니다.

- 콘텐츠 작성 흐름을 먼저 검증합니다.
- 한영 route의 깨진 링크를 확인합니다.
- 작은 변경마다 production build를 실행합니다.

> 이 글은 게시판과 태그 필터 검증을 위한 테스트 콘텐츠입니다.
