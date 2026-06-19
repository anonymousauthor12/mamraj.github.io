/* =====================================================================
   MAMRAJ GOVT. GIRLS HIGHER SECONDARY SCHOOL
   Shared header / footer / gallery components + photo loader + lightbox
   ---------------------------------------------------------------------
   Photos load LIVE from the GitHub repo's images/<category> folders.
   To add/remove photos, just upload/delete files in those folders on
   github.com — no code editing needed. (See HOW-TO-ADD-PHOTOS.md)
   ===================================================================== */

const GALLERY_REPO = { owner: 'anonymousauthor12', repo: 'mamraj.github.io', branch: 'main' };

const SCHOOL = {
  name: 'Mamraj Govt. Girls Higher Secondary School',
  full: 'MAMRAJ GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL',
  place: 'Payagpur, Bahraich',
  logo: 'images/logo.jpg'
};

/* main navigation */
const NAV = [
  { key: 'home',     label: 'Home',      href: 'Home.html' },
  { key: 'gallery',  label: 'Gallery',   href: 'Gallery.html' },
  { key: 'courses',  label: 'Courses',   href: 'Courses.html' },
  { key: 'faculty',  label: 'Faculties', href: 'Faculties.html' },
  { key: 'contact',  label: 'Contact',   href: 'ContactUs.html' },
];

/* gallery categories: key, label, page, folder */
const CATEGORIES = [
  { key: 'maingate',                 label: 'Main Gate',         page: 'maingate.html',                 folder: 'images/maingate' },
  { key: 'mainbuilding',             label: 'Main Building',     page: 'mainbuilding.html',             folder: 'images/mainbuilding' },
  { key: 'classroom',                label: 'Classroom',         page: 'classroom.html',                folder: 'images/classroom' },
  { key: 'staff',                    label: 'Teaching Staff',    page: 'staff.html',                    folder: 'images/staff' },
  { key: 'prayersabha',              label: 'Prayer Sabha',      page: 'prayersabha.html',              folder: 'images/prayersabha' },
  { key: 'library',                  label: 'Library',           page: 'library.html',                  folder: 'images/library' },
  { key: 'sciencelab',               label: 'Science Lab',       page: 'sciencelab.html',               folder: 'images/sciencelab' },
  { key: 'playground',               label: 'Play Ground',       page: 'playground.html',               folder: 'images/playground' },
  { key: 'greenery',                 label: 'Greenery',          page: 'greenery.html',                 folder: 'images/greenery' },
  { key: 'extracurricular_activity', label: 'Extracurricular',   page: 'extracurricular_activity.html', folder: 'images/extracurricular_activity' },
];

/* ---------------- header ---------------- */
class SiteHeader extends HTMLElement{
  connectedCallback(){
    const active = this.getAttribute('active') || '';
    const links = NAV.map(n =>
      `<a href="${n.href}" class="${n.key===active?'active':''}">${n.label}</a>`).join('');
    this.innerHTML = `
      <nav class="nav" id="siteNav">
        <div class="nav__inner">
          <a class="brand" href="Home.html">
            <img src="${SCHOOL.logo}" alt="School logo">
            <span class="brand__txt">
              <span class="brand__name">${SCHOOL.name}</span>
              <span class="brand__sub">${SCHOOL.place} · Est. school</span>
            </span>
          </a>
          <button class="nav__toggle" aria-label="Menu" id="navToggle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <div class="nav__links" id="navLinks">
            ${links}
            <a class="btn btn-primary" href="ContactUs.html">Enquire</a>
          </div>
        </div>
      </nav>`;

    const nav = this.querySelector('#siteNav');
    const toggle = this.querySelector('#navToggle');
    const linksEl = this.querySelector('#navLinks');
    toggle.addEventListener('click', () => linksEl.classList.toggle('open'));
    linksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => linksEl.classList.remove('open')));
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }
}
customElements.define('site-header', SiteHeader);

/* ---------------- gallery sub-nav ---------------- */
class GalleryNav extends HTMLElement{
  connectedCallback(){
    const active = this.getAttribute('active') || '';
    this.innerHTML = `
      <div class="gnav">
        <div class="gnav__inner">
          ${CATEGORIES.map(c => `<a href="${c.page}" class="${c.key===active?'active':''}">${c.label}</a>`).join('')}
        </div>
      </div>`;
  }
}
customElements.define('gallery-nav', GalleryNav);

/* ---------------- footer ---------------- */
class SiteFooter extends HTMLElement{
  connectedCallback(){
    const year = this.getAttribute('year') || '';
    this.innerHTML = `
      <footer class="footer">
        <div class="footer__top">
          <div>
            <div class="footer__brand">
              <img src="${SCHOOL.logo}" alt="logo">
              <b>${SCHOOL.full}</b>
            </div>
            <p style="font-size:.92rem">Noor Pur, Payagpur (Bahraich),<br>Uttar Pradesh — Pin 271871</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li><a href="https://ncert.nic.in/" target="_blank" rel="noopener">NCERT Books</a></li>
              <li><a href="https://upmsp.edu.in/" target="_blank" rel="noopener">UPMSP</a></li>
              <li><a href="https://web.umang.gov.in/landing/" target="_blank" rel="noopener">Umang</a></li>
              <li><a href="https://bahraich.nic.in/" target="_blank" rel="noopener">Bahraich Official</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Principal: Mrs. Varsha Gautam</li>
              <li><a href="tel:+919450832465">+91 94508 32465</a></li>
              <li><a href="mailto:varshavasu27@gmail.com">varshavasu27@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <div>© ${year} ${SCHOOL.full}. All Rights Reserved.</div>
        </div>
      </footer>`;
  }
}
customElements.define('site-footer', SiteFooter);

