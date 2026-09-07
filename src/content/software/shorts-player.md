---
name: Shorts Player
slug: shorts-player
description:
  ko: 세로형 짧은 영상과 일반 영상 파일을 간결하게 재생하고 관리하기 위한 Windows 데스크톱 플레이어입니다.
  en: A Windows desktop player for focused playback and management of short vertical and standard video files.
version: 1.0.0
releaseDate: 2026-09-07
operatingSystems: [Windows 10, Windows 11]
icon: /images/software/shorts-player/icon.svg
screenshots: []
features:
  ko:
    - 재생 목록 저장·불러오기 및 순차·한 곡 반복·셔플 재생
    - A-B 반복, 영구 북마크와 자막을 지원하는 학습 모드
    - 구간 및 프레임 선택을 통한 영상 클립·GIF 내보내기
    - Minimal Mode, 전체 화면 및 항상 위 표시
    - Light·Dark·Sky·Green 테마와 키보드 단축키
    - 마지막 재생 목록 자동 복원
  en:
    - Playlist persistence with sequential, repeat-one, and shuffle playback
    - Study Mode with A-B repeat, persistent bookmarks, and subtitles
    - Trim and frame selection with video clip and GIF export
    - Minimal Mode, fullscreen, and Always on Top
    - Light, Dark, Sky, and Green themes with keyboard shortcuts
    - Automatic restoration of the last playlist
requirements:
  ko: 64비트 Windows 10 또는 Windows 11. 클립 및 GIF 내보내기에는 FFmpeg가 필요합니다.
  en: 64-bit Windows 10 or Windows 11. FFmpeg is required for clip and GIF export.
installation:
  ko: ZIP 파일을 내려받아 압축을 푼 뒤 ShortsPlayer.exe를 실행합니다. 실행 전 SHA-256과 디지털 서명을 확인할 수 있습니다.
  en: Download and extract the ZIP, then run ShortsPlayer.exe. You can verify the SHA-256 value and digital signature before running it.
downloadUrl: https://github.com/ldwg1128/Shorts-Player/releases/download/v1.0.0/ShortsPlayer-v1.0.0-Windows-x64.zip
repositoryUrl: https://github.com/ldwg1128/Shorts-Player
releasesUrl: https://github.com/ldwg1128/Shorts-Player/releases/tag/v1.0.0
assetFilename: ShortsPlayer-v1.0.0-Windows-x64.zip
assetSize: 50082980
distribution: GitHub Releases
sha256: 58CFAEEDC745BEC9684EF985A85B458C9D67B388E623DC716F10402DA4C75525
publisher: DrLeeWorks
certificateSubject: CN=DrLeeWorks
certificateThumbprint: 85A39CE31AAE9D574095536D716F999DEA37F34F
signature:
  ko: ShortsPlayer.exe는 DrLeeWorks 자체 서명 코드 서명 인증서로 서명되었습니다.
  en: ShortsPlayer.exe is signed with the self-signed DrLeeWorks code-signing certificate.
changelog:
  ko: 첫 안정 릴리스입니다. 재생 목록, 학습 모드, 북마크, 구간 선택과 클립·GIF 내보내기를 포함합니다.
  en: First stable release with playlists, Study Mode, bookmarks, trimming, and clip/GIF export.
knownIssues:
  ko: 고해상도 AV1 소프트웨어 디코딩은 CPU 사용량이 높을 수 있으며 스트림 복사 클립은 프레임 단위로 정확하지 않을 수 있습니다.
  en: High-resolution AV1 software decoding may use more CPU, and stream-copy clips may not be frame-exact.
bugReportUrl: https://github.com/ldwg1128/Shorts-Player/issues
---

Shorts Player v1.0.0은 공식 GitHub Release를 통해 ZIP 형식으로 배포됩니다.
