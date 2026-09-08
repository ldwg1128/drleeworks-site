export const languages = { ko: '한국어', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  ko: {
    home: '홈', software: '소프트웨어', engineering: '공학', about: '소개',
    openSource: '오픈소스 SW', bugReports: '버그 신고', computing: '컴퓨팅', tech: '테크', daily: '기록', notes: '기록', postsLabel: '게시물', tagsLabel: '태그', allPostsLabel: '전체 보기', activeTagLabel: '선택 태그', emptyPosts: '게시물이 아직 없습니다.', supportNav: '후원', menu: '메뉴', closeMenu: '메뉴 닫기',
    tagline: '새로운 기술을 직접 써보고, 만들고, 기록합니다',
    intro: 'AI와 새로운 기술을 직접 사용해 보고, 필요한 프로그램도 만들어 봅니다.\n공학·연구 과정에서 얻은 정보와 경험도 함께 기록합니다.',
    featuredSoftware: '주요 소프트웨어', recommendedPosts: '추천 글', updated: '수정일', recentPosts: '최근 글', latestPosts: '최근 글', contentFeed: '새로운 콘텐츠', topics: '엔지니어링 / 연구 분야', aboutSite: 'DrLeeWorks 소개',
    readMore: '자세히 보기', download: '다운로드', downloadWindows: 'Windows용 다운로드', viewRelease: 'GitHub에서 릴리스 보기', overview: '개요', downloadInfo: '다운로드 정보', platform: '플랫폼', distribution: '배포 방식', assetFile: '배포 파일', fileSize: '파일 크기', certificateSubject: '인증서 Subject', certificateThumbprint: '인증서 지문', copy: '복사', copied: '복사되었습니다', allSoftware: '소프트웨어 전체 보기', allPosts: '글 전체 보기',
    version: '버전', released: '출시일', supportedOs: '지원 운영체제', features: '주요 기능', requirements: '시스템 요구사항',
    installation: '설치 방법', verification: '파일 검증', signature: '디지털 서명', changelog: '변경 사항', knownIssues: '알려진 문제',
    links: '관련 링크', repository: 'GitHub 저장소', releases: 'GitHub Releases', bugReport: '버그 제보', license: '라이선스',
    noTranslation: '이 콘텐츠는 현재 다른 언어로 제공되지 않습니다.', contact: '문의', contactEmail: '문의 이메일', privacy: '개인정보 처리방침 (준비 중)', support: '후원',
    supportMessage: '글이나 프로그램이 도움이 되었다면 커피 한 잔으로 응원해주실 수 있습니다.\n후원 여부와 관계없이 공개된 자료는 자유롭게 이용하실 수 있습니다.', supportButton: '☕ 커피 한 잔 후원하기', close: '닫기',
    softwareIntro: '프로그램 정보, 설치 파일, 체크섬과 릴리스 기록을 확인할 수 있습니다.',
    engineeringIntro: '재료, 해석, 실험 및 공학 도구에 관한 체계적인 노트입니다.',
    aboutHeading: '새로운 기술을 직접 써보고, 만들고, 기록합니다',
    aboutText: 'DrLeeWorks는 새로운 기술을 직접 사용해 보고, 그 과정에서 알게 된 내용과 경험을 기록하는 개인 사이트입니다.',
    aboutParagraphs: [
      'AI와 새로운 도구를 활용해 필요한 프로그램을 직접 만들어 보기도 하고, 공학·연구 과정에서 얻은 전공 정보와 실무 경험도 함께 정리합니다.',
      '이곳에서 공개하는 프로그램은 개인적인 필요와 아이디어에서 시작해 AI 도구를 적극 활용하여 제작하고 있습니다. 가능한 범위에서 테스트하고 개선하고 있지만, 예상하지 못한 오류가 있을 수 있습니다.',
      '완성된 결과만 소개하기보다는 직접 사용하고, 만들고, 시행착오를 겪는 과정까지 기록하는 것을 목표로 합니다.'
    ],
    youtubeText: '새로운 기술과 프로그램 제작, 공학·연구 관련 내용을 영상으로도 기록합니다.',
    youtubeLink: 'YouTube 채널 보기'
  },
  en: {
    home: 'Home', software: 'Software', engineering: 'Engineering', about: 'About',
    openSource: 'Open Source', bugReports: 'Report a Bug', computing: 'Computing', tech: 'Tech', daily: 'Note', notes: 'Notes', postsLabel: 'Posts', tagsLabel: 'Tags', allPostsLabel: 'View all', activeTagLabel: 'Selected tag', emptyPosts: 'No posts yet.', supportNav: 'Support', menu: 'Menu', closeMenu: 'Close menu',
    tagline: 'Trying, building, and documenting new technology',
    intro: 'I explore AI and new technologies firsthand and build useful programs along the way.\nI also document insights and experience from engineering and research.',
    featuredSoftware: 'Featured Software', recommendedPosts: 'Recommended Posts', updated: 'Updated', recentPosts: 'Recent Posts', latestPosts: 'Latest Posts', contentFeed: 'Latest from DrLeeWorks', topics: 'Engineering / Research Topics', aboutSite: 'About DrLeeWorks',
    readMore: 'Read more', download: 'Download', downloadWindows: 'Download for Windows', viewRelease: 'View release on GitHub', overview: 'Overview', downloadInfo: 'Download Information', platform: 'Platform', distribution: 'Distribution', assetFile: 'Release asset', fileSize: 'File size', certificateSubject: 'Certificate subject', certificateThumbprint: 'Certificate thumbprint', copy: 'Copy', copied: 'Copied', allSoftware: 'View all software', allPosts: 'View all posts',
    version: 'Version', released: 'Released', supportedOs: 'Supported OS', features: 'Main features', requirements: 'System requirements',
    installation: 'Installation', verification: 'File verification', signature: 'Digital signature', changelog: 'Changelog', knownIssues: 'Known issues',
    links: 'Links', repository: 'GitHub repository', releases: 'GitHub Releases', bugReport: 'Report a bug', license: 'License',
    noTranslation: 'This content is not currently available in the other language.', contact: 'Contact', contactEmail: 'Contact email', privacy: 'Privacy policy (coming soon)', support: 'Support',
    supportMessage: 'If you find the articles or software useful, you can support DrLeeWorks with a coffee.\nAll publicly shared content remains freely available regardless of support.', supportButton: '☕ Buy me a coffee', close: 'Close',
    softwareIntro: 'Software details, installers, checksums, and release history.',
    engineeringIntro: 'Structured notes on materials, analysis, experiments, and engineering utilities.',
    aboutHeading: 'Exploring, Building, and Documenting New Technologies',
    aboutText: 'DrLeeWorks is a personal site where I explore new technologies and document what I learn along the way.',
    aboutParagraphs: [
      'I use AI and other tools to build programs for my own needs, while also sharing knowledge and practical experience from engineering and research.',
      'The software shared here often begins with a personal need or idea and is developed with extensive use of AI tools. I test and improve it as much as possible, but unexpected bugs or issues may still occur.',
      'Rather than sharing only finished results, DrLeeWorks aims to document the process of trying, building, learning, and improving along the way.'
    ],
    youtubeText: 'I also share videos about new technologies, software projects, engineering, and research.',
    youtubeLink: 'View YouTube Channel'
  }
} as const;

export const getLang = (value: string | undefined): Lang => value === 'en' ? 'en' : 'ko';
export const useTranslations = (lang: Lang) => ui[lang];
