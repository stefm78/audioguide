(() => {
  const PLAN_SELECTOR = '#plan';
  const BUTTON_CLASS = 'back-to-plan';

  const style = document.createElement('style');
  style.textContent = `
    .episode-plan-return{display:flex;justify-content:flex-end;margin-top:12px;padding-top:10px;border-top:1px solid #eceee9;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    .back-to-plan{min-height:44px;display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:8px 13px;border:1px solid #b9c5c3;border-radius:999px;background:#fff;color:#0d3652;text-decoration:none;font-size:.76rem;font-weight:850;box-shadow:0 3px 10px rgba(13,54,82,.06)}
    .back-to-plan:focus-visible{outline:3px solid #d3a12e;outline-offset:3px}
    .plan-fab{position:fixed;z-index:29;right:12px;bottom:calc(18px + env(safe-area-inset-bottom));min-height:46px;display:none;align-items:center;gap:7px;padding:8px 13px;border:1px solid rgba(255,255,255,.35);border-radius:999px;background:#0d3652;color:#fff;text-decoration:none;font:850 .78rem system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.22)}
    .plan-fab.show{display:inline-flex}
    .player.on ~ .plan-fab{bottom:calc(104px + env(safe-area-inset-bottom))}
    @media(min-width:700px){.plan-fab{right:max(20px,calc((100vw - 980px)/2 + 20px))}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
  `;
  document.head.appendChild(style);

  function goToPlan(event) {
    const plan = document.querySelector(PLAN_SELECTOR);
    if (!plan) return;
    event.preventDefault();
    plan.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start'});
    if (!plan.hasAttribute('tabindex')) plan.setAttribute('tabindex', '-1');
    window.setTimeout(() => plan.focus({preventScroll: true}), 420);
  }

  function addEpisodeButtons() {
    document.querySelectorAll('.episode').forEach((episode) => {
      if (episode.querySelector('.' + BUTTON_CLASS)) return;
      const wrap = document.createElement('div');
      wrap.className = 'episode-plan-return';
      const link = document.createElement('a');
      link.href = '#plan';
      link.className = BUTTON_CLASS;
      link.setAttribute('aria-label', 'Retour au plan de la visite');
      link.textContent = '🗺 Retour au plan';
      link.addEventListener('click', goToPlan);
      wrap.appendChild(link);
      episode.appendChild(wrap);
    });
  }

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
  addEpisodeButtons();
})();
