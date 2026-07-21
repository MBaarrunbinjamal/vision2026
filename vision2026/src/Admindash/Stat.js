function Stat() { 
  return (
    //  <!-- ── STAT CARDS ── --> 
  <div className="row g-3 mb-4">
    <div className="col-6 col-xl-3">
      <div className="stat-card">
        <div className="stat-icon-wrap violet"><i className="bi bi-people-fill"></i></div>
        <div className="stat-value" data-target="24891">0</div>
        <div className="stat-label">Active Players</div>
        <div className="stat-change up"><i className="bi bi-arrow-up-right"></i> +12.4% this week</div>
        <svg className="stat-sparkline" viewBox="0 0 80 40">
          <polyline points="0,35 12,28 24,30 36,18 48,22 60,10 72,14 80,8" fill="none" stroke="rgba(123,47,255,0.6)" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <div className="col-6 col-xl-3">
      <div className="stat-card cyan-glow">
        <div className="stat-icon-wrap cyan"><i className="bi bi-server"></i></div>
        <div className="stat-value" data-target="128">0</div>
        <div className="stat-label">Live Servers</div>
        <div className="stat-change up"><i className="bi bi-arrow-up-right"></i> +3 since yesterday</div>
        <svg className="stat-sparkline" viewBox="0 0 80 40">
          <polyline points="0,30 12,26 24,28 36,20 48,22 60,16 72,18 80,12" fill="none" stroke="rgba(0,255,209,0.6)" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <div className="col-6 col-xl-3">
      <div className="stat-card pink-glow">
        <div className="stat-icon-wrap pink"><i className="bi bi-currency-dollar"></i></div>
        <div className="stat-value" data-target="87432" data-prefix="$">0</div>
        <div className="stat-label">Revenue Today</div>
        <div className="stat-change down"><i className="bi bi-arrow-down-right"></i> -2.1% vs yesterday</div>
        <svg className="stat-sparkline" viewBox="0 0 80 40">
          <polyline points="0,15 12,18 24,12 36,20 48,16 60,22 72,26 80,28" fill="none" stroke="rgba(255,45,120,0.6)" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <div className="col-6 col-xl-3">
      <div className="stat-card gold-glow">
        <div className="stat-icon-wrap gold"><i className="bi bi-trophy-fill"></i></div>
        <div className="stat-value" data-target="6">0</div>
        <div className="stat-label">Live Tournaments</div>
        <div className="stat-change up"><i className="bi bi-arrow-up-right"></i> 1 starting soon</div>
        <svg className="stat-sparkline" viewBox="0 0 80 40">
          <polyline points="0,32 12,28 24,26 36,22 48,18 60,14 72,12 80,10" fill="none" stroke="rgba(255,184,48,0.6)" stroke-width="2"/>
        </svg>
      </div>
    </div>
  </div>
  );
}   
export default Stat;