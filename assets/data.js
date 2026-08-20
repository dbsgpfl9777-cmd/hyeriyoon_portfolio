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
    { name: "Pro Tools 자격증", year: "2019" },
  ],
  career: [
    { name: "Studio BAKA", duration: "2Y 6M" },
    { name: "Talkback Studio", duration: "8M" },
  ],
  skills: [
    "Pro Tools", "Cubase", "Wwise", "FMOD",
    "Unreal Engine", "Unity", "Dolby Atmos", "DaVinci Resolve",
  ],
  // 플레이한 게임 목록 (About 페이지 GAME PLAY 섹션) — 원하는 만큼 추가/삭제 가능
  // thumbnail: 이미지 경로를 넣으면 표지 이미지가 보입니다. 비워두면 지금처럼 어두운 자리표시자가 나옵니다.
  //   예: thumbnail: "assets/thumbnails/lies-of-p.jpg"
  gamePlay: [
    { title: "Sons Of The Forest", hours: "24.9h", thumbnail: "assets/thumbnails/sons.jfif" },
    { title: "The Forest", hours: "14.5h", thumbnail: "assets/thumbnails/forest.jfif" },
    { title: "Lies of P", hours: "19.2h", thumbnail: "assets/thumbnails/lop.jfif" },
    { title: "Escape the Backrooms", hours: "4.3h", thumbnail: "assets/thumbnails/room.jfif" },
    { title: "Little Nightmares II", hours: "7.4h", thumbnail: "assets/thumbnails/lnm2.jfif" },
    { title: "Cyberpunk 2077", hours: "48.2h", thumbnail: "assets/thumbnails/punk.png" },
  ],
  // 사이드바 외부 링크 — href를 실제 링크로 바꿔주세요
  links: {
    email: "mailto:dbsgpfl9777@gmail.com",
    youtube: "https://youtube.com/playlist?list=PLVNH_EPvWBYzCgl5NfScfoeKlcnXQEfQl&si=RlGGMiEjheOux5Va",
    pdf: "assets/윤혜리_이력서.pdf",
  },
  demoReel: "여기에_유튜브_링크_붙여넣기",
};

// ---------------- PORTFOLIO ----------------
// video: 유튜브 또는 구글 드라이브 "공유" 링크를 그대로 붙여넣으면 자동 재생됩니다.
//   - 유튜브: https://www.youtube.com/watch?v=XXXX 또는 youtu.be/XXXX 또는 shorts 링크
//   - 구글 드라이브: 공유 링크(파일 보기 권한 "링크가 있는 모든 사용자"로 설정 필요)
// video가 비어있으면 자리표시자만 보입니다.
// thumbnail: 목록에 보이는 작은 썸네일 이미지 경로. 비워두면 어두운 자리표시자가 나옵니다.
//   예: thumbnail: "assets/thumbnails/monster-p.jpg"
const PORTFOLIO_CATEGORIES = [
  "HORROR", "CASUAL", "RPG", "SUBCULTURE", "DESIGN", "GAME PROJECT",
];

