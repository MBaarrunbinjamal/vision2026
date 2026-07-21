function Tablestatus() {
  return (
    //  <!-- ── ROW 3: PLAYERS TABLE + SIDEBAR PANELS ── -->
  <div className="row g-3 mb-4">

    {/* <!-- Top Players Table --> */}
    <div className="col-xl-8">
      <div className="panel" style={{ animationDelay: "0.15s" }}>
        <div className="panel-head">
          <div>
            <div className="section-eyebrow">LEADERBOARD</div>
            <div className="section-title" style={{ fontSize: "14px" }}>Top Players This Season</div>
          </div>
          <button className="btn-glow cyan-outline" style={{ padding: "6px 14px", fontSize: "11px" }}><i className="bi bi-funnel"></i> Filter</button>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className="player-table">
            <thead>
              <tr>
                <th>#</th>
                <th>PLAYER</th>
                <th>RANK</th>
                <th>SCORE</th>
                <th>WIN RATE</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span style={{
  color: "var(--gold)",
  fontFamily: "'Share Tech Mono', monospace",
  fontWeight: 700
}}>01</span></td>
                <td>
                  <div className="d-flex align-items-center gap-10" style={{ gap: "10px" }}>
                    <div className="player-avatar-sm" style={{ background: "linear-gradient(135deg,#7B2FFF,#FF2D78)" }}>⚡</div>
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "13px" }}>NightFury</div>
                      <div style={{
  fontSize: "10px",
  color: "var(--text-dim)",
  fontFamily: "'Share Tech Mono', monospace"
}}>UID #0041</div>
                    </div>
                  </div>
                </td>
                <td><span className="rank-badge rank-s">S+</span></td>
                <td>
                  <div className="score-bar-wrap">
                    <span style={{
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: "11px",
  color: "var(--text-muted)",
  minWidth: "36px"
}}>98.2</span>
                    <div className="score-bar-bg"><div className="score-bar-fill" style={{ width: "98%" }}></div></div>
                  </div>
                </td>
                <td style={{ color: "var(--cyan)", fontFamily: "'Share Tech Mono', monospace", fontSize: "12px" }}>87.4%</td>
                <td><span className="status-pill online">ONLINE</span></td>
                <td><a href="#" style={{ color: "var(--text-dim)", fontSize: "14px" }}><i className="bi bi-three-dots"></i></a></td>
              </tr>
              <tr>
                <td><span style={{ color: "var(--text-muted)", fontFamily: "'Share Tech Mono', monospace", fontWeight: "700" }}>02</span></td>
                <td>
                  <div className="d-flex align-items-center gap-10" style={{ gap: "10px" }}>
                    <div className="player-avatar-sm" style={{ background: "linear-gradient(135deg,#00FFD1,#7B2FFF)" }}>🌀</div>
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "13px" }}>VortexPrime</div>
                      <div style={{
  fontSize: "10px",
  color: "var(--text-dim)",
  fontFamily: "'Share Tech Mono', monospace"
}}>UID #0089</div>
                    </div>
                  </div>
                </td>
                <td><span className="rank-badge rank-s">S</span></td>
                <td>
                  <div className="score-bar-wrap">
                    <span style={{
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: "11px",
  color: "var(--text-muted)",
  minWidth: "36px"
}}>91.7</span>
                    <div className="score-bar-bg"><div className="score-bar-fill" style={{ width: "91%" }}></div></div>
                  </div>
                </td>
                <td style={{ color: "var(--cyan)", fontFamily: "'Share Tech Mono', monospace", fontSize: "12px" }}>82.1%</td>
                <td><span className="status-pill online">ONLINE</span></td>
                <td><a href="#" style={{ color: "var(--text-dim)", fontSize: "14px" }}><i className="bi bi-three-dots"></i></a></td>
              </tr>
              <tr>
                <td><span style={{ color: "var(--text-muted)", fontFamily: "'Share Tech Mono', monospace", fontWeight: "700" }}>03</span></td>
                <td>
                  <div className="d-flex align-items-center gap-10" style={{ gap: "10px" }}>
                    <div className="player-avatar-sm" style={{ background: "linear-gradient(135deg,#FFB830,#FF2D78)" }}>🔥</div>
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "13px" }}>ArcaneWolf</div>
                      <div style={{
  fontSize: "10px",
  color: "var(--text-dim)",
  fontFamily: "'Share Tech Mono', monospace"
}}>UID #0112</div>
                    </div>
                  </div>
                </td>
                <td><span className="rank-badge rank-a">A+</span></td>
                <td>
                  <div className="score-bar-wrap">
                    <span style={{
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: "11px",
  color: "var(--text-muted)",
  minWidth: "36px"
}}>84.3</span>
                    <div className="score-bar-bg"><div className="score-bar-fill" style={{ width: "84%" }}></div></div>
                  </div>
                </td>
                <td style={{
  color: "var(--cyan)",
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: "12px"
}}>75.8%</td>
                <td><span className="status-pill online">ONLINE</span></td>
                <td><a href="#" style={{ color: "var(--text-dim)", fontSize: "14px" }}><i className="bi bi-three-dots"></i></a></td>
              </tr>
              <tr>
                <td><span style={{ color: "var(--text-muted)", fontFamily: "'Share Tech Mono', monospace", fontWeight: "700" }}>04</span></td>
                <td>
                  <div className="d-flex align-items-center gap-10" style={{ gap: "10px" }}>
                    <div className="player-avatar-sm" style={{ background: "linear-gradient(135deg,#B94FFF,#00FFD1)" }}>💠</div>
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "13px" }}>CrystalEdge</div>
                      <div style={{
  fontSize: "10px",
  color: "var(--text-dim)",
  fontFamily: "'Share Tech Mono', monospace"
}}>UID #0204</div>
                    </div>
                  </div>
                </td>
                <td><span className="rank-badge rank-a">A</span></td>
                <td>
                  <div className="score-bar-wrap">
                    <span style={{
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: "11px",
  color: "var(--text-muted)",
  minWidth: "36px"
}}>77.9</span>
                    <div className="score-bar-bg"><div className="score-bar-fill" style={{ width: "78%" }}></div></div>
                  </div>
                </td>
                <td style={{
  color: "var(--cyan)",
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: "12px"
}}>70.3%</td>
                <td><span className="status-pill offline">OFFLINE</span></td>
                <td><a href="#" style={{ color: "var(--text-dim)", fontSize: "14px" }}><i className="bi bi-three-dots"></i></a></td>
              </tr>
              <tr>
                <td><span style={{ color: "var(--text-muted)", fontFamily: "'Share Tech Mono', monospace", fontWeight: "700" }}>05</span></td>
                <td>
                  <div className="d-flex align-items-center gap-10" style={{ gap: "10px" }}>
                    <div className="player-avatar-sm" style={{ background: "linear-gradient(135deg,#FF2D78,#7B2FFF)" }}>☠️</div>
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "13px" }}>shadow_3k</div>
                      <div style={{
  fontSize: "10px",
  color: "var(--text-dim)",
  fontFamily: "'Share Tech Mono', monospace"
}}>UID #0359</div>
                    </div>
                  </div>
                </td>
                <td><span className="rank-badge rank-b">B+</span></td>
                <td>
                  <div className="score-bar-wrap">
                    <span style={{
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: "11px",
  color: "var(--text-muted)",
  minWidth: "36px"
}}>68.4</span>
                    <div className="score-bar-bg"><div className="score-bar-fill" style={{ width: "68%", background: "linear-gradient(90deg,var(--pink),rgba(255,45,120,0.4))" }}></div></div>
                  </div>
                </td>
                <td style={{ color: "var(--pink)", fontFamily: "'Share Tech Mono', monospace", fontSize: "12px" }}>61.2%</td>
                <td><span className="status-pill banned">FLAGGED</span></td>
                <td><a href="#" style={{ color: "var(--text-dim)", fontSize: "14px" }}><i className="bi bi-three-dots"></i></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* <!-- Server Status --> */}
    <div className="col-xl-4">
      <div className="panel" style={{ animationDelay: "0.2s" }}>
        <div className="panel-head">
          <div>
            <div className="section-eyebrow">INFRASTRUCTURE</div>
            <div className="section-title" style={{ fontSize: "14px" }}>Server Health</div>
          </div>
        </div>
        <div className="panel-body">

          <div className="server-node">
            <div className="server-indicator ok"></div>
            <div className="ring-wrap">
              <svg className="ring-svg" width="48" height="48" viewBox="0 0 48 48">
                <circle className="ring-track" cx="24" cy="24" r="20"/>
                <circle className="ring-fill" cx="24" cy="24" r="20"
                  stroke="var(--cyan)"
                  stroke-dasharray="125.66"
                  stroke-dashoffset="18"
                  style={{ transition: "stroke-dashoffset 1.5s ease" }}/>
              </svg>
              <div className="ring-label" style={{ color: "var(--cyan)" }}>86%</div>
            </div>
            <div>
              <div className="server-name">US-East-01</div>
              <div className="server-loc">New York · 1,240 players</div>
            </div>
            <div className="server-load-wrap">
              <div className="server-load-val ok">86%</div>
              <div className="server-load-label">LOAD</div>
            </div>
          </div>

          <div className="server-node">
            <div className="server-indicator ok"></div>
            <div className="ring-wrap">
              <svg className="ring-svg" width="48" height="48" viewBox="0 0 48 48">
                <circle className="ring-track" cx="24" cy="24" r="20"/>
                <circle className="ring-fill" cx="24" cy="24" r="20"
                  stroke="var(--cyan)"
                  stroke-dasharray="125.66"
                  stroke-dashoffset="38"
                  style={{ transition: "stroke-dashoffset 1.5s ease" }}/>
              </svg>
              <div className="ring-label" style={{ color: "var(--cyan)" }}>70%</div>
            </div>
            <div>
              <div className="server-name">EU-West-07</div>
              <div className="server-loc">London · 980 players</div>
            </div>
            <div className="server-load-wrap">
              <div className="server-load-val ok">70%</div>
              <div className="server-load-label">LOAD</div>
            </div>
          </div>

          <div className="server-node">
            <div className="server-indicator warn"></div>
            <div className="ring-wrap">
              <svg className="ring-svg" width="48" height="48" viewBox="0 0 48 48">
                <circle className="ring-track" cx="24" cy="24" r="20"/>
                <circle className="ring-fill" cx="24" cy="24" r="20"
                  stroke="var(--gold)"
                  stroke-dasharray="125.66"
                  stroke-dashoffset="8"
                  style={{ transition: "stroke-dashoffset 1.5s ease" }}/>
              </svg>
              <div className="ring-label" style={{ color: "var(--gold)" }}>94%</div>
            </div>
            <div>
              <div className="server-name">ASIA-SEA-03</div>
              <div className="server-loc">Singapore · 2,100 players</div>
            </div>
            <div className="server-load-wrap">
              <div className="server-load-val warn">94%</div>
              <div className="server-load-label">LOAD</div>
            </div>
          </div>

          <div className="server-node">
            <div className="server-indicator err"></div>
            <div className="ring-wrap">
              <svg className="ring-svg" width="48" height="48" viewBox="0 0 48 48">
                <circle className="ring-track" cx="24" cy="24" r="20"/>
                <circle className="ring-fill" cx="24" cy="24" r="20"
                  stroke="var(--pink)"
                  stroke-dasharray="125.66"
                  stroke-dashoffset="0"
                  style={{ transition: "stroke-dashoffset 1.5s ease" }}/>
              </svg>
              <div className="ring-label" style={{ color: "var(--pink)" }}>ERR</div>
            </div>
            <div>
              <div className="server-name">SA-BR-02</div>
              <div className="server-loc">São Paulo · Offline</div>
            </div>
            <div className="server-load-wrap">
              <div className="server-load-val err">DOWN</div>
              <div className="server-load-label">STATUS</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}
export default Tablestatus;