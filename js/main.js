// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.background = window.scrollY > 40 ? 'rgba(10,14,26,0.99)' : 'rgba(10,14,26,0.97)';
});

// ===== HAMBURGER MENU =====
function toggleMenu() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// ===== SEARCH =====
function doSearch() {
  const q = document.getElementById('searchInput')?.value.trim();
  if (q) alert('Searching for: "' + q + '"\n\nConnect to backend when hosted.');
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
});

// ===== MOBILE DROPDOWN TOGGLE =====
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = () => window.innerWidth <= 768;

  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (!isMobile()) return;
      const href = this.getAttribute('href');
      if (href && href !== '#') { window.location.href = href; return; }
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    });
  });
});

// ===== HERO PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.style.cssText = 'position:absolute;width:' + (Math.random()*3+1) + 'px;height:' + (Math.random()*3+1) + 'px;background:rgba(255,107,0,' + (Math.random()*0.5+0.1) + ');border-radius:50%;left:' + (Math.random()*100) + '%;top:' + (Math.random()*100) + '%;animation:floatP ' + (Math.random()*8+4) + 's linear infinite;animation-delay:-' + (Math.random()*8) + 's;';
    container.appendChild(p);
  }
}
const ps = document.createElement('style');
ps.textContent = '@keyframes floatP{0%{transform:translateY(0) translateX(0);opacity:1}50%{opacity:.4}100%{transform:translateY(-120px) translateX(30px);opacity:0}}';
document.head.appendChild(ps);

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let count = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      count += step;
      if (count >= target) { count = target; clearInterval(timer); }
      el.textContent = Math.floor(count);
    }, 25);
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.expertise-card,.why-card,.ind-item,.team-card,.feature-item,.benefit-box').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
}

// ===== COUNTER TRIGGER =====
function triggerCounters() {
  const statsEl = document.querySelector('.hero-stats');
  if (!statsEl) return;
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
  }, { threshold: 0.5 });
  obs.observe(statsEl);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initScrollReveal();
  triggerCounters();
});