const PORTFOLIO_PROJECTS = [
  {
    title: "몬스터_P의 거짓",
    thumbnail: "assets/thumbnails/monster.png",
    year: "2026",
    categories: ["RPG"],
    video: "https://youtu.be/BjbYsWXG3HQ?si=XyDJAUPoOv8un6gc",
    design: [
      "타락한 대주교 안드레우스의 등장 컷 신을 바탕으로, 몬스터의 크기와 특성을 표현하고 어두운 분위기를 구성하는 것을 목표로 하였습니다.",
      "<strong>플레이어 캐릭터와의 크기 비교</strong>를 통해 인간의 2배 이상, 최소 3미터 이상의 대형 몬스터로 분류하였습니다. 이를 바탕으로 작은 움직임과 임팩트에 다이나믹 차이를 확실하게 표현하여 무게감과 압도적인 느낌을 표현하고자 하였습니다.",
      "몬스터의 신체 구조를 통해 보이스에 대한 작업 목표를 설정하였습니다. 구강 구조가 닫혀있지 않고 세로로 벌어지는 형태로, 발음이 불가능한 구조로 판단하였고 해당 특성을 살려 짐승/크리처의 포효 사운드에 감염된 기괴함을 더해주기 위해 <strong>Dehumanizer</strong>를 함께 활용했습니다.",
      "감염되고 변이된 존재라는 설정을 위해 움직임에 뼈가 꺾이는 소리와 질척한 텍스처를 중심으로 구성하였습니다.",
      "가면이 떨어지는 슬로우 장면에 뒤따라올 절정 장면의 극대화를 위해 가면 소리에 <strong>Timeless와 Pro-R</strong>을 활용하여 울리는 소리를 만들어 표현하였습니다.",
    ],
    tools: ["Dehumanizer", "Timeless", "Pro-R"],
  },
  {
    title: "트레일러_프로젝트 일",
    thumbnail: "assets/thumbnails/ILL.jpg",
    year: "2026",
    categories: ["HORROR"],
    video: "https://youtu.be/AEAkHoSJhTU?si=RrA2vU7s6XQy2Xpd",
    design: [
      "감염된 인간들의 기괴하고 인간적이지 않은 존재감을 사운드로 표현하는 것이 핵심 목표였습니다.",
      "<strong>Dehumaniser</strong>를 활용하여 사람의 보이스를 왜곡하여 활용하였습니다.",
      "몬스터의 질척하고 기괴한 움직임을 표현하기 위해 젖은 듯한 피 느낌의 리소스들을 중심으로 활용하였습니다.",
      "총소리의 경우 <strong>Pro-C2</strong>를 활용하여 어택감의 차이를 만들고자 하였습니다. 또한 종류별로 장전 방식 등 디자인 구성을 다르게 만들어 확실한 차이를 만들었습니다. 권총은 피아노 프리셋을 변형하였고, 머신건은 철컥하는 장전 소리와 터지는 느낌·댐핑감을 위해 킥 프리셋을 변형해 활용하였으며, 샷건은 저음을 부각하고 킥 프리셋을 조정하여 활용하였습니다.",
    ],
    tools: ["Dehumaniser", "Pro-C2"],
  },
  {
    title: "애니메이션_러브데스로봇",
    thumbnail: "assets/thumbnails/LDR.png",
    year: "2026",
    categories: ["HORROR", "SUBCULTURE"],
    video: "https://youtu.be/FC1v6R8sYhU?si=xndsgT_ffeYq42hE",
    design: [
      "『러브 데스 로봇 - 집 안에서 생긴 일』의 한 장면으로, 일상적 공간에서 공포와 긴장감을 쌓아가다 마지막 극적인 반전 흐름을 사운드로 설계하는 것을 목표로 했습니다.",
      "지속적으로 깔린 TV 속 캐럴의 신나는 분위기와 개 짖음, 부엉이 울음 등의 앰비언스로 <strong>불길한 느낌의 대비</strong>를 표현하였습니다.",
      "호러 시네마틱 효과를 활용하여 긴장되는 공포 분위기를 조성하고자 하였습니다.",
      "최종 반전에 음악 타이밍을 맞춰 정보를 전달하며 분위기를 전환하여 빠르게 긴장이 해소되게 구성하였습니다.",
      "몬스터 보이스의 경우 <strong>Distortion, Dehumaniser</strong>를 활용하여 왜곡하여 사용하였습니다. (돼지, 양, 호랑이, 코끼리 등 활용)",
      "무게감을 표현하기 위해 <strong>Inflator</strong>를 활용하여 베이스를 보강하였습니다.",
    ],
    tools: ["Distortion", "Dehumaniser", "Inflator"],
  },
  {
    title: "스킬 사운드 디자인",
    thumbnail: "assets/thumbnails/rpg-skill.png",
    year: "2026",
    categories: ["RPG", "DESIGN"],
    video: "https://youtu.be/yQEcVEVt8ys?si=--Z6I3IjcsAPw3i8",
    design: [
      "RPG 장르의 스킬 VFX 영상의 사운드를 디자인한 영상입니다. 각 속성의 무게와 질감을 표현하는 것에 중점을 두었습니다.",
      "가열된 망치를 이용하는 캐릭터에는 스팀 사운드를, 얼음 속성의 공격을 하는 캐릭터에는 유리가 깨지는 소리를 쓰는 등 각 스킬 원소의 질감을 표현하고자 하였습니다.",
      "몬스터 타격 중 마법 시전이 함께 진행되는 경우처럼 여러 소리가 중첩되는 경우, <strong>S1 Stereo Imager</strong>를 활용해 각 소리의 이미지 너비와 위치를 조정하였습니다.",
      "망치, 두 손 검 등 무거운 무기의 타격 시 <strong>Pro-C2</strong>를 활용하여 어택감을 보강하였습니다.",
      "얼음 속성의 공격은 맑은 스킬 톤을 제작하기 위해 <strong>Saturn 2</strong>를 활용하여 중, 고음역을 보강하였습니다.",
      "두손 검과 카타나의 확실한 차이를 만들기 위해 카타나의 스킬에 사용되는 스워드 우시에 <strong>Ring Mod</strong>를 활용한 리소스를 함께 활용하여 무기 특성을 구분하고자 하였습니다.",
    ],
    tools: ["S1 Stereo Imager", "Pro-C2", "Saturn 2", "Ring Mod"],
  },
  {
    title: "언리얼 와이즈 연동 사운드 구현",
    thumbnail: "assets/thumbnails/unreal.png",
    year: "2026",
    categories: ["GAME PROJECT", "DESIGN"],
    video: "https://youtu.be/qKzIeKxzFpI?si=IFXV4VnRhg-8KMwj",
    design: [
      "언리얼 엔진과 와이즈 연동을 통해 게임 상황에 반응하는 인터랙티브 사운드 시스템 구현을 목표로 했습니다.",
      "캐릭터 풋스텝 사운드에 대해 <strong>Switch Container</strong>를 활용한 재질 구분",
      "캐릭터 속도 변화에 따라 <strong>Blend Container</strong>를 활용한 속도 연동 사운드 시스템",
      "시간 정보에 따라 <strong>RTPC</strong> 기반 낮/밤 변화 환경음 시스템",
      "스테미나 시스템과 연계하여 <strong>Audio Ducking</strong> 기반의 상태 피드백 시스템",
      "<strong>Trigger Box</strong>를 활용하여 전투 상황 진입 시 State 전환 BGM 연출",
    ],
    tools: ["Unreal Engine 5", "Wwise", "Switch Container", "Blend Container", "RTPC"],
  },
  {
    title: "트레일러_빅 헬멧 히어로즈",
    thumbnail: "assets/thumbnails/bighelmet.jpg",
    year: "2026",
    categories: ["CASUAL"],
    video: "https://youtu.be/NKfKiYtHhS4?si=dG_KXz1sB8rk1XUJ",
    design: [
      "미국 카툰같은 유쾌한 분위기를 위하여 과장되고 엉뚱한 사운드를 연출하고자 하였습니다.",
      "새 울음, 카툰 보잉 사운드 등의 코믹한 리소스를 활용하여 코믹하게 연출하였습니다. 높이 뛰어올라 하늘에 해가 보일 때의 새 울음, 감옥을 탈출한 캐릭터의 특성에 맞춘 음악적 연출, 날아가는 화살의 속도를 매의 울음소리로, 공격에 실패하고 날아가는 화살은 닭의 울음소리로 표현했습니다.",
      "<strong>Phase Plant</strong>를 활용하여 Whoosh, Ring, Bell Chime 사운드를 제작하여 활용했습니다.",
      "탄성, 속도, 재질 등을 살리기 위하여 <strong>Flanger, Ring Mod, Distortion</strong> 등을 통해 리소스를 변형하여 활용하였습니다.",
    ],
    tools: ["Phase Plant", "Flanger", "Ring Mod", "Distortion"],
  },
  {
    title: "인게임_오리와 도깨비불",
    thumbnail: "assets/thumbnails/ORI.png",
    year: "2026",
    categories: ["GAME PROJECT"],
    video: "https://youtu.be/7Vy5SO_iQVU?si=qzR7UBspeVfnfMQU",
    design: [
      "인게임 영상으로, 메인 캐릭터의 소리를 중심에 두고 각 사운드 요소가 우선순위에 따라 서로를 방해하지 않도록 균형 잡힌 사운드 환경을 구성하는 것을 목표로 했습니다.",
      "Drone, cave 소리 등을 활용해 구성하고 떨어지는 물방울과 돌 부스러기 소리를 랜덤하게 배치해 기본 환경음을 구성하였습니다.",
      "다양한 상호작용에 보이는 밝은 빛의 그래픽 이펙트 느낌을 살리기 위해 <strong>Kontakt, Omnisphere</strong> 등 다양한 신디사이저를 활용하여 소리를 구성하였습니다.",
      "밧줄을 잡고 올라가는 경우와 경험치가 빨려 들어오는 경우, 제작한 소리를 리버스시켜 빨려 들어가는 느낌을 표현했습니다.",
      "횡으로 움직이는 방식의 게임 특징을 위해 <strong>S1 Stereo Imager</strong>와 패닝을 적극적으로 활용하였습니다.",
    ],
    tools: ["Kontakt", "Omnisphere", "S1 Stereo Imager"],
  },
  {
    title: "UI_프래그마타",
    thumbnail: "assets/thumbnails/Prag.png",
    year: "2026",
    categories: ["GAME PROJECT", "DESIGN"],
    video: "https://youtu.be/Xy7sCgA5JxA?si=9zfcCG4ugeu91KF",
    design: [
      "SF 장르의 특성에 맞춰, 기계적인 움직임을 표현한 UI를 구현하고자 하였습니다. 각 UI의 인터랙션 상태를 즉각 구분하는 사운드를 설계하는 것을 목표로 하였습니다.",
      "컨테이너 잠금 해제는 영상 속 직접적인 기계의 움직임이 보이는 유일한 작용입니다. 기계의 움직임을 잘 보여주고자 하였고, 금속의 질감을 살리고자 <strong>Saturn 2</strong>를 활용하여 톤을 조정하였습니다.",
      "그리드 노드 퍼즐 풀기는 커서가 노드를 이동할 때 짧고 또렷한 스텝음으로 선택 타이밍을 알 수 있게 제작하였습니다. 목표에 가까워질수록 피치를 단계적으로 상승시키고 엔드 포인트에 해결음으로 성공 여부를 표현하였습니다.",
      "방해물을 파괴하는 경우 스캔하듯 올라가는 UI를 표현하기 위해 Rise 소스를 활용하고, 메탈릭 파편을 <strong>Pro-R2</strong>의 리버브로 맑게 퍼지도록 유도하였습니다.",
      "이동 시 공간을 클릭하는 클릭음과 호버 사운드를 중심으로 구성하였고, 공간이 변하는 느낌을 표현하고자 <strong>S1 Stereo Imager</strong>를 활용하여 이미지 너비를 오토메이션으로 조절하여 표현하였습니다.",
      "원형 회전 퍼즐의 경우 회전 각도에 연동되는 피치, 필터 변화로 조작감을 표현하였습니다.",
    ],
    tools: ["Saturn 2", "Pro-R2", "S1 Stereo Imager"],
  },
  {
    title: "UI_스타레일",
    thumbnail: "assets/thumbnails/Starrail.png",
    year: "2026",
    categories: ["SUBCULTURE"],
    video: "https://youtu.be/iRWShLw6OS4?si=R2kjMSmOBSXUFwqJ",
    design: [
      "서브컬처 RPG 『붕괴: 스타레일』의 UI 사운드로, 조작 시의 반응감과 피드백 사운드를 구성하고자 했습니다. SF가 섞인 세계관의 분위기를 함께 전달하고자 했습니다.",
      "멀리서 다가오는 열차를 <strong>S1 Stereo Imager</strong>를 활용하여 표현하였습니다.",
      "3성 무기와 5성 무기간의 결과 사운드를 기본 베이스는 같게 구성하고 임팩트와 벨 사운드 등 요소에서 구분점을 만들어 <strong>등급 차이를 청각적으로 인지</strong>할 수 있게 만들고자 하였습니다.",
      "뽑기 무기가 나오기 전 열차의 문이 열리는 순간은 뒤에 나올 반짝이는 효과음과 대비되게 무겁게 구성하여 긴장이 해소되게 구성하였습니다.",
    ],
    tools: ["S1 Stereo Imager"],
  },
  {
    title: "캐릭터 트레일러_ 젠레스 존 제로",
    thumbnail: "assets/thumbnails/ZZZ.png",
    year: "2026",
    categories: ["SUBCULTURE"],
    video: "https://youtu.be/RnZkYo0acCg?si=YD-oF2gs0ReFsOpL",
    design: [
      "젠레스 존 제로 (ZZZ)의 캐릭터 트레일러 영상입니다. 해당 게임의 특징인 스타일리시한 전투의 타격감, 스킬 사운드를 디자인하고자 하였습니다.",
      "각 공간의 특징을 보여줄 수 있는 오브젝트 요소들을 활용하였습니다. 건물 내부는 비상 상황으로 지속적으로 발생하는 비상 알람음과, 두꺼운 철로 이루어진 요새 같은 공간을 <strong>Plate 특성의 리버브</strong>로 표현하였습니다. 연구실은 연구원이 전투 상황을 지켜보고 있음을 표현하기 위해 라디오 EQ를 적용한 전투 소리로 지상 공간과 연결하였고, 지하는 오염이 더욱 심해지는 공간의 무거운 분위기를 위해 저음을 강화하고 떨어질 때 슬로우 모션을 살리기 위해 중고음을 인위적으로 눌러 사용하였습니다.",
      "지상의 몬스터와 지하의 몬스터가 외관적으로 오염의 차이가 있는 것을 확인하여 <strong>Distortion, Pitch Shift, DisPerser</strong>를 함께 활용하여 왜곡을 강화하였습니다.",
      "메인 캐릭터의 전투 사운드 디자인 시 해당 캐릭터의 기계적인 느낌과 전기 느낌을 살리고 서브컬처 장르의 느낌을 살려 디자인하고자 <strong>Saturn 2, Disperse</strong>를 활용하여 왜곡한 리소스를 함께 활용하였습니다.",
    ],
    tools: ["Distortion", "Pitch Shift", "DisPerser", "Saturn 2", "Disperse"],
  },
];


