(() => {
  const PLAN_SELECTOR = '#plan';
  const BUTTON_CLASS = 'back-to-plan';
  const PHOTO_VERSION = 'cathedral-web-links-4';
  const EPISODE_PHOTOS = {
    1: 'facade-wide',
    2: 'nef',
    3: 'vitraux-jeanne',
    4: 'transept',
    5: 'choeur',
    6: 'nef',
    7: 'vitraux-jeanne',
    8: 'orgue'
  };
  let photoById = {};

  const style = document.createElement('style');
  style.textContent = `
    .photo-rail-wrap{display:none!important}
    .jeanne-story-link{display:flex;align-items:center;gap:11px;background:linear-gradient(135deg,#351b2d,#5b2b46);color:#fff;border-radius:15px;padding:12px 13px;margin:10px 0;text-decoration:none;font:760 .82rem system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;box-shadow:0 6px 16px rgba(53,27,45,.14)}
    .jeanne-story-link strong{display:block}.jeanne-story-link small{display:block;color:#eadbe4;font-weight:600;margin-top:2px}.jeanne-story-link .arrow{margin-left:auto;font-size:1.3rem;color:#e2bb68}
    .episode-plan-return{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-top:12px;padding-top:10px;border-top:1px solid #eceee9;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    .back-to-plan,.photo-web-link{min-height:44px;display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:8px 13px;border:1px solid #b9c5c3;border-radius:999px;background:#fff;color:#0d3652;text-decoration:none;font-size:.76rem;font-weight:850;box-shadow:0 3px 10px rgba(13,54,82,.06)}
    .photo-web-link{background:#eef4f5;border-color:#c7d7da}
    .back-to-plan:focus-visible,.photo-web-link:focus-visible,.jeanne-story-link:focus-visible{outline:3px solid #d3a12e;outline-offset:3px}
    .plan-fab{position:fixed;z-index:29;right:12px;bottom:calc(18px + env(safe-area-inset-bottom));min-height:46px;display:none;align-items:center;gap:7px;padding:8px 13px;border:1px solid rgba(255,255,255,.35);border-radius:999px;background:#0d3652;color:#fff;text-decoration:none;font:850 .78rem system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.22)}
    .plan-fab.show{display:inline-flex}
    .player.on ~ .plan-fab{bottom:calc(104px + env(safe-area-inset-bottom))}
    @media(min-width:700px){.plan-fab{right:max(20px,calc((100vw - 980px)/2 + 20px))}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
  `;
  document.head.appendChild(style);

  function addStoryLink() {
    if (document.querySelector('.jeanne-story-link')) return;
    const anchor = document.querySelector('.walklink') || document.querySelector('.notice');
    if (!anchor) return;
    const link = document.createElement('a');
    link.href = '../jeanne-vers-le-roi/';
    link.className = 'jeanne-story-link';
    link.innerHTML = '<span>🎭</span><span><strong>Récit complémentaire · Jeanne veut parler au roi</strong><small>Un long épisode dialogué, de Vaucouleurs à Chinon</small></span><span class="arrow">›</span>';
    anchor.insertAdjacentElement('afterend', link);
  }

  function goToPlan(event) {
    const plan = document.querySelector(PLAN_SELECTOR);
    if (!plan) return;
    event.preventDefault();
    plan.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start'});
    if (!plan.hasAttribute('tabindex')) plan.setAttribute('tabindex', '-1');
    window.setTimeout(() => plan.focus({preventScroll: true}), 420);
  }

  function webPhotoForEpisode(episode) {
    const n = Number((episode.id || '').replace('episode-', ''));
    const photoId = EPISODE_PHOTOS[n];
    return photoById[photoId] || null;
  }

  function addEpisodeButtons() {
    document.querySelectorAll('.episode').forEach((episode) => {
      let wrap = episode.querySelector('.episode-plan-return');
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.className = 'episode-plan-return';
        episode.appendChild(wrap);
      }

      const photo = webPhotoForEpisode(episode);
      if (photo?.source_page && !wrap.querySelector('.photo-web-link')) {
        const photoLink = document.createElement('a');
        photoLink.href = photo.source_page;
        photoLink.target = '_blank';
        photoLink.rel = 'noopener';
        photoLink.className = 'photo-web-link';
        photoLink.setAttribute('aria-label', 'Ouvrir la ressource photographique sur le Web');
        photoLink.textContent = '🌐 Voir le repère photo';
        wrap.appendChild(photoLink);
      }

      if (!wrap.querySelector('.' + BUTTON_CLASS)) {
        const link = document.createElement('a');
        link.href = '#plan';
        link.className = BUTTON_CLASS;
        link.setAttribute('aria-label', 'Retour au plan de la visite');
        link.textContent = '🗺 Retour au plan';
        link.addEventListener('click', goToPlan);
        wrap.appendChild(link);
      }
    });
  }

  fetch(`photos.json?v=${PHOTO_VERSION}`)
    .then(r => r.ok ? r.json() : null)
    .then(cfg => {
      if (cfg?.photos) photoById = Object.fromEntries(cfg.photos.map(p => [p.id, p]));
      addEpisodeButtons();
    })
    .catch(() => addEpisodeButtons());

  const fab = document.createElement('a');
  fab.href = '#plan';
  fab.className = 'plan-fab';
  fab.setAttribute('aria-label', 'Revenir au plan de la cathédrale');
  fab.textContent = '🗺 Plan';
  fab.addEventListener('click', goToPlan);
  document.body.appendChild(fab);

  const plan = document.querySelector(PLAN_SELECTOR);
  if (plan && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      fab.classList.toggle('show', !entry.isIntersecting && window.scrollY > plan.offsetTop);
    }, {threshold: 0.05});
    observer.observe(plan);
  } else {
    window.addEventListener('scroll', () => {
      const p = document.querySelector(PLAN_SELECTOR);
      fab.classList.toggle('show', !!p && window.scrollY > p.offsetTop + p.offsetHeight);
    }, {passive: true});
  }

  const episodes = document.querySelector('#episodes');
  if (episodes) {
    const mo = new MutationObserver(addEpisodeButtons);
    mo.observe(episodes, {childList: true, subtree: false});
  }
  addStoryLink();
  addEpisodeButtons();
})();
