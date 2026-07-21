import { useEffect } from "react";

export default function useAdminDashboard() {

  /* =========================================================
     1. NEURAL GRID CANVAS
  ========================================================= */
  useEffect(() => {

    const canvas = document.getElementById("neural-canvas");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let W = 0;
    let H = 0;
    let nodes = [];
    let animId;

    const NODE_COUNT = 55;
    const MAX_DIST = 160;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function initNodes() {

      nodes = [];

      for (let i = 0; i < NODE_COUNT; i++) {

        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 2 + 1,
          pulse: Math.random() * Math.PI * 2
        });

      }
    }

    function draw() {

      ctx.clearRect(0, 0, W, H);

      /* Connections */

      for (let i = 0; i < nodes.length; i++) {

        for (let j = i + 1; j < nodes.length; j++) {

          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < MAX_DIST) {

            const alpha =
              (1 - distance / MAX_DIST) * 0.45;

            const gradient =
              ctx.createLinearGradient(
                nodes[i].x,
                nodes[i].y,
                nodes[j].x,
                nodes[j].y
              );

            gradient.addColorStop(
              0,
              `rgba(123,47,255,${alpha})`
            );

            gradient.addColorStop(
              1,
              `rgba(0,255,209,${alpha * 0.5})`
            );

            ctx.beginPath();

            ctx.strokeStyle = gradient;

            ctx.lineWidth = 0.8;

            ctx.moveTo(
              nodes[i].x,
              nodes[i].y
            );

            ctx.lineTo(
              nodes[j].x,
              nodes[j].y
            );

            ctx.stroke();
          }
        }
      }

      /* Nodes */

      nodes.forEach((node) => {

        node.pulse += 0.025;

        const glow =
          Math.sin(node.pulse) * 0.5 + 0.5;

        /* Outer glow */

        const gradient =
          ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            node.r * 5
          );

        gradient.addColorStop(
          0,
          `rgba(185,79,255,${0.6 + glow * 0.4})`
        );

        gradient.addColorStop(
          1,
          "rgba(123,47,255,0)"
        );

        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.r * 5,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;

        ctx.fill();

        /* Inner node */

        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(0,255,209,${0.7 + glow * 0.3})`;

        ctx.fill();

        /* Movement */

        node.x += node.vx;
        node.y += node.vy;

        if (
          node.x < -20 ||
          node.x > W + 20
        ) {
          node.vx *= -1;
        }

        if (
          node.y < -20 ||
          node.y > H + 20
        ) {
          node.vy *= -1;
        }

      });

      animId = requestAnimationFrame(draw);
    }

    function handleResize() {

      resize();

      initNodes();

    }

    window.addEventListener(
      "resize",
      handleResize
    );

    resize();

    initNodes();

    draw();

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

      cancelAnimationFrame(animId);

    };

  }, []);


  /* =========================================================
     2. CHART BARS
  ========================================================= */
  useEffect(() => {

    const data = [
      {
        label: "MON",
        val: 62,
        peak: false
      },
      {
        label: "TUE",
        val: 74,
        peak: false
      },
      {
        label: "WED",
        val: 55,
        peak: false
      },
      {
        label: "THU",
        val: 88,
        peak: false
      },
      {
        label: "FRI",
        val: 97,
        peak: true
      },
      {
        label: "SAT",
        val: 82,
        peak: false
      },
      {
        label: "SUN",
        val: 91,
        peak: false
      }
    ];

    const chart =
      document.getElementById("mainChart");

    if (!chart) return;

    /*
      Important:
      React should normally render these bars itself.
      This fallback works with your existing HTML.
    */

    chart.innerHTML = "";

    const maxH = 110;

    data.forEach((item) => {

      const height =
        Math.round(
          (item.val / 100) * maxH
        );

      const column =
        document.createElement("div");

      column.className =
        "chart-bar-col";

      const bar =
        document.createElement("div");

      bar.className =
        `chart-bar ${
          item.peak ? "highlight" : ""
        }`;

      bar.style.height =
        `${height}px`;

      bar.dataset.val =
        `${item.val}%`;

      const label =
        document.createElement("span");

      label.className =
        "chart-label";

      label.textContent =
        item.label;

      column.appendChild(bar);

      column.appendChild(label);

      chart.appendChild(column);

    });

  }, []);


  /* =========================================================
     3. COUNT UP ANIMATION
  ========================================================= */
  useEffect(() => {

    const elements =
      document.querySelectorAll(
        ".stat-value[data-target]"
      );

    const timers = [];

    elements.forEach((element) => {

      const target =
        parseInt(
          element.dataset.target,
          10
        );

      const prefix =
        element.dataset.prefix || "";

      let current = 0;

      const increment =
        Math.ceil(target / 60);

      const timer =
        setInterval(() => {

          current =
            Math.min(
              current + increment,
              target
            );

          element.textContent =
            prefix +
            current.toLocaleString();

          if (current >= target) {

            clearInterval(timer);

          }

        }, 22);

      timers.push(timer);

    });

    return () => {

      timers.forEach(
        (timer) => clearInterval(timer)
      );

    };

  }, []);


  /* =========================================================
     4. SERVER CLOCK
  ========================================================= */
  useEffect(() => {

    const clock =
      document.getElementById(
        "serverTime"
      );

    if (!clock) return;

    function updateClock() {

      const now = new Date();

      clock.textContent =
        now
          .toUTCString()
          .slice(17, 25) +
        " UTC";

    }

    updateClock();

    const timer =
      setInterval(
        updateClock,
        1000
      );

    return () => {

      clearInterval(timer);

    };

  }, []);


  /* =========================================================
     5. COUNTDOWN TIMER
  ========================================================= */
  useEffect(() => {

    const countdown =
      document.getElementById(
        "countdown1"
      );

    if (!countdown) return;

    let seconds =
      2 * 3600 +
      14 * 60 +
      38;

    function updateCountdown() {

      seconds =
        Math.max(
          0,
          seconds - 1
        );

      const hours =
        String(
          Math.floor(
            seconds / 3600
          )
        ).padStart(2, "0");

      const minutes =
        String(
          Math.floor(
            (seconds % 3600) / 60
          )
        ).padStart(2, "0");

      const secs =
        String(
          seconds % 60
        ).padStart(2, "0");

      countdown.textContent =
        `${hours}:${minutes}:${secs}`;

    }

    const timer =
      setInterval(
        updateCountdown,
        1000
      );

    return () => {

      clearInterval(timer);

    };

  }, []);


  /* =========================================================
     6. CONSOLE BLINK
  ========================================================= */
  useEffect(() => {

    const blink =
      document.getElementById(
        "consoleBlink"
      );

    if (!blink) return;

    const timer =
      setInterval(() => {

        blink.style.opacity =
          blink.style.opacity === "0"
            ? "1"
            : "0";

      }, 600);

    return () => {

      clearInterval(timer);

    };

  }, []);


  /* =========================================================
     7. SIDEBAR MOBILE
     ========================================================= */
  useEffect(() => {

    const sidebar =
      document.getElementById(
        "sidebar"
      );

    const overlay =
      document.getElementById(
        "sidebarOverlay"
      );

    const menuButton =
      document.getElementById(
        "menuToggle"
      );

    if (
      !sidebar ||
      !overlay ||
      !menuButton
    ) {
      return;
    }

    function toggleSidebar() {

      sidebar.classList.toggle(
        "open"
      );

      overlay.classList.toggle(
        "open"
      );

    }

    function closeSidebar() {

      sidebar.classList.remove(
        "open"
      );

      overlay.classList.remove(
        "open"
      );

    }

    menuButton.addEventListener(
      "click",
      toggleSidebar
    );

    overlay.addEventListener(
      "click",
      closeSidebar
    );

    return () => {

      menuButton.removeEventListener(
        "click",
        toggleSidebar
      );

      overlay.removeEventListener(
        "click",
        closeSidebar
      );

    };

  }, []);


  /* =========================================================
     8. NAV LINK ACTIVE
  ========================================================= */
  useEffect(() => {

    const links =
      document.querySelectorAll(
        ".nav-link-custom"
      );

    function handleClick(event) {

      links.forEach((link) => {

        link.classList.remove(
          "active"
        );

      });

      event.currentTarget.classList.add(
        "active"
      );

    }

    links.forEach((link) => {

      link.addEventListener(
        "click",
        handleClick
      );

    });

    return () => {

      links.forEach((link) => {

        link.removeEventListener(
          "click",
          handleClick
        );

      });

    };

  }, []);


  /* =========================================================
     9. LIVE ACTIVITY FEED
  ========================================================= */
  useEffect(() => {

    const events = [

      [
        "v",
        "bi-person-plus",
        "<strong>StarKnight</strong> joined from mobile",
        "just now"
      ],

      [
        "c",
        "bi-hdd-network",
        "<strong>US-East-02</strong> scaling up instances",
        "just now"
      ],

      [
        "g",
        "bi-coin",
        "<strong>$620</strong> gem pack purchased × 3",
        "just now"
      ],

      [
        "p",
        "bi-exclamation-triangle",
        "Ping spike detected on <strong>EU-West-07</strong>",
        "just now"
      ],

      [
        "g",
        "bi-award",
        "<strong>VortexPrime</strong> earned Prestige badge",
        "just now"
      ]

    ];

    let index = 0;

    const timer =
      setInterval(() => {

        const badge =
          document.querySelector(
            ".panel .nav-badge.cyan"
          );

        if (!badge) return;

        const feeds =
          document.querySelectorAll(
            ".panel .panel-body"
          );

        if (!feeds[1]) return;

        const event =
          events[
            index % events.length
          ];

        index++;

        const item =
          document.createElement(
            "div"
          );

        item.className =
          "activity-item";

        item.style.animation =
          "rowSlide 0.4s ease both";

        item.innerHTML = `

          <div class="activity-icon ${event[0]}">

            <i class="bi ${event[1]}"></i>

          </div>

          <div>

            <div class="activity-desc">

              ${event[2]}

            </div>

            <div class="activity-time">

              ${event[3]}

            </div>

          </div>

        `;

        feeds[1].insertBefore(
          item,
          feeds[1].firstChild
        );

        const items =
          feeds[1].querySelectorAll(
            ".activity-item"
          );

        if (items.length > 7) {

          items[
            items.length - 1
          ].remove();

        }

      }, 6000);

    return () => {

      clearInterval(timer);

    };

  }, []);

}