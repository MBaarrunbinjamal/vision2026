function Erm() {
  return (
    // <!-- ── ROW 4: EVENTS + RESOURCE METERS ── -->
  <div className="row g-3 mb-4">

    {/* <!-- Upcoming Events --> */}
    <div className="col-md-6 col-xl-4">
      <div className="panel" style={{ animationDelay: "0.1s" }}>
        <div className="panel-head">
          <div>
            <div className="section-eyebrow">SCHEDULE</div>
            <div className="section-title" style={{ fontSize: "14px" }}>Upcoming Events</div>
          </div>
          <button className="btn-glow outline" style={{ padding: "5px 12px", fontSize: "11px" }}>View All</button>
        </div>
        <div className="panel-body">

          <div className="event-card">
            <span className="event-type tournament">TOURNAMENT</span>
            <div className="event-title">Midnight Cup Grand Finals</div>
            <div className="event-meta">128 teams · Season 4 · Prize: $50,000</div>
            <div className="event-countdown" id="countdown1">02:14:38</div>
          </div>

          <div className="event-card">
            <span className="event-type maintenance">MAINTENANCE</span>
            <div className="event-title">SA-BR-02 Emergency Restore</div>
            <div className="event-meta">ETA: 45 min · Auto-notify players</div>
          </div>

          <div className="event-card">
            <span className="event-type update">PATCH</span>
            <div className="event-title">v4.7.1 Balance Update</div>
            <div className="event-meta">Rolling deploy · Starts in 3h 20m</div>
          </div>

          <div className="event-card">
            <span className="event-type reward">SEASON PASS</span>
            <div className="event-title">Battle Pass Season 5 Launch</div>
            <div className="event-meta">Expires in 7 days · 14,200 active holders</div>
          </div>

        </div>
      </div>
    </div>

    {/* <!-- Resource Meters --> */}
    <div className="col-md-6 col-xl-4">
      <div className="panel" style={{ animationDelay: "0.15s" }}>
        <div className="panel-head">
          <div>
            <div className="section-eyebrow">RESOURCES</div>
            <div className="section-title" style={{ fontSize: "14px" }}>System Load</div>
          </div>
        </div>
        <div className="panel-body">

          {/* <!-- Metrics --> */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>CPU Usage</span>
              <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: "12px", color: "var(--cyan)" }}>67%</span>
            </div>
            <div style={{ height: "6px", background: "rgba(123,47,255,0.12)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ width: "67%", height: "100%", background: "linear-gradient(90deg,var(--violet),var(--cyan))", borderRadius: "3px", boxShadow: "0 0 10px rgba(0,255,209,0.4)", animation: "fillBar 1.4s ease both" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Memory</span>
              <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: "12px", color: "var(--purple)" }}>83%</span>
            </div>
            <div style={{ height: "6px", background: "rgba(123,47,255,0.12)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ width: "83%", height: "100%", background: "linear-gradient(90deg,var(--violet),var(--purple))", borderRadius: "3px", boxShadow: "0 0 10px rgba(185,79,255,0.4)", animation: "fillBar 1.5s ease both" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Network I/O</span>
              <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: "12px", color: "var(--gold)" }}>91%</span>
            </div>
            <div style={{ height: "6px", background: "rgba(123,47,255,0.12)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ width: "91%", height: "100%", background: "linear-gradient(90deg,var(--gold),var(--pink))", borderRadius: "3px", boxShadow: "0 0 10px rgba(255,184,48,0.4)", animation: "fillBar 1.6s ease both" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Storage</span>
              <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: "12px", color: "var(--cyan)" }}>44%</span>
            </div>
            <div style={{ height: "6px", background: "rgba(123,47,255,0.12)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ width: "44%", height: "100%", background: "linear-gradient(90deg,var(--cyan),var(--violet))", borderRadius: "3px", boxShadow: "0 0 10px rgba(0,255,209,0.3)", animation: "fillBar 1.3s ease both" }}></div>
            </div>
          </div>

          {/* <!-- Mini stat row --> */}
          <div className="row g-2 mt-1">
            <div className="col-6">
              <div style={{ padding: "12px", background: "rgba(123,47,255,0.08)", border: "1px solid var(--border)", borderRadius: "10px", textAlign: "center" }}>
                <div style={{
  fontFamily: "'Rajdhani', sans-serif",
  fontSize: "22px",
  fontWeight: 700,
  color: "var(--cyan)"
}}>12ms</div>
                <div style={{ fontSize: "10px", color: "var(--text-dim)" }}>Avg. Ping</div>
              </div>
            </div>
            <div className="col-6">
              <div style={{ padding: "12px", background: "rgba(123,47,255,0.08)", border: "1px solid var(--border)", borderRadius: "10px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "22px", fontWeight: 700, color: "var(--purple)" }}>99.97%</div>
                <div style={{ fontSize: "10px", color: "var(--text-dim)" }}>Uptime</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* <!-- Quick Actions --> */}
    <div className="col-xl-4">
      <div className="panel" style={{ animationDelay: "0.2s" }}>
        <div className="panel-head">
          <div>
            <div className="section-eyebrow">CONTROLS</div>
            <div className="section-title" style={{ fontSize: "14px" }}>Quick Actions</div>
          </div>
        </div>
        <div className="panel-body">

          <div className="row g-2">
            <div className="col-6">
              <button className="w-100 btn-glow violet" style={{
  padding: "14px",
  flexDirection: "column",
  height: "auto",
  gap: "8px",
  borderRadius: "12px",
  fontSize: "11px"
}}>
                <i className="bi bi-broadcast" style={{ fontSize: "22px" }}></i>
                Broadcast Alert
              </button>
            </div>
            <div className="col-6">
              <button className="w-100 btn-glow outline" style={{
  padding: "14px",
  flexDirection: "column",
  height: "auto",
  gap: "8px",
  borderRadius: "12px",
  fontSize: "11px"
}}>
                <i className="bi bi-arrow-clockwise" style={{ fontSize: "22px" }}></i>
                Restart Server
              </button>
            </div>
            <div className="col-6">
              <button className="w-100 btn-glow outline" style={{
  padding: "14px",
  flexDirection: "column",
  height: "auto",
  gap: "8px",
  borderRadius: "12px",
  fontSize: "11px"
}}>
                <i className="bi bi-people" style={{ fontSize: "22px" }}></i>
                Kick All Players
              </button>
            </div>
            <div className="col-6">
              <button className="w-100 btn-glow cyan-outline" style={{
  padding: "14px",
  flexDirection: "column",
  height: "auto",
  gap: "8px",
  borderRadius: "12px",
  fontSize: "11px"
}}>
                <i className="bi bi-gift" style={{ fontSize: "22px" }}></i>
                Mass Reward
              </button>
            </div>
            <div className="col-6">
              <button className="w-100 btn-glow outline" style={{
  padding: "14px",
  flexDirection: "column",
  height: "auto",
  gap: "8px",
  borderRadius: "12px",
  fontSize: "11px"
}}>
                <i className="bi bi-lock" style={{ fontSize: "22px" }}></i>
                Lock Servers
              </button>
            </div>
            <div className="col-6">
              <button className="w-100 btn-glow outline" style={{
  padding: "14px",
  flexDirection: "column",
  height: "auto",
  gap: "8px",
  borderRadius: "12px",
  fontSize: "11px",
  borderColor: "rgba(255,45,120,0.3)",
  color: "var(--pink)"
}}>
                <i className="bi bi-exclamation-triangle" style={{ fontSize: "22px" }}></i>
                Emergency Stop
              </button>
            </div>
          </div>

          {/* <!-- Console snippet --> */}
          <div style={{
  marginTop: "18px",
  background: "rgba(0,0,0,0.4)",
  border: "1px solid rgba(123,47,255,0.2)",
  borderRadius: "10px",
  padding: "14px",
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: "11px"
}}>
            <div style={{
  color: "var(--text-dim)",
  marginBottom: "8px"
}}>// CONSOLE</div>
            <div style={{ color: "var(--cyan)" }}>&gt; sys.status all OK</div>
            <div style={{ color: "var(--purple)" }}>&gt; players.active 24891</div>
            <div style={{ color: "var(--gold)" }}>&gt; WARN ASIA-SEA-03 load 94%</div>
            <div style={{ color: "var(--pink)" }}>&gt; ERR SA-BR-02 connection lost</div>
            <div style={{ color: "var(--text-dim)" }} id="consoleBlink">█</div>
          </div>

        </div>
      </div>
    </div>

  </div>
  );
}
export default Erm;