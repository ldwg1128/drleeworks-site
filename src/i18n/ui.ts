export const languages = { ko: '한국어', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  ko: {
    home: '홈', software: '소프트웨어', engineering: '공학', about: '소개',
    openSource: '오픈소스 SW', bugReports: '버그 신고', computing: '컴퓨팅', tech: '테크', daily: '기록', notes: '기록', postsLabel: '게시물', tagsLabel: '태그', allPostsLabel: '전체 보기', activeTagLabel: '선택 태그', emptyPosts: '게시물이 아직 없습니다.', supportNav: '후원', menu: '메뉴', closeMenu: '메뉴 닫기',
    tagline: '새로운 기술을 직접 써보고, 만들고, 기록합니다',
    intro: 'AI와 새로운 기술을 직접 사용해 보고, 필요한 프로그램도 만들어 봅니다.\n공학·연구 과정에서 얻은 정보와 경험도 함께 기록합니다.',
    featuredSoftware: '주요 소프트웨어', recommendedPosts: '추천 글', updated: '수정일', recentPosts: '최근 글', latestPosts: '최근 글', contentFeed: '새로운 콘텐츠', topics: '엔지니어링 / 연구 분야', aboutSite: 'DrLeeWorks 소개',
    readMore: '자세히 보기', download: '다운로드', downloadWindows: 'Windows용 다운로드', viewRelease: 'GitHub에서 릴리스 보기', overview: '개요', downloadInfo: '다운로드 정보', platform: '플랫폼', distribution: '배포 방식', assetFile: '배포 파일', fileSize: '파일 크기', certificateSubject: '인증서 Subject', certificateThumbprint: '인증서 지문', copy: '복사', copied: '복사됨', allSoftware: '소프트웨어 전체 보기', allPosts: '글 전체 보기',
    version: '버전', released: '출시일', supportedOs: '지원 운영체제', features: '주요 기능', requirements: '시스템 요구사항',
    installation: '설치 방법', verification: '파일 검증', signature: '디지털 서명', changelog: '변경 사항', knownIssues: '알려진 문제',
    links: '관련 링크', repository: 'GitHub 저장소', releases: 'GitHub Releases', bugReport: '버그 제보', license: '라이선스',
    noTranslation: '이 콘텐츠는 현재 다른 언어로 제공되지 않습니다.', contact: '연락처 (준비 중)', privacy: '개인정보 처리방침 (준비 중)', support: '후원 (준비 중)',
    softwareIntro: '프로그램 정보, 설치 파일, 체크섬과 릴리스 기록을 확인할 수 있습니다.',
    engineeringIntro: '재료, 해석, 실험 및 공학 도구에 관한 체계적인 노트입니다.', aboutText: 'DrLeeWorks는 장기간 유지할 수 있는 개인 소프트웨어 배포 및 기술 지식 아카이브입니다.'
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
    noTranslation: 'This content is not currently available in the other language.', contact: 'Contact (coming soon)', privacy: 'Privacy policy (coming soon)', support: 'Support (coming soon)',
    softwareIntro: 'Software details, installers, checksums, and release history.',
    engineeringIntro: 'Structured notes on materials, analysis, experiments, and engineering utilities.', aboutText: 'DrLeeWorks is a long-lived personal archive for software distribution and technical knowledge.'
  }
} as const;

export const getLang = (value: string | undefined): Lang => value === 'en' ? 'en' : 'ko';
export const useTranslations = (lang: Lang) => ui[lang];
