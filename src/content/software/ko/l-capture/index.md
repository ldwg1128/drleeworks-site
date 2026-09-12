---
name: LCapture
slug: l-capture
lang: ko
translationKey: l-capture
description: 이미지·비디오 캡처와 다양한 입력 효과를 하나의 컴팩트한 인터페이스에서 제공하는 Windows 캡처 도구입니다.
version: 1.0.0
releaseDate: 2026-09-12
operatingSystems:
  - Windows 10
  - Windows 11
icon: /images/software/l-capture/icon.svg
screenshots: []
features:
  - 영역 선택을 지원하는 이미지 캡처
  - 화면 영역을 지정할 수 있는 비디오 캡처
  - 캡처 영역을 정밀하게 지정하기 위한 돋보기
  - 커서 효과와 클릭 시각 효과
  - 마우스 클릭 및 키보드 입력 사운드
  - 화면에 키보드 입력을 표시하는 Keyboard Overlay
  - 캡처 후 미리보기 및 자동 저장
  - 컴팩트한 플로팅 인터페이스
requirements: 64비트 Windows 10 또는 Windows 11.
installation: ZIP 파일을 내려받아 압축을 푼 뒤 LCapture.exe를 실행합니다. 실행 전 SHA-256과 디지털 서명을 확인할 수 있습니다.
downloadUrl: https://github.com/ldwg1128/DrLeeWorks-Releases/releases/download/l-capture-v1.0.0/L-Capture-v1.0.0-Windows-x64.zip
showRepository: false
showBugReport: false
repositoryUrl: https://github.com/ldwg1128/LCapture
releasesUrl: https://github.com/ldwg1128/DrLeeWorks-Releases/releases/tag/l-capture-v1.0.0
assetFilename: L-Capture-v1.0.0-Windows-x64.zip
assetSize: 50082980
distribution: GitHub Releases
sha256: 0598344EE1E5AF03F4E42767EFA447C9B25C15A1167FD3425912B22CFACFD883
publisher: DrLeeWorks
certificateSubject: CN=DrLeeWorks
certificateThumbprint: 85A39CE31AAE9D574095536D716F999DEA37F34F
signature: LCapture.exe는 DrLeeWorks 자체 서명 코드 서명 인증서로 서명되었습니다.
changelog: 첫 안정 릴리스입니다. 이미지 및 비디오 캡처와 커서·마우스·키보드 입력 효과를 포함합니다.
knownIssues: 알려진 문제 없음
bugReportUrl: https://github.com/ldwg1128/LCapture/issues
---

이미지와 비디오 캡처에 다양한 입력 효과를 함께 사용할 수 있도록 만든 심플한 Windows 캡처 도구입니다.

LCapture v1.0.0은 DrLeeWorks 공식 GitHub Releases를 통해 ZIP 형식으로 배포됩니다.

## 사용 예

### 1) 이미지 캡처

화면에서 원하는 영역을 직접 지정하여 이미지로 캡처할 수 있습니다.

영역 선택 과정에서는 돋보기를 이용하여 경계를 보다 정확하게 지정할 수 있으며, 캡처 후 이미지를 미리 확인하거나 자동으로 저장하도록 설정할 수 있습니다.

<!-- ![LCapture 이미지 캡처](./image-capture.gif) -->


### 2) 비디오 캡처

화면의 원하는 영역을 지정하여 비디오로 녹화할 수 있습니다.

이미지 캡처와 마찬가지로 영역 선택 기능을 제공하며, 필요한 경우 돋보기를 이용하여 녹화 영역을 보다 정확하게 지정할 수 있습니다.

<!-- ![LCapture 비디오 캡처](./video-capture.gif) -->


### 3) Cursor Effects

캡처 또는 녹화 과정에서 마우스 커서의 위치와 클릭 동작을 보다 쉽게 확인할 수 있도록 다양한 시각 효과를 적용할 수 있습니다.

커서 주변을 강조하거나 클릭 위치를 시각적으로 표시하여 프로그램 사용법이나 작업 과정을 설명하는 영상 제작에 활용할 수 있습니다.

<!-- ![LCapture Cursor Effects](./cursor-effects.gif) -->


### 4) Sound Effects

마우스 입력에 효과음을 적용할 수 있습니다.

설정에서 사용할 효과와 음량을 지정하고 실제 입력 효과에 적용할 수 있습니다.

<!-- ![LCapture Sound Effects](./sound-effects.gif) -->


### 5) Keyboard Overlay

키보드 입력 내용을 화면에 표시할 수 있습니다.

표시할 모니터와 화면 위치를 선택할 수 있으며, 위치를 추가로 조절하여 녹화 화면에 맞게 배치할 수 있습니다.

<!-- ![LCapture Keyboard Overlay](./keyboard-overlay.gif) -->


### 6) Keyboard Sound

키보드 입력에 효과음을 적용할 수 있습니다.

Cursor Effects, Sound Effects, Keyboard Overlay, Keyboard Sound는 각각 독립적으로 설정할 수 있어 필요한 입력 효과만 선택하여 사용할 수 있습니다.

<!-- ![LCapture Keyboard Sound](./keyboard-sound.gif) -->


### 7) 컴팩트한 플로팅 인터페이스

LCapture는 화면을 많이 차지하지 않는 작은 플로팅 툴바 형태로 사용할 수 있습니다.

Image, Video, Cursor Effects, Settings 등 주요 기능에 바로 접근할 수 있으며, 세부 옵션은 필요할 때만 펼쳐서 확인할 수 있습니다.

<!-- ![LCapture 인터페이스](./interface.gif) -->


### 8) 그 외

- 캡처 후 이미지 미리보기
- 캡처 이미지 자동 저장
- 캡처 시 프로그램 자동 숨김
- 이미지 및 비디오 영역 선택
- 영역 선택 시 돋보기 지원
- Cursor Effects 개별 활성화
- Mouse Sound Effects 개별 활성화
- Keyboard Overlay 개별 활성화
- Keyboard Sound 개별 활성화
- 입력 효과별 세부 설정
- 시스템 트레이 지원
- 컴팩트한 플로팅 UI