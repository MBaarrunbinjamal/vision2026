function Features() {
  return (
    //  <!-- ═══════════════════════════════════ FEATURES -->
  <section id="features" style={{ padding: "100px 0", position: "relative", zIndex: 2 }}>
    <div className="container">
      <div className="row justify-content-center text-center mb-5 reveal">
        <div className="col-lg-7">
          <div className="section-eyebrow justify-content-center">PLATFORM CORE</div>
          <h2 className="section-title">BUILT FOR <span>CHAMPIONS</span></h2>
          <p className="mt-3" style={{ color: "#6a5580", fontSize: "1rem" }}>Every feature engineered to give you the competitive edge. No compromises.</p>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-sm-6 col-lg-3 reveal">
          <div className="feature-item">
            <div className="feature-icon">🔗</div>
            <div className="feature-name">ULTRA-LOW LATENCY</div>
            <div className="feature-desc">Sub-10ms server response times powered by our global edge network with 47 nodes worldwide.</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 reveal" style={{ transitionDelay: ".1s" }}>
          <div className="feature-item">
            <div className="feature-icon" style={{
  background: "rgba(255,0,229,.08)",
  borderColor: "rgba(255,0,229,.2)"
}}>🏆</div>
            <div className="feature-name">LIVE TOURNAMENTS</div>
            <div className="feature-desc">500+ daily competitions with real cash prizes. Auto-bracket generation and live spectator mode.</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 reveal" style={{ transitionDelay: ".2s" }}>
          <div className="feature-item">
            <div className="feature-icon" style={{
  background: "rgba(57,255,20,.08)",
  borderColor: "rgba(57,255,20,.2)"
}}>📊</div>
            <div className="feature-name">DEEP ANALYTICS</div>
            <div className="feature-desc">Track every stat, heatmap, and performance metric. AI-powered coaching insights in real time.</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 reveal" style={{ transitionDelay: ".3s" }}>
          <div className="feature-item">
            <div className="feature-icon" style={{
  background: "rgba(255,230,0,.08)",
  borderColor: "rgba(255,230,0,.2)"
}}>🛡️</div>
            <div className="feature-name">ANTI-CHEAT ENGINE</div>
            <div className="feature-desc">Military-grade kernel-level detection ensures every match is fair, clean, and competitive.</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 reveal" style={{ transitionDelay: ".1s" }}>
          <div className="feature-item">
            <div className="feature-icon" style={{
  background: "rgba(179,0,255,.08)",
  borderColor: "rgba(179,0,255,.2)"
}}>👥</div>
            <div className="feature-name">CLAN SYSTEM</div>
            <div className="feature-desc">Build squads, manage rosters, claim territory. Clan war leaderboards update every 6 hours.</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 reveal" style={{ transitionDelay: ".2s" }}>
          <div className="feature-item">
            <div className="feature-icon" style={{
  background: "rgba(0,245,255,.08)",
  borderColor: "rgba(0,245,255,.2)"
}}>🎙️</div>
            <div className="feature-name">SPATIAL VOICE</div>
            <div className="feature-desc">Directional 3D audio chat synced to your in-game position. Crystal clear. Zero delay.</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 reveal" style={{ transitionDelay: ".3s" }}>
          <div className="feature-item">
            <div className="feature-icon" style={{
  background: "rgba(255,0,229,.08)",
  borderColor: "rgba(255,0,229,.2)"
}}>💰</div>
            <div className="feature-name">CRYPTO REWARDS</div>
            <div className="feature-desc">Earn NXS tokens through play. Trade, stake, or convert to real-world currency instantly.</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 reveal" style={{ transitionDelay: ".4s" }}>
          <div className="feature-item">
            <div className="feature-icon" style={{
  background: "rgba(57,255,20,.08)",
  borderColor: "rgba(57,255,20,.2)"
}}>📱</div>
            <div className="feature-name">CROSS-PLATFORM</div>
            <div className="feature-desc">PC, console, and mobile — seamless crossplay with account sync and shared progression.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

        );
    }
export default Features;
