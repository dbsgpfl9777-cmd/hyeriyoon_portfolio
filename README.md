# YOONHYERI PORTFOLIO

순수 HTML/CSS/JS로 만든 **한 페이지 스크롤형** 사이트입니다. 빌드 과정 없이 파일 그대로 GitHub에 올리면 끝입니다.

Home → About → Portfolio → Experience가 한 페이지 안에서 위아래로 이어지고, 왼쪽 사이드바(또는 모바일에서는 상단바)의 메뉴를 누르면 그 위치로 부드럽게 스크롤 이동합니다. 스크롤 중엔 사이드바가 화면에 계속 고정되어 있고, 지금 보고 있는 섹션이 자동으로 표시됩니다.

---

## 1. GitHub에 올리는 법

1. GitHub에 새 리포지토리 생성
2. 이 폴더 안의 파일 전체를 그대로 업로드 (드래그 앤 드롭 가능)
3. 리포지토리 **Settings → Pages**
4. **Source**: `Deploy from a branch`
5. **Branch**: `main` / 폴더: `/ (root)` 선택 → Save

1~2분 후 `https://<아이디>.github.io/<리포지토리이름>/` 에서 확인 가능합니다.

빌드 단계가 없어서 이게 전부입니다. 파일을 고치고 다시 push하면 그대로 반영돼요.

---

## 2. 내용 수정하기

**`assets/data.js` 파일 하나만 고치면 됩니다.** 이름, 이메일, 경력, 학력, 스킬, 포트폴리오 프로젝트, 경력 항목이 전부 이 파일에 있어요. HTML/CSS는 건드릴 필요 없습니다.

### 포트폴리오에 영상 추가하기

`PORTFOLIO_PROJECTS` 배열에서 `video` 값에 유튜브나 구글 드라이브 링크를 붙여넣으면 자동으로 재생 화면이 됩니다.

```js
video: "https://www.youtube.com/watch?v=xxxxxxxxxxx",
```

- 유튜브: 일반 watch 링크, youtu.be 단축링크, shorts 링크 모두 인식됩니다.
- 구글 드라이브: 드라이브에서 "링크가 있는 모든 사용자가 볼 수 있음"으로 공유 설정한 뒤, 그 공유 링크를 붙여넣으세요.
- `video`를 빈 문자열 `""`로 두면 자리표시자(재생 아이콘)만 보입니다.

새 프로젝트를 추가하려면 배열에 객체를 하나 더 넣으면 됩니다:

```js
{
  title: "새 프로젝트 이름",
  year: "2026",
  categories: ["HORROR"],   // PORTFOLIO_CATEGORIES 안의 값만 사용 가능
  video: "",
  design: ["설명 문단 1", "설명 문단 2"],
  tools: ["Wwise", "Unreal Engine"],
},
```

### 경력(Experience)에 관련 링크 추가하기

`EXPERIENCE_ITEMS` 배열의 각 항목에 있는 `url` 값에 링크를 넣으면, 그 항목을 펼쳤을 때 설명 아래에 "관련 링크 보기 →" 버튼이 자동으로 나타납니다. 비워두면 버튼이 아예 안 보입니다.

```js
url: "https://example.com/project-page",
```

### 경력(Experience) 카테고리 탭 수정하기

포트폴리오처럼 Experience에도 카테고리 탭이 있습니다. `EXPERIENCE_CATEGORIES` 배열이 탭 목록이고, 각 항목의 `category` 값이 그 항목이 속한 탭입니다.

```js
const EXPERIENCE_CATEGORIES = ["Library", "Exhibition", "Video", "Recording"];
```

- 탭 이름을 바꾸거나 추가/삭제하려면 이 배열을 수정하세요.
- 각 항목을 어느 탭에 넣을지는 항목의 `category` 값을 `EXPERIENCE_CATEGORIES` 안의 값 중 하나로 맞춰주면 됩니다.

### 썸네일 이미지 넣기

포트폴리오 목록, 경력(Experience) 목록, GAME PLAY 목록에 있는 검은 자리표시자 박스에 실제 이미지를 넣을 수 있습니다.

1. 이미지 파일을 `assets/thumbnails/` 폴더 안에 넣습니다. (예: `monster-p.jpg`)
2. `data.js`에서 해당 항목에 `thumbnail` 값을 추가합니다.

```js
// 포트폴리오
{
  title: "몬스터_P의 거짓",
  thumbnail: "assets/thumbnails/monster-p.jpg",
  ...
}

// 경력(Experience)
{
  org: "한국형 효과음원 구축 사업",
  thumbnail: "assets/thumbnails/k-sound-library.jpg",
  ...
}

// GAME PLAY (About 페이지)
{ title: "Lies of P", hours: "19.2h", thumbnail: "assets/thumbnails/lies-of-p.jpg" }
```

`thumbnail`을 넣지 않거나 빈 문자열로 두면 지금처럼 어두운 자리표시자가 그대로 보입니다. 이미지 파일명과 확장자(.jpg, .png 등)만 정확히 맞춰주면 됩니다.

---

## 3. 파일 구조

```
index.html          전체 사이트 (Home + About + Portfolio + Experience가 한 파일 안에서 이어짐)
assets/
  style.css          공용 디자인 (거의 수정할 일 없음)
  data.js            ★ 내용은 여기서만 수정
  common.js          사이드바 렌더링 / 영상 임베드 / 스크롤 위치 감지 로직 (거의 수정할 일 없음)
  thumbnails/        ★ 썸네일 이미지 파일을 여기 넣기
```
