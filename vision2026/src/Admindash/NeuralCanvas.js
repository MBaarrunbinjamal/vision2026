import { useEffect, useRef } from "react";

export default function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W, H;
    let nodes = [];
    const NODE_COUNT = 55;
    const MAX_DIST = 160;
    let animId;

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
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < MAX_DIST) {
            const a = (1 - d / MAX_DIST) * 0.45;

            const g = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );

            g.addColorStop(0, `rgba(123,47,255,${a})`);
            g.addColorStop(1, `rgba(0,255,209,${a * 0.5})`);

            ctx.beginPath();
            ctx.strokeStyle = g;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        n.pulse += 0.025;
        const glow = Math.sin(n.pulse) * 0.5 + 0.5;

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
        grad.addColorStop(0, `rgba(185,79,255,${0.6 + glow * 0.4})`);
        grad.addColorStop(1, "rgba(123,47,255,0)");

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,209,${0.7 + glow * 0.3})`;
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -20 || n.x > W + 20) n.vx *= -1;
        if (n.y < -20 || n.y > H + 20) n.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    initNodes();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initNodes();
    });

    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} id="neural-canvas" />;
}