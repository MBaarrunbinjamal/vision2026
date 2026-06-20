// ── Custom Cursor Setup
export const initCustomCursor = () => {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  function animCursor() {
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';

    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;

    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';

    requestAnimationFrame(animCursor);
  }

  animCursor();

  document.querySelectorAll('a, button, .hex-cell').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'var(--neon-pink)';
    });

    el.addEventListener('mouseleave', () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(0,245,255,.5)';
    });
  });
};


// ── Navbar Scroll Effect
export const initNavbarScroll = () => {
  window.addEventListener('scroll', () => {
    document
      .getElementById('mainNav')
      ?.classList.toggle('scrolled', window.scrollY > 50);
  });
};


// ── Scroll Reveal
export const initScrollReveal = () => {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });
};


// ── Counter Animation
const animateCounter = (el, target, suffix = '', decimals = 0) => {
  const duration = 2200;
  const start = performance.now();

  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 4);
    const val = target * ease;

    el.textContent = decimals
      ? val.toFixed(1) + suffix
      : Math.floor(val).toLocaleString() + suffix;

    if (t < 1) requestAnimationFrame(step);
    else
      el.textContent =
        (decimals ? target.toFixed(1) : target.toLocaleString()) + suffix;
  }

  requestAnimationFrame(step);
};

export const initCounters = () => {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        const raw = el.dataset.target;
        const suffix = el.dataset.suffix || '';
        const val = parseFloat(raw);
        const decs = raw.includes('.') ? 1 : 0;

        animateCounter(el, val, suffix, decs);
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach((el) => {
    statsObserver.observe(el);
  });
};


// ── Progress Bars
export const initProgressBars = () => {
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const bars = e.target.querySelectorAll('.progress-neon .bar');

        bars.forEach((b) => {
          const w = b.style.width;
          b.style.width = '0';
          setTimeout(() => (b.style.width = w), 200);
        });

        progressObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.tournament-card').forEach((c) => {
    progressObserver.observe(c);
  });
};


// ── Hex Cell Click
export const initHexCells = () => {
  document.querySelectorAll('.hex-cell').forEach((cell) => {
    cell.addEventListener('click', function () {
      document.querySelectorAll('.hex-cell').forEach((c) =>
        c.classList.remove('active')
      );
      this.classList.add('active');
    });
  });
};


// ── Particle Burst
export const initParticleBurst = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleBurst {
      to {
        transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy)));
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  document.querySelectorAll('.btn-neon-primary').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      for (let i = 0; i < 8; i++) {
        const p = document.createElement('span');

        p.style.cssText = `
          position:fixed;
          left:${e.clientX}px;
          top:${e.clientY}px;
          width:6px;
          height:6px;
          border-radius:50%;
          background:${
            ['var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-green)'][i % 3]
          };
          pointer-events:none;
          z-index:99999;
          box-shadow:0 0 8px currentColor;
          transform:translate(-50%,-50%);
          animation: particleBurst .7s ease-out forwards;
          --dx:${(Math.random() - 0.5) * 120}px;
          --dy:${(Math.random() - 1) * 100}px;
        `;

        document.body.appendChild(p);

        setTimeout(() => p.remove(), 700);
      }
    });
  });
};


// ── MASTER INIT (runs everything)
export const initGlobalEffects = () => {
  initCustomCursor();
  initNavbarScroll();
  initScrollReveal();
  initCounters();
  initProgressBars();
  initHexCells();
  initParticleBurst();
};