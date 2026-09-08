---
name: Shorts Player
slug: shorts-player
lang: ko
translationKey: shorts-player
description: 주로 사용하는 기능 위주로 클릭 횟수를 최소화한 Windows 데스크톱 플레이어입니다.
version: 1.0.0
releaseDate: 2026-09-07
operatingSystems:
  - Windows 10
  - Windows 11
icon: /images/software/shorts-player/icon.svg
screenshots: []
features:
  - 재생 목록 저장·불러오기 및 순차·한 곡 반복·셔플 재생
  - A-B 반복, 영구 북마크와 자막을 지원하는 학습 모드
  - 구간 및 프레임 선택을 통한 영상 클립·GIF 내보내기
  - Minimal Mode, 전체 화면 및 항상 위 표시
  - Light·Dark·Sky·Green 테마와 키보드 단축키
  - 마지막 재생 목록 자동 복원
requirements: 64비트 Windows 10 또는 Windows 11. 클립 및 GIF 내보내기에는 FFmpeg가 필요합니다.
installation: ZIP 파일을 내려받아 압축을 푼 뒤 ShortsPlayer.exe를 실행합니다. 실행 전 SHA-256과 디지털 서명을 확인할 수 있습니다.
downloadUrl: https://github.com/ldwg1128/DrLeeWorks-Releases/releases/download/shorts-player-v1.0.0/ShortsPlayer-v1.0.0-Windows-x64.zip
showRepository: false
showBugReport: false
repositoryUrl: https://github.com/ldwg1128/Shorts-Player
releasesUrl: https://github.com/ldwg1128/DrLeeWorks-Releases/releases/tag/shorts-player-v1.0.0
assetFilename: ShortsPlayer-v1.0.0-Windows-x64.zip
assetSize: 50082980
distribution: GitHub Releases
sha256: 58CFAEEDC745BEC9684EF985A85B458C9D67B388E623DC716F10402DA4C75525
publisher: DrLeeWorks
certificateSubject: CN=DrLeeWorks
certificateThumbprint: 85A39CE31AAE9D574095536D716F999DEA37F34F
signature: ShortsPlayer.exe는 DrLeeWorks 자체 서명 코드 서명 인증서로 서명되었습니다.
changelog: 첫 안정 릴리스입니다. 재생 목록, 학습 모드, 북마크, 구간 선택과 클립·GIF 내보내기를 포함합니다.
knownIssues: 고해상도 AV1 소프트웨어 디코딩은 CPU 사용량이 높을 수 있으며 스트림 복사 클립은 프레임 단위로 정확하지 않을 수 있습니다.
bugReportUrl: https://github.com/ldwg1128/Shorts-Player/issues
---
오픈소스인 FFMpeg 및 VLC를 기반으로 작동하는 심플 영상 플레이어 입니다.

Shorts Player v1.0.0은 DrLeeWorks 공식 GitHub Releases를 통해 ZIP 형식으로 배포됩니다.

## 사용 예


### 1) 반응형 인터페이스

창 크기에 따라 플레이어 인터페이스가 자동으로 조정됩니다.

하단 버튼 영역 미만으로 창 크기를 줄일 경우 영상만 보이는 모드로 전환되며, M 키로 바로 진입하는것도 가능합니다.

![Shorts Player 반응형 인터페이스](./responsive-ui.gif)

### 2) 플레이리스트 저장

재생 목록을 저장하고 필요할 때 다시 불러올 수 있습니다.

![Shorts Player 플레이리스트](./playlist.gif)

### 3) 복수 구간 반복 및 북마크

여러 A-B 반복 구간과 북마크를 저장하여 영상 학습에 활용할 수 있습니다.

![Shorts Player 구간 반복 및 북마크](./study-mode.gif)

### 4) 영상 자르기

원하는 구간이나 프레임을 선택하여 영상 클립으로 내보낼 수 있습니다. GIF로 저장하는 기능도 지원합니다.

![Shorts Player 영상 자르기](./trim.gif)

### 5) 4가지 테마

Light, Dark, Sky, Green의 4가지 테마를 지원합니다.

![Shorts Player 테마](./themes.gif)

### 6) 그 외

- 항상 맨 앞에 있는 기능(T)
- 재생 화면만 보이는 미니멀 모드(M)
- 복수 자막을 감지하여 클릭 만으로 언어 순서대로 전환 가능합니다.
- 모드 별 주요 단축키를 볼륨 우측에 작은 글씨로 보여줍니다.