/* =====================================================================
   PHOTO LOADER  (masonry tiles)  — element: <div class="masonry" data-gallery="images/x">
   ===================================================================== */
async function loadGallery(container){
  const folder = container.getAttribute('data-gallery');
  const limit = parseInt(container.getAttribute('data-limit') || '0', 10);
  if(!folder) return;
  container.innerHTML = `<div class="loading"><div class="spinner"></div>Loading photos…</div>`;

  const api = `https://api.github.com/repos/${GALLERY_REPO.owner}/${GALLERY_REPO.repo}/contents/${folder}?ref=${GALLERY_REPO.branch}`;
  try{
    const res = await fetch(api);
    if(!res.ok) throw new Error('GitHub API ' + res.status);
    let images = (await res.json())
      .filter(f => f.type === 'file' && /\.(jpe?g|png|gif|webp|bmp)$/i.test(f.name))
      .sort((a,b) => a.name.localeCompare(b.name))
      .map(f => f.download_url);
    if(limit > 0) images = images.slice(0, limit);

    if(images.length === 0){ container.innerHTML = `<div class="empty">No photos in this section yet.</div>`; return; }

    container.classList.add('masonry');
    container.innerHTML = images.map(url =>
      `<a class="tile" href="${url}" data-lb><img loading="lazy" src="${url}" alt="School photo"></a>`).join('');
    wireLightbox(container);
  }catch(err){
    console.error('Gallery load failed:', err);
    container.innerHTML = `<div class="errmsg">Could not load photos right now. Please refresh in a little while.</div>`;
  }
}

/* =====================================================================
   LIGHTBOX
   ===================================================================== */
let LB; let lbImages = []; let lbIndex = 0;
function ensureLightbox(){
  if(LB) return LB;
  LB = document.createElement('div');
  LB.className = 'lightbox';
  LB.innerHTML = `
    <button class="lb-btn lb-close" aria-label="Close">✕</button>
    <button class="lb-btn lb-prev" aria-label="Previous">‹</button>
    <img alt="Photo">
    <button class="lb-btn lb-next" aria-label="Next">›</button>`;
  document.body.appendChild(LB);
  const imgEl = LB.querySelector('img');
  const show = () => { imgEl.src = lbImages[lbIndex]; };
  const close = () => LB.classList.remove('open');
  LB.querySelector('.lb-close').addEventListener('click', close);
  LB.querySelector('.lb-prev').addEventListener('click', e => { e.stopPropagation(); lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; show(); });
  LB.querySelector('.lb-next').addEventListener('click', e => { e.stopPropagation(); lbIndex = (lbIndex + 1) % lbImages.length; show(); });
  LB.addEventListener('click', e => { if(e.target === LB) close(); });
  document.addEventListener('keydown', e => {
    if(!LB.classList.contains('open')) return;
    if(e.key === 'Escape') close();
    if(e.key === 'ArrowLeft') LB.querySelector('.lb-prev').click();
    if(e.key === 'ArrowRight') LB.querySelector('.lb-next').click();
  });
  LB._show = show;
  return LB;
}
function wireLightbox(container){
  const tiles = [...container.querySelectorAll('[data-lb]')];
  const urls = tiles.map(t => t.getAttribute('href'));
  tiles.forEach((t, i) => t.addEventListener('click', e => {
    e.preventDefault();
    ensureLightbox();
    lbImages = urls; lbIndex = i; LB._show(); LB.classList.add('open');
  }));
}

/* ---------------- gallery category cards (Gallery landing) ---------------- */
async function loadCategoryCovers(){
  const cards = document.querySelectorAll('[data-cover]');
  for(const card of cards){
    const folder = card.getAttribute('data-cover');
    try{
      const res = await fetch(`https://api.github.com/repos/${GALLERY_REPO.owner}/${GALLERY_REPO.repo}/contents/${folder}?ref=${GALLERY_REPO.branch}`);
      if(!res.ok) continue;
      const imgs = (await res.json()).filter(f => f.type==='file' && /\.(jpe?g|png|gif|webp)$/i.test(f.name));
      if(imgs.length){ const im = card.querySelector('img'); if(im) im.src = imgs[0].download_url; }
    }catch(e){ /* keep placeholder */ }
  }
}

/* ---------------- expose categories for pages that build markup ---------------- */
window.SITE = { CATEGORIES, GALLERY_REPO };

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-gallery]').forEach(loadGallery);
  loadCategoryCovers();
});
