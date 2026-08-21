// ============================================================
// 공용 유틸 함수
// ============================================================

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
        <a href="${PROFILE.links.pdf}">
          <span class="ic ic-pdf" aria-hidden="true"></span>PDF / Resume
        </a>
      </nav>
    </div>`;
}

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
    const visible = entries.filter(e => e.isIntersecting);
    if (visible.length === 0) return;
    visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    const id = visible[0].target.id.replace('-section', '');
    setActive(id);
  }, { rootMargin: '-10% 0px -70% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));
}

function initScrollReveal() {
  const sections = document.querySelectorAll('.content-section');
  if (sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  sections.forEach(sec => observer.observe(sec));
}

function toEmbedUrl(url) {
  if (!url) return null;
  url = url.trim();

  // YouTube: watch?v=, youtu.be/, shorts/
  let m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{6,})/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;

  // YouTube 재생목록
  m = url.match(/youtube\.com\/playlist\?list=([\w-]+)/);
  if (m) return `https://www.youtube.com/embed/videoseries?list=${m[1]}`;

  // Google Drive
  m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (m) return `https://drive.google.com/file/d/${m[1]}/preview`;

  if (url.includes('/embed/') || url.includes('/preview')) return url;

  return null;
}

function thumbStyle(imagePath) {
  if (!imagePath) return '';
  return ` style="background-image:url('${imagePath}')"`;
}

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

function renderDocBox(docUrl, title, thumbnail) {
  return `
    <a class="video-box doc-box" href="${docUrl}" target="_blank" rel="noreferrer" aria-label="${title} 기획서 문서 열기"${thumbStyle(thumbnail)}>
      <div class="doc-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M7 3h7l5 5v13H7V3Z"/>
          <path d="M14 3v5h5"/>
        </svg>
      </div>
      <div class="doc-caption">문서 보기 (Google Drive) →</div>
    </a>`;
}
