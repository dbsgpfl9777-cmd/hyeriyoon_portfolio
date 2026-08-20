// ============================================================
// YOONHYERI PORTFOLIO — 콘텐츠 데이터
// 이 파일만 수정하면 사이트 전체 내용이 바뀝니다. (HTML/CSS는 건드릴 필요 없음)
// ============================================================

// ---------------- 프로필 / 사이드바 공통 정보 ----------------
const PROFILE = {
  name: "윤혜리",
  role: "사운드 디자이너",
  email: "dbsgpfl9777@gmail.com",
  education: ["한국영상대학교", "음향제작학과"],
  certifications: [
    { name: "Pro Tools Specialist Version 12", year: "2019" },
  ],
  career: [
    { name: "Studio VAKA", duration: "2Y 6M" },
    { name: "Talkback Studio", duration: "8M" },
  ],
  skills: [
    "Pro Tools", "Cubase", "Wwise", "FMOD",
    "Unreal Engine", "Unity", "Dolby Atmos", "DaVinci Resolve",
  ],
  // 플레이한 게임 목록 (About 페이지 GAME PLAY 섹션) — 원하는 만큼 추가/삭제 가능
  gamePlay: [
    { title: "Sons Of The Forest 01", hours: "24.9h" },
    { title: "The Forest", hours: "14.5h" },
    { title: "Lies of P", hours: "19.2h" },
    { title: "Escape the Backrooms", hours: "4.3h" },
    { title: "Little Nightmares ll", hours: "7.4h" },
    { title: "Cyberpunk", hours: "48.2h" },
  ],
  // 사이드바 외부 링크 — href를 실제 링크로 바꿔주세요
  links: {
    email: "mailto:dbsgpfl9777@gmail.com",
    youtube: "https://youtube.com/",
    drive: "https://drive.google.com/",
    pdf: "#", // PDF 이력서 파일 경로 또는 다운로드 링크
  },
};

// ---------------- PORTFOLIO ----------------
// video: 유튜브 또는 구글 드라이브 "공유" 링크를 그대로 붙여넣으면 자동 재생됩니다.
//   - 유튜브: https://www.youtube.com/watch?v=XXXX 또는 youtu.be/XXXX 또는 shorts 링크
//   - 구글 드라이브: 공유 링크(파일 보기 권한 "링크가 있는 모든 사용자"로 설정 필요)
// video가 비어있으면 자리표시자만 보입니다.
const PORTFOLIO_CATEGORIES = [
  "HORROR", "CASUAL", "RPG", "SUBCULTURE", "DESIGN", "GAME PROJECT",
];

const PORTFOLIO_PROJECTS = [
  {
    title: "Whisper in the Dark",
    year: "2026",
    categories: ["HORROR", "GAME PROJECT"],
    video: "", // 예: "https://www.youtube.com/watch?v=xxxxxxxxxxx"
    design: [
      "플레이어가 어둠 속에서 불안감을 느끼고, 주변 환경의 작은 소리에 더욱 몰입할 수 있도록 사운드 디자인을 설계했습니다.",
      "공간의 고요함과 예측 불가능한 사운드가 긴장감을 유도하는 것을 핵심 목표로 삼았습니다.",
    ],
    tools: ["Unreal Engine 5", "Wwise", "Pro Tools"],
  },
];

// ---------------- EXPERIENCE ----------------
// category: 아래 EXPERIENCE_CATEGORIES 중 하나를 넣으세요. 탭에서 필터링됩니다.
// url: 항목 설명 아래에 표시될 관련 링크 (없으면 비워두면 자동으로 숨겨집니다)

// 카테고리 탭 목록 — 원하는 이름으로 자유롭게 바꾸거나 추가/삭제하세요.
const EXPERIENCE_CATEGORIES = ["Library", "Exhibition", "Video", "Recording"];

