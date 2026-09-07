---
title: Obsidian을 이용한 MD문서 편집하기
slug: obsidian-figure-video
translationKey: obsidian-figure-video
lang: ko
published: 2026-09-07
category: 컴퓨팅
tags:
  - Astro
  - 유지보수
author: DrLeeWorks
summary: MD 문서 편집에 Obsidian을 사용하면서 그림과 유튜브 동영상을 첨부하는 방법 정리.
recommended: true
draft: false
---

현재 대부분의 소프트웨어와 웹사이트를 VS Code + Codex 조합으로 구현하고 있지만, MD 문서를 VS Code로 작성하는건 꽤 불편하고 실수로 다른 코드를 건드릴 수도 있어 독립적인 프로그램을 사용하는 것도 좋은 아이디어이다.

Obsidian은 MD 프로그램의 편집에 널리 사용되는 무료 소프트웨어이다.
https://obsidian.md/download

## MD 문서 편집 시작하기

처음 Obsidian을 설치하면 일반적인 워드프로세서와 사용법이 달라 당황하기 쉽다. 문서를 더블클릭해도 그 문서가 열리지 않는다. 좌측 하단에서 본인이 편집하고자 하는 MD 파일들이 모여있는 폴더를 열어야 한다. 이는 VS Code가 특정 폴더를 연 후 작업을 하는 것과 비슷하다.

대략적인 사용 흐름은 아래와 같다.

Obsidian 실행 → `content` Vault 열기 → 왼쪽에서 `.md` 선택 → 글 작성 → 끝

여기서 Vault(볼트)는 Obsidian이 관리하는 하나의 최상위 폴더를 의미한다. 최상위 폴더를 연 후에는 직관적으로 원하는 문서를 선택하고 작성할 수 있다. 작성된 글은 Ctrl + S (VS Code와 동일)를 눌러 저장할수도 있지만 기본적으로 자동 저장이기 때문에 별도로 저장 버튼을 누를 필요가 없다.

## 그림 삽입하기

처음

1. 공통 인터페이스 문구는 하나의 locale 모듈에서 관리합니다.
2. 릴리스 정보는 구조화된 콘텐츠로 저장합니다.
3. 이미지에는 안정적이고 예측 가능한 경로를 부여합니다.
4. 실제 작업 흐름에 필요한 시점에만 서버 기능을 추가합니다.

게시물에는 코드도 포함할 수 있습니다.

```ts
const releaseChannel = 'github-releases';
```


## 상대경로 이미지 확인

아래 테스트 이미지는 이 문서와 같은 폴더의 `sample.png`를 참조합니다.

![상대경로 이미지 테스트: 파랑, 초록, 노랑](./sample.png)
