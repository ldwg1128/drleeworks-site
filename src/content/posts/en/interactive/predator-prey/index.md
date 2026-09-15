---
title: Predator–Prey Ecosystem Experiment
slug: predator-prey
translationKey: predator-prey
lang: en
published: 2026-09-15
category: Interactive
tags:
  - interactive
  - ecology
  - simulation
author: DrLeeWorks
summary: An experimental simulation for observing how simple survival rules, stochastic mutation, and selection pressure affect population dynamics and prey traits.
recommended: false
draft: false
---

## Predator–Prey

This is a computational experiment rather than a game. Prey reproduce while inheriting and slightly mutating their speed and size. Predators pursue nearby prey and starve when they cannot obtain food. The central Safe Zone is not a destination known to prey; it is an environmental condition that protects prey only when they happen to enter it.

The resulting population dynamics and trait changes depend on the seed and parameters. Periodic oscillation, extinction, or a particular trait trend is not forced by the code.

<!-- interactive:predator-prey -->

Average speed, width, and height are calculated from the living prey only. A change from the initial population is an observed consequence of survival and reproduction, not a separate rule that pushes traits in a chosen direction.