const EXPERIENCE_ITEMS = [
  {
    period: "2023.10 — 2023.12",
    org: "점이지대",
    role: "Sound Designer",
    subtitle: "바이노럴 오디오북 8편 사운드 디자인 및 음향 제작",
    detail:
      "바이노럴 오디오북 프로젝트로, 한국형 효과음원 및 전통음악을 활용한 몰입형 사운드를 제작했습니다.",
    roleDetail: ["오디오북 2편 제작", "한국형 효과음원 및 전통음악 활용"],
    category: "Library",
    url: "",
  },
  {
    period: "2023.10 — 2023.12",
    org: "자사 스톡 사이트 음원 소스 개발",
    role: "Sound Designer",
    subtitle: "360º 비디오 사운드 디자인, IP 사운드 시리즈 약 71개 작업",
    detail: "자사 스톡 사이트에 등록할 사운드 소스 개발 프로젝트입니다.",
    roleDetail: ["360º video sound design", "IP sound series 제작 (약 71개)"],
    category: "Video",
    url: "",
  },
  {
    period: "2022.11 — 2022.12",
    org: "광주 GCC AI Content Showcase",
    role: "Sound Designer",
    subtitle: "AI 콘텐츠 쇼케이스 사운드 디자인 및 가상 인간 음성 편집",
    detail: "AI 콘텐츠 쇼케이스를 위한 사운드 디자인 프로젝트입니다.",
    roleDetail: ["Sound design", "Virtual human voice editing", "VocAlign 활용"],
    category: "Video",
    url: "",
  },
  {
    period: "2022.08 — 2023.02",
    org: "고대도 별빛공원 실감미디어아트",
    role: "Sound Designer",
    subtitle: "Dolby Atmos 기반 실감미디어아트 사운드 디자인",
    detail:
      "고대도 별빛공원의 실감미디어아트 전시를 위한 시네마틱 사운드 프로젝트입니다.",
    roleDetail: [
      "Cinematic media art 사운드 디자인",
      "Dolby Atmos immersive audio",
      "Voice directing / Sound design / Upmix",
      "Dolby Atmos mixing (9.1.6 channel)",
    ],
    category: "Exhibition",
    url: "",
  },
  {
    period: "2021.07 — 2022.01",
    org: "전북지역특화콘텐츠 개발지원 사업",
    role: "Sound Designer",
    subtitle: "지역 특화 콘텐츠를 위한 현장 녹음 및 Dolby Atmos 작업",
    detail: "전북지역특화콘텐츠 개발을 지원하는 프로젝트입니다.",
    roleDetail: ["Field recording", "Dolby Atmos Renderer 활용"],
    category: "Recording",
    url: "",
  },
  {
    period: "2021.05 — 2022.01",
    org: "한국형 영화 효과음원 구축사업",
    role: "Sound Designer",
    subtitle: "영화·게임·애니메이션 효과음원 라이브러리 구축, 9,000+ 음원 제작",
    detail:
      "국가적 차원의 한국형 효과음원 라이브러리 구축 프로젝트에 참여하여 9,000여 종의 고품질 음원을 제작했습니다.",
    roleDetail: [
      "현장 녹음 및 음원 제작",
      "음향 파트 구성 및 기획",
      "Ambisonics 녹음",
      "편집 및 마스터링 / 리소스 관리",
    ],
    category: "Library",
    url: "",
  },
  {
    period: "2021.07 — 2024.01",
    org: "Studio VAKA",
    role: "Sound Designer / Sound Production",
    subtitle: "사업 제안부터 현장 녹음, 사운드 디자인, 음원 제작까지 전반 담당",
    detail:
      "다양한 프로젝트의 사업 제안 및 음향 파트, 현장 녹음 및 장비 구축, 사운드 디자인, 음원 제작 및 편집을 담당했습니다.",
    roleDetail: [
      "사업제안 및 음향파트",
      "현장 녹음 및 장비 구축 / 사운드 디자인",
      "음원 제작 및 편집 / 프로젝트 전반 사운드 파트 담당",
    ],
    category: "Recording",
    url: "",
  },
  {
    period: "2019.07 — 2020.03",
    org: "TOKBACK",
    role: "Sound Operator",
    subtitle: "런닝맨, 범인은 바로 너 등 예능/영화 동시녹음 오퍼레이터",
    detail:
      "런닝맨, 범인은 바로 너 등 다양한 예능·영화 현장에서 동시녹음을 담당했습니다.",
    roleDetail: ["동시녹음 오퍼레이팅", "방송/영상 현장 녹음"],
    category: "Recording",
    url: "",
  },
];