// ---------------- EXPERIENCE ----------------
// category: 아래 EXPERIENCE_CATEGORIES 중 하나를 넣으세요. 탭에서 필터링됩니다.
// url: 항목 설명 아래에 표시될 관련 링크 (없으면 비워두면 자동으로 숨겨집니다)
// period: 각 프로젝트의 정확한 기간이 없어서 비워뒀습니다. 알고 계신 기간으로 채워주세요.
// thumbnail: 왼쪽에 보이는 작은 썸네일 이미지 경로. 비워두면 어두운 자리표시자가 나옵니다.
//   예: thumbnail: "assets/thumbnails/k-sound-library.jpg"

// 카테고리 탭 목록 — 원하는 이름으로 자유롭게 바꾸거나 추가/삭제하세요.
const EXPERIENCE_CATEGORIES = ["Library", "Audiobook", "Exhibition", "Video", "Recording"];

const EXPERIENCE_ITEMS = [
  // ---- Library ----
  {
    period: "",
    org: "한국형 효과음원 구축 사업",
    thumbnail: "assets/thumbnails/ksoundlibrary.png",
    role: "Sound Designer",
    subtitle: "국가지정무형유산·전통 소리 관련 효과음원 4,000건 제작",
    detail:
      "미디어 콘텐츠 후반제작에 즉시 활용 가능한 한국형 효과음원을 개발하는 목표를 가지고 진행한 사업입니다. 국가지정무형유산·전통 소리 관련 효과음원 4,000건을 제작했습니다.",
    roleDetail: [
      "사전 단계 장비 구성 및 음향 파트 기획",
      "무형유산 조사·목록화·섭외",
      "메타데이터 구성 참여",
      "현장 녹음 및 소스 에디팅",
    ],
    category: "Library",
    url: "https://www.k-soundlibrary.kr/main.do",
  },
  {
    period: "",
    org: "회사 IP 라이브러리 제작",
    thumbnail: "assets/thumbnails/ultrapix.png",
    role: "Sound Designer",
    subtitle: "XR 콘텐츠용 환경·폴리 사운드 및 360 XR 영상 환경음 제작 (현재 비서비스)",
    detail:
      "XR 콘텐츠에 활용 가능한 효과음원과 영상 콘텐츠를 개발하는 목표를 가지고 진행한 사업입니다. 자연, 공장 등의 환경·폴리 사운드 카테고리 7종과 360 XR 영상 환경음 사운드 디자인을 제작했습니다. (현재는 서비스되고 있지 않습니다.)",
    roleDetail: [
      "사전 단계 장비 구성 및 음향 파트 기획",
      "현장 조사 및 섭외 목록화",
      "메타데이터 구성",
      "현장 녹음 및 소스 에디팅",
    ],
    category: "Library",
    url: "",
  },

  // ---- Audiobook ----
  {
    period: "",
    org: "점이지대",
    thumbnail: "assets/thumbnails/place.jpg",
    role: "Sound Designer",
    subtitle: "바이노럴 포맷 오디오북 9편 제작",
    detail:
      "전북의 각 지역을 현대 문학으로 엮어 제작한 오디오북입니다. 바이노럴 포맷 오디오북 9편을 국내 E-Book 사이트에 게시했습니다.",
    roleDetail: [
      "작곡가 선정 및 일정 조율",
      "성우 녹음, 외부 녹음 화상 협업",
      "대사 에디팅, 효과음 제작, 음악 편집",
    ],
    category: "Audiobook",
    url: "https://www.welaaa.com/audio/detail/11690",
  },
  {
    period: "",
    org: "구운몽",
    thumbnail: "assets/thumbnails/9clouddream.png",
    role: "Sound Designer",
    subtitle: "바이노럴 포맷 오디오북 6챕터 제작",
    detail:
      "김만중 원작 『구운몽』을 각색한 오디오북으로, 바이노럴 포맷 6챕터를 제작했습니다.",
    roleDetail: [
      "작곡가 선정 및 일정 조율",
      "성우 녹음, 외부 녹음 화상 협업",
      "대사 에디팅, 효과음 제작, 음악 편집",
    ],
    category: "Audiobook",
    url: "https://www.welaaa.com/audio/detail/11125",
  },
  {
    period: "",
    org: "반태산 귀신사냥꾼",
    thumbnail: "assets/thumbnails/ghosthunter.png",
    role: "Sound Designer",
    subtitle: "바이노럴 포맷 오디오북 2권 제작",
    detail:
      "한국형 효과음원 구축 사업의 일환으로 효과음원을 활용하여 제작한 오디오북으로, 바이노럴 포맷 2권을 제작했습니다.",
    roleDetail: [
      "작곡가 선정 및 일정 조율",
      "성우 녹음, 외부 녹음 화상 협업",
      "대사 에디팅, 효과음 제작, 음악 편집",
    ],
    category: "Audiobook",
    url: "https://www.welaaa.com/audio/detail/7943",
  },

  // ---- Exhibition ----
  {
    period: "",
    org: "공기관 미디어아트 전시",
    thumbnail: "assets/thumbnails/LX.png",
    role: "Sound Designer",
    subtitle: "VR 콘텐츠 2편, AR 콘텐츠 1편 — LX 기록 체험 전시관 전시",
    detail:
      "한국국토정보공사의 비전을 담은 전시관 구축 프로젝트로, VR 콘텐츠 2편과 AR 콘텐츠 1편을 제작해 LX 기록 체험 전시관에 전시되었습니다.",
    roleDetail: [
      "음악 선곡 및 편집",
      "대사 에디팅",
      "효과음 제작 및 사운드 디자인",
      "현장 설치 및 장비 AS",
    ],
    category: "Exhibition",
    url: "https://youtu.be/03vkIZXqisA?si=VanR1kJZ7f-iBJVq",
  },
  {
    period: "",
    org: "지역 문화 콘텐츠 재생 전시",
    thumbnail: "assets/thumbnails/wavethepalbok.jpg",
    role: "Sound Designer",
    subtitle: "40분 실감전시영상 사운드 디자인(9.1.6ch), 인터랙티브 콘텐츠 2종 개발",
    detail:
      "노후된 지역 산업 단지에 문화 콘텐츠를 제작하는 것을 목표로 전시관을 구축한 프로젝트입니다. 40분 실감전시영상 사운드 디자인(9.1.6ch)과 인터랙티브 체험 콘텐츠 2종을 개발했습니다.",
    roleDetail: [
      "현장 장비 구성 및 전시 장비 구축",
      "동시녹음",
      "효과음 제작 및 사운드 디자인",
      "소리와 연관된 인터랙티브 체험 콘텐츠 개발 및 구현 — 소리 반응형 LED를 활용한 '빛의 정원', 아날로그 플레이어를 거쳐 왜곡되어 들리는 '마이크 정원'",
    ],
    category: "Exhibition",
    url: "",
  },
  {
    period: "",
    org: "인공지능 콘텐츠 미디어아트 전시",
    thumbnail: "assets/thumbnails/gwangju.jpg",
    role: "Sound Designer",
    subtitle: "전시 영상 2편 사운드 디자인 — 광주실감콘텐츠큐브(GCC) 상영",
    detail:
      "광주의 100년 역사를 학습한 AI의 데이터와 제너러티브 아트를 결합한 결과물을 전시 콘텐츠로 제작했습니다. 전시 영상 2편의 사운드 디자인을 맡았으며, 광주실감콘텐츠큐브(GCC)에서 상영되었습니다.",
    roleDetail: [
      "버추얼 휴먼 캐릭터 보이스 에디팅 및 디자인",
      "음악 선곡 및 편집",
      "효과음 제작 및 사운드 디자인",
    ],
    category: "Exhibition",
    url: "",
  },
  {
    period: "",
    org: "지역 특성 미디어아트 콘텐츠 전시",
    thumbnail: "assets/thumbnails/Mokpo.jpg",
    role: "Sound Designer",
    subtitle: "영상 콘텐츠 3종 — 목포미식문화갤러리 상영",
    detail:
      "목포의 문화, 맛, 근대건축공간에 대한 영상 콘텐츠 3종을 제작해 목포미식문화갤러리에서 상영되었습니다.",
    roleDetail: [
      "현장 녹음",
      "폴리 사운드 후시 녹음",
      "음원 선곡 및 편집",
      "성우 녹음 화상 진행 및 대사 에디팅",
      "효과음 제작 및 사운드 디자인",
    ],
    category: "Exhibition",
    url: "",
  },
  {
    period: "",
    org: "지역 IP 미디어아트 전시",
    thumbnail: "assets/thumbnails/Godaedo.jpg",
    role: "Sound Designer",
    subtitle: "미디어아트 영상 3건(7.1.4ch) — 고대도 별빛공원 해양문화관광체험관 상영",
    detail:
      "고대도의 미션아일랜드 사업이 진행되며 전시공간을 구축한 프로젝트입니다. 미디어아트 영상 3건(7.1.4ch)을 제작해 고대도 별빛공원 해양문화관광체험관에서 상영되었습니다.",
    roleDetail: [
      "장비 구축 및 현장 믹싱",
      "성우 녹음 및 대사 에디팅",
      "음원 편집",
      "효과음 제작 및 사운드 디자인",
    ],
    category: "Exhibition",
    url: "",
  },
  {
    period: "",
    org: "기업 B2B 실감콘텐츠 제작",
    thumbnail: "assets/thumbnails/hyundai.png",
    role: "Sound Designer",
    subtitle: "실감형 미디어 영상 2편 — 현대글로비스 성수동 사옥 상영",
    detail:
      "현대글로비스의 실감형 브랜드 필름 사운드 디자인을 진행한 프로젝트입니다. 실감형 미디어 영상 2편을 제작해 성수동 현대글로비스 사옥에서 상영되었습니다.",
    roleDetail: [
      "현장 믹싱",
      "성우 녹음 및 대사 에디팅",
      "음원 선곡 및 편집",
      "효과음 제작 및 사운드 디자인",
    ],
    category: "Exhibition",
    url: "",
  },

  // ---- Video ----
  {
    period: "2021 — 2022",
    org: "아시아 문화 다큐멘터리",
    thumbnail: "assets/thumbnails/ACC.jpg",
    role: "Sound Designer",
    subtitle: "2021년 13편, 2022년 11편 제작 — 국립아시아문화전당 아카이브 구축 사업",
    detail:
      "국립아시아문화전당에서 주관하는 아시아문화 아카이브 구축 사업으로, 2021년 총 13편, 2022년 총 11편의 다큐멘터리를 제작했습니다. ACC 아카이브 이야기에서 확인할 수 있습니다.",
    roleDetail: [
      "현장 인터뷰 녹음",
      "음악 선곡 및 편집",
      "대사 에디팅",
      "기관 로고 사운드 제작",
    ],
    category: "Video",
    url: "",
  },
  {
    period: "2023",
    org: "우리 역사넷 교육영상",
    thumbnail: "assets/thumbnails/history.png",
    role: "Sound Designer",
    subtitle: "다큐멘터리 6편 제작 (농악, 읍성, 질그릇, 탱화, 해녀, 혼례)",
    detail: "우리역사넷 교육영상 제작 프로젝트로, 농악·읍성·질그릇·탱화·해녀·혼례를 주제로 한 다큐멘터리 6편을 제작했습니다.",
    roleDetail: [
      "현장 인터뷰 녹음",
      "음악 선곡 및 편집",
      "대사 에디팅",
      "효과음 제작",
    ],
    category: "Video",
    url: "",
  },
  {
    period: "2023",
    org: "전주시 민선8기 홍보영상",
    thumbnail: "assets/thumbnails/Jeonju.jpg",
    role: "Sound Designer",
    subtitle: "전주시 대표 홍보영상 총 4건 제작",
    detail:
      "자연, 역사, 문화, 미래비전 등을 종합화한 전주시 대표 홍보영상으로, 총 4건을 제작했습니다.",
    roleDetail: ["음원 선곡 및 편집", "대사 에디팅", "사운드 디자인"],
    category: "Video",
    url: "https://youtu.be/2q9HovUxZjg?si=LycmPIR6HABrLbYL",
  },
  {
    period: "2023",
    org: "전북특별자치도 론칭 TV CF",
    thumbnail: "assets/thumbnails/JeonjuTVCF.jpg",
    role: "Sound Designer",
    subtitle: "종합홍보영상 1편, TV CF 1편 제작",
    detail:
      "전북특별자치도의 지향점과 출범에 대한 이해도를 담은 영상 제작 프로젝트로, 종합홍보영상 1편과 TV CF 1편을 제작했습니다.",
    roleDetail: [
      "현장 녹음",
      "음원 선곡 및 편집",
      "다중언어 대사 에디팅",
      "사운드 디자인",
    ],
    category: "Video",
    url: "https://youtu.be/z7R8SOnkmJs?si=boc1p6MiwPDxlOh5",
  },

  // ---- Recording ----
  {
    period: "",
    org: "범인은 바로 너",
    thumbnail: "assets/thumbnails/yout.png",
    role: "Sound Operator",
    subtitle: "시즌 3 8화 동시녹음",
    detail: "예능 프로그램 『범인은 바로 너』 시즌 3 8화의 동시녹음을 진행했습니다.",
    roleDetail: ["출연진 마이크 관리 및 레코더 오퍼레이팅"],
    category: "Recording",
    url: "",
  },
  {
    period: "",
    org: "런닝맨",
    thumbnail: "assets/thumbnails/Running.jpg",
    role: "Sound Operator",
    subtitle: "2회차 촬영분 동시녹음",
    detail: "『런닝맨』 2회차 촬영분의 동시녹음을 진행했습니다.",
    roleDetail: ["출연진 마이크 관리 및 레코더 오퍼레이팅"],
    category: "Recording",
    url: "",
  },
  {
    period: "",
    org: "고잉세븐틴",
    thumbnail: "assets/thumbnails/seventeen.jpg",
    role: "Sound Operator",
    subtitle: "고잉세븐틴 2019 EP.21 동시녹음",
    detail: "『고잉세븐틴 2019』 EP.21의 동시녹음을 진행했습니다.",
    roleDetail: ["출연진 마이크 관리 및 레코더 오퍼레이팅"],
    category: "Recording",
    url: "",
  },
  {
    period: "",
    org: "NCT Dream 자체컨텐츠",
    thumbnail: "assets/thumbnails/NCT.png",
    role: "Sound Operator",
    subtitle: "자체 콘텐츠 2편 동시녹음",
    detail: "NCT Dream 자체 콘텐츠 2편의 동시녹음을 진행했습니다.",
    roleDetail: ["출연진 마이크 관리 및 레코더 오퍼레이팅"],
    category: "Recording",
    url: "",
  },
  {
    period: "",
    org: "우리 다시 사랑할 수 있을까",
    thumbnail: "assets/thumbnails/meetagain.jpg",
    role: "Sound Operator",
    subtitle: "시즌 1, 시즌 3 동시녹음",
    detail: "『우리 다시 사랑할 수 있을까』 시즌 1, 시즌 3의 동시녹음을 진행했습니다.",
    roleDetail: ["출연진 마이크 관리 및 레코더 오퍼레이팅"],
    category: "Recording",
    url: "",
  },
  {
    period: "",
    org: "쏭개팅",
    thumbnail: "assets/thumbnails/song.png",
    role: "Sound Operator",
    subtitle: "동시녹음 및 현장 라이브 장비 설치",
    detail: "『쏭개팅』 콘텐츠의 동시녹음을 진행했습니다.",
    roleDetail: [
      "출연진 마이크 관리 및 레코더 오퍼레이팅",
      "현장 라이브 장비 설치",
    ],
    category: "Recording",
    url: "",
  },
  {
    period: "",
    org: "아이돌 예병대 캠프",
    thumbnail: "assets/thumbnails/idol.jpg",
    role: "Sound Operator",
    subtitle: "예병대캠프 4기 라비, 태민 편 동시녹음",
    detail: "『예병대캠프』 4기 라비, 태민 편 촬영의 동시녹음을 진행했습니다.",
    roleDetail: ["출연진 마이크 관리 및 레코더 오퍼레이팅"],
    category: "Recording",
    url: "",
  },
  {
    period: "",
    org: "왓더펀",
    thumbnail: "assets/thumbnails/wtf.png",
    role: "Sound Operator",
    subtitle: "공포특집 '납치된 신동훈을 구해라' 편 동시녹음",
    detail: "『왓더펀』 공포특집 '납치된 신동훈을 구해라' 편 촬영의 동시녹음을 진행했습니다.",
    roleDetail: ["출연진 마이크 관리 및 레코더 오퍼레이팅"],
    category: "Recording",
    url: "",
  },
  {
    period: "",
    org: "사장님 귀는 당나귀 귀",
    thumbnail: "assets/thumbnails/donkey.jpg",
    role: "Sound Operator",
    subtitle: "김기태 감독 편 동시녹음",
    detail: "『사장님 귀는 당나귀 귀』 김기태 감독 편 촬영의 동시녹음을 진행했습니다.",
    roleDetail: ["출연진 마이크 관리 및 레코더 오퍼레이팅"],
    category: "Recording",
    url: "",
  },
];
