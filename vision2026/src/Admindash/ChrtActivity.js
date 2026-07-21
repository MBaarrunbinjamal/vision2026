function ChrtActivity() {
  return (
    //  <!-- ── ROW 2: CHART + ACTIVITY ── -->
  <div className="row g-3 mb-4">

    {/* <!-- Revenue Chart --> */}
    <div className="col-lg-8">
      <div className="panel" style={{ animationDelay: "0.1s" }}>
        <div className="panel-head">
          <div>
            <div className="section-eyebrow">PERFORMANCE</div>
            <div className="section-title" style={{ fontSize: "14px" }}>Weekly Revenue &amp; Player Peaks</div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn-glow outline" style={{ padding: "6px 12px", fontSize: "11px" }}>7D</button>
            <button className="btn-glow violet" style={{ padding: "6px 12px", fontSize: "11px" }}>30D</button>
            <button className="btn-glow outline" style={{ padding: "6px 12px", fontSize: "11px" }}>90D</button>
          </div>
        </div>
        <div className="panel-body">
          {/* <!-- Legend --> */}
          <div className="d-flex gap-4 mb-4" style={{ fontSize: "11px" }}>
            <div className="d-flex align-items-center gap-2">
              <div style={{ width: "12px", height: "3px", borderRadius: "2px", background: "var(--violet)", boxShadow: "0 0 8px var(--violet)" }}></div>
              <span style={{ color: "var(--text-muted)" }}>Revenue</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div style={{ width: "12px", height: "3px", borderRadius: "2px", background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }}></div>
              <span style={{ color: "var(--text-muted)" }}>Player Peaks</span>
            </div>
          </div>

          <div className="chart-wrap" id="mainChart">
            {/* <!-- bars injected by JS --> */}
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Activity Feed --> */}
    <div className="col-lg-4">
      <div className="panel" style={{ animationDelay: "0.2s" }}>
        <div className="panel-head">
          <div>
            <div className="section-eyebrow">REAL-TIME</div>
            <div className="section-title" style={{ fontSize: "14px" }}>Activity Feed</div>
          </div>
          <span className="nav-badge cyan" style={{ margin: "0" }}>LIVE</span>
        </div>
        <div className="panel-body" style={{ padding: "12px 22px" }}>

          <div className="activity-item" style={{ animationDelay: "0.05s" }}>
            <div className="activity-icon v"><i className="bi bi-person-plus"></i></div>
            <div>
              <div className="activity-desc"><strong>PhantomX99</strong> joined the arena</div>
              <div className="activity-time">just now</div>
            </div>
          </div>

          <div className="activity-item" style={{ animationDelay: "0.1s" }}>
            <div className="activity-icon g"><i className="bi bi-trophy"></i></div>
            <div>
              <div className="activity-desc"><strong>NightFury</strong> won the Midnight Cup</div>
              <div className="activity-time">1 min ago</div>
            </div>
          </div>

          <div className="activity-item" style={{ animationDelay: "0.15s" }}>
            <div className="activity-icon p"><i className="bi bi-shield-x"></i></div>
            <div>
              <div className="activity-desc">Player <strong>shadow_3k</strong> flagged for cheating</div>
              <div className="activity-time">4 min ago</div>
            </div>
          </div>

          <div className="activity-item" style={{ animationDelay: "0.2s" }}>
            <div className="activity-icon c"><i className="bi bi-cloud-upload"></i></div>
            <div>
              <div className="activity-desc">Server <strong>EU-West-07</strong> patch deployed</div>
              <div className="activity-time">11 min ago</div>
            </div>
          </div>

          <div className="activity-item" style={{ animationDelay: "0.25s" }}>
            <div className="activity-icon g"><i className="bi bi-coin"></i></div>
            <div>
              <div className="activity-desc"><strong>$4,200</strong> in pack purchases in 5 min</div>
              <div className="activity-time">15 min ago</div>
            </div>
          </div>

          <div className="activity-item" style={{ animationDelay: "0.3s" }}>
            <div className="activity-icon v"><i className="bi bi-person-plus"></i></div>
            <div>
              <div className="activity-desc"><strong>ArcaneWolf</strong> reached Diamond rank</div>
              <div className="activity-time">22 min ago</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}
export default ChrtActivity;