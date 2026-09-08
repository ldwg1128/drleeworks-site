---
name: Shorts Player
slug: shorts-player
lang: en
translationKey: shorts-player
description: A Windows desktop player designed to minimize clicks for the features you use most.
version: 1.0.0
releaseDate: 2026-09-07
operatingSystems: [Windows 10, Windows 11]
icon: /images/software/shorts-player/icon.svg
screenshots: []
features:
  - Playlist persistence with sequential, repeat-one, and shuffle playback
  - Study Mode with A-B repeat, persistent bookmarks, and subtitles
  - Trim and frame selection with video clip and GIF export
  - Minimal Mode, fullscreen, and Always on Top
  - Light, Dark, Sky, and Green themes with keyboard shortcuts
  - Automatic restoration of the last playlist
requirements: 64-bit Windows 10 or Windows 11. FFmpeg is required for clip and GIF export.
installation: Download and extract the ZIP, then run ShortsPlayer.exe. You can verify the SHA-256 value and digital signature before running it.
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
signature: ShortsPlayer.exe is signed with the self-signed DrLeeWorks code-signing certificate.
changelog: First stable release with playlists, Study Mode, bookmarks, trimming, and clip/GIF export.
knownIssues: High-resolution AV1 software decoding may use more CPU, and stream-copy clips may not be frame-exact.
bugReportUrl: https://github.com/ldwg1128/Shorts-Player/issues
---
A simple video player built on the open-source FFmpeg and VLC frameworks.

Shorts Player v1.0.0 is distributed as a ZIP archive through the official DrLeeWorks GitHub Releases repository.

## Usage Examples

### 1) Responsive Interface

The player interface automatically adjusts to the window size.

![Shorts Player responsive interface](../../ko/shorts-player/responsive-ui.gif)

### 2) Save Playlists

Save playlists and load them again whenever you need them.

![Shorts Player playlist](../../ko/shorts-player/playlist.gif)

### 3) Multiple Repeat Sections and Bookmarks

Save multiple A-B repeat sections and bookmarks to support video-based learning.

![Shorts Player repeat sections and bookmarks](../../ko/shorts-player/study-mode.gif)

### 4) Trim Videos

Select a section or specific frames to export as a video clip. You can also save the selection as a GIF.

![Shorts Player video trimming](../../ko/shorts-player/trim.gif)

### 5) Four Themes

Choose from four themes: Light, Dark, Sky, and Green.

![Shorts Player themes](../../ko/shorts-player/themes.gif)

### 6) Other Features

- Always on Top keeps the player above other windows (T).
- Minimal Mode displays only the video (M).
- Multiple subtitle tracks are detected, allowing you to cycle through the available languages with a click.
- Key shortcuts for each mode appear in small text to the right of the volume control.
