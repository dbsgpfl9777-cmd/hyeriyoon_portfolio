// ============================================================
// 공용 유틸 함수
// ============================================================

// 사이드바 HTML을 그려주는 함수. 각 메뉴는 페이지 이동이 아니라 같은 페이지 안에서
// 해당 섹션으로 스크롤 이동합니다. active 표시는 스크롤 위치에 따라 자동으로 바뀝니다(common.js 하단 참고).
function renderSidebar(widthPx) {
  return `
    <div class="sidebar" style="width:${widthPx}px">
      <div>
        <a href="#top" style="display:block" aria-label="맨 위로">
          <div class="sidebar-brand-title">YOONHYERI</div>
          <div class="sidebar-brand-sub">PORTFOLIO</div>
        </a>
        <nav class="sidebar-nav" aria-label="주 메뉴">
          <a href="#about-section" data-nav="about"><span class="bar" aria-hidden="true"></span>ABOUT ME</a>
          <a href="#portfolio-section" data-nav="portfolio"><span class="bar" aria-hidden="true"></span>PORTFOLIO</a>
          <a href="#experience-section" data-nav="experience"><span class="bar" aria-hidden="true"></span>EXPERIENCE</a>
        </nav>
      </div>
      <nav class="sidebar-links" aria-label="외부 링크">
        <a href="${PROFILE.links.email}">
          <span class="ic ic-email" aria-hidden="true"></span>Email
        </a>
        <a href="${PROFILE.links.youtube}" target="_blank" rel="noreferrer">
          <span class="ic ic-youtube" aria-hidden="true"><span class="tri"></span></span>YouTube
        </a>
        <a href="${PROFILE.links.drive}" target="_blank" rel="noreferrer">
          <span class="ic ic-drive" aria-hidden="true"></span>Google Drive
        </a>
        <a href="${PROFILE.links.pdf}">
          <span class="ic ic-pdf" aria-hidden="true"></span>PDF / Resume
        </a>
      </nav>
    </div>`;
}

// 스크롤 위치에 따라 사이드바에서 현재 보고 있는 섹션을 강조 표시 (scroll-spy)
function initScrollSpy() {
  const sections = ['about-section', 'portfolio-section', 'experience-section']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  if (sections.length === 0) return;

  const setActive = (id) => {
    document.querySelectorAll('.sidebar-nav a').forEach(a => {
      const isActive = a.dataset.nav === id;
      a.classList.toggle('active', isActive);
      if (isActive) {
        a.setAttribute('aria-current', 'true');
      } else {
        a.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver((entries) => {
    // 화면 상단에 가장 가까이 걸쳐있는 섹션을 활성 상태로 표시
    const visible = entries.filter(e => e.isIntersecting);
    if (visible.length === 0) return;
    visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    const id = visible[0].target.id.replace('-section', '');
    setActive(id);
  }, { rootMargin: '-10% 0px -70% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));
}

// 각 섹션이 스크롤로 화면에 들어올 때 안 보이던 상태에서 페이드인되며 나타나는 효과
function initScrollReveal() {
  const sections = document.querySelectorAll('.content-section');
  if (sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // 한 번 나타난 뒤에는 다시 숨기지 않음
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  sections.forEach(sec => observer.observe(sec));
}

// 유튜브/구글드라이브 링크를 <iframe> embed URL로 변환.
// 인식 못 하는 링크는 null 반환 (자리표시자 유지).
function toEmbedUrl(url) {
  if (!url) return null;
  url = url.trim();

  // YouTube: watch?v=, youtu.be/, shorts/
  let m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{6,})/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;

  // Google Drive: /file/d/<id>/...
  m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (m) return `https://drive.google.com/file/d/${m[1]}/preview`;

  // 이미 embed 형태인 경우 그대로 사용
  if (url.includes('/embed/') || url.includes('/preview')) return url;

  return null;
}

// video-box(재생 전 자리표시자) 자리에 실제 영상을 넣거나, 없으면 자리표시자를 보여줌
function renderVideoBox(videoUrl, captionText) {
  const embed = toEmbedUrl(videoUrl);
  if (embed) {
    return `<div class="video-box"><iframe src="${embed}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  }
  return `
    <div class="video-box" role="img" aria-label="${captionText ? captionText + ' (등록된 영상 없음)' : '등록된 영상 없음'}">
      <div class="play-btn" aria-hidden="true"><div class="tri"></div></div>
      <div class="video-caption" aria-hidden="true">${captionText || 'VIDEO NOT SET'}</div>
    </div>`;
}
