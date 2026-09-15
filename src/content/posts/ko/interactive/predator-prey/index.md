---
title: 포식자–피식자 생태계 실험
slug: predator-prey
translationKey: predator-prey
lang: ko
published: 2026-09-15
category: 인터렉티브
tags:
  - 인터랙티브
  - 생태계
  - 시뮬레이션
author: DrLeeWorks
summary: 단순한 생존 규칙, 확률적 변이와 선택압이 population dynamics와 피식자 형질에 미치는 영향을 관찰하는 실험형 시뮬레이션.
recommended: false
draft: false
---

## Predator–Prey

이 데모는 게임이 아니라 computational experiment이다. 피식자는 번식하면서 부모의 속도와 크기를 작은 범위에서 물려받고 변이하며, 포식자는 가까운 피식자를 추적하고 먹이를 얻지 못하면 굶주린다. 중앙의 Safe Zone은 피식자가 위치를 알고 찾아가는 장소가 아니라, 우연히 들어간 개체만 보호하는 환경 조건이다.

어떤 population dynamics나 형질 변화가 나타날지는 seed와 parameter에 따라 달라진다. 포식자의 주기적 진동, 한 종의 멸종, 특정 형질의 증가 같은 결과를 코드로 보장하지 않는다.

<!-- interactive:predator-prey -->

피식자의 평균 speed, width, height는 현재 살아 있는 피식자만으로 계산된다. 초기 population과 비교해 값이 변하더라도 그 방향을 유도하는 별도의 진화 규칙은 없다.