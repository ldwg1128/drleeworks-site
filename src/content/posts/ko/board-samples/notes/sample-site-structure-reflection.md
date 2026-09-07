---
title: 사이트 구조를 수정하면서 느낀 점
slug: reflections-on-site-structure
translationKey: reflections-on-site-structure
lang: ko
published: 2026-08-30
category: 기록
tags: [개발기록, 일상]
author: DrLeeWorks
summary: 콘텐츠가 늘어날 때를 가정해 사이트 navigation과 게시판 구조를 조정한 과정에서 얻은 메모입니다.
sample: true
draft: false
---

메뉴가 많다고 콘텐츠를 찾기 쉬운 것은 아니었습니다. 상단은 단순하게 유지하고 실제 탐색은 본문과 가까운 sidebar가 맡는 편이 자연스러웠습니다.

## 구조는 콘텐츠를 따라간다

빈 카테고리를 먼저 많이 만드는 것보다 실제 글이 생기는 영역을 중심으로 게시판과 태그를 구성하는 편이 관리하기 쉬웠습니다.

## 반복을 줄이는 기준

같은 목록과 필터를 공통 컴포넌트로 만들면 디자인 수정과 접근성 개선을 한곳에서 적용할 수 있습니다.

- 실제 탐색 흐름으로 메뉴를 점검합니다.
- 빈 영역은 과감히 줄입니다.
- 공통 UI는 데이터만 바꾸어 재사용합니다.

> 이 글은 게시판과 태그 필터 검증을 위한 테스트 콘텐츠입니다.
