function Leaderboard() {
    return (
        // <!-- ═══════════════════════════════════ LEADERBOARD -->
  <section id="leaderboard" style={{ padding: "100px 0", position: "relative", zIndex: 2 }}>
    <div className="container">
      <div className="row justify-content-center text-center mb-5 reveal">
        <div className="col-lg-7">
          <div className="section-eyebrow justify-content-center">HALL OF FAME</div>
          <h2 className="section-title">GLOBAL <span>LEADERBOARD</span></h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-10 reveal">
          <div className="lb-table">
            <div className="lb-head">
              <div>#</div>
              <div>PLAYER</div>
              <div>SCORE</div>
              <div>WINS</div>
              <div>RANK</div>
            </div>
            <div className="lb-row top-1">
              <div className="lb-rank rank-1">👑</div>
              <div className="lb-player">
                <div className="lb-avatar" style={{
  background: "rgba(255,230,0,.1)",
  borderColor: "rgba(255,230,0,.3)"
}}>🦅</div>
                <div><div className="lb-name">SHADOWX</div><div className="lb-tag">#0001</div></div>
              </div>
              <div className="lb-score">984,200</div>
              <div className="lb-wins">1,247</div>
              <div><span className="lb-badge-rank rank-legend">LEGEND</span></div>
            </div>
            <div className="lb-row top-2">
              <div className="lb-rank rank-2">2</div>
              <div className="lb-player">
                <div className="lb-avatar" style={{
  background: "rgba(192,192,192,.1)",
  borderColor: "rgba(192,192,192,.3)"
}}>🐺</div>
                <div><div className="lb-name">NEON_VIPER</div><div className="lb-tag">#0042</div></div>
              </div>
              <div className="lb-score">871,540</div>
              <div className="lb-wins">1,089</div>
              <div><span className="lb-badge-rank rank-master">MASTER</span></div>
            </div>
            <div className="lb-row top-3">
              <div className="lb-rank rank-3">3</div>
              <div className="lb-player">
                <div className="lb-avatar" style={{
  background: "rgba(179,0,255,.1)",
  borderColor: "rgba(179,0,255,.3)"
}}>🐉</div>
                <div><div className="lb-name">CYBERBLAZE</div><div className="lb-tag">#0117</div></div>
              </div>
              <div className="lb-score">792,100</div>
              <div className="lb-wins">944</div>
              <div><span className="lb-badge-rank rank-master">MASTER</span></div>
            </div>
            <div className="lb-row">
              <div className="lb-rank rank-other">4</div>
              <div className="lb-player">
                <div className="lb-avatar" style={{
  background: "rgba(0,245,255,.1)",
  borderColor: "rgba(0,245,255,.2)"
}}>🦊</div>
                <div><div className="lb-name">GLITCHMODE</div><div className="lb-tag">#0204</div></div>
              </div>
              <div className="lb-score">651,800</div>
              <div className="lb-wins">812</div>
              <div><span className="lb-badge-rank rank-diamond">DIAMOND</span></div>
            </div>
            <div className="lb-row">
              <div className="lb-rank rank-other">5</div>
              <div className="lb-player">
                <div className="lb-avatar" style={{
  background: "rgba(255,0,229,.1)",
  borderColor: "rgba(255,0,229,.2)"
}}>🔱</div>
                <div><div className="lb-name">DARKMATTER</div><div className="lb-tag">#0388</div></div>
              </div>
              <div className="lb-score">589,430</div>
              <div className="lb-wins">740</div>
              <div><span className="lb-badge-rank rank-diamond">DIAMOND</span></div>
            </div>
            <div className="lb-row">
              <div className="lb-rank rank-other">6</div>
              <div className="lb-player">
                <div className="lb-avatar" style={{
  background: "rgba(255,230,0,.1)",
  borderColor: "rgba(255,230,0,.2)"
}}>⚡</div>
                <div><div className="lb-name">VOLTRIX</div><div className="lb-tag">#0512</div></div>
              </div>
              <div className="lb-score">502,900</div>
              <div className="lb-wins">631</div>
              <div><span className="lb-badge-rank rank-gold">GOLD</span></div>
            </div>
            <div className="lb-row">
              <div className="lb-rank rank-other">7</div>
              <div className="lb-player">
                <div className="lb-avatar" style={{
  background: "rgba(57,255,20,.08)",
  borderColor: "rgba(57,255,20,.2)"
}}>🌿</div>
                <div><div className="lb-name">PIXEL_REAPER</div><div className="lb-tag">#0743</div></div>
              </div>
              <div className="lb-score">444,120</div>
              <div className="lb-wins">578</div>
              <div><span className="lb-badge-rank rank-gold">GOLD</span></div>
            </div>
          </div>
          <div className="text-center mt-4 reveal">
            <a href="#" className="btn-neon btn-neon-outline" style={{ fontSize: ".7rem", padding: ".6rem 1.8rem" }}>VIEW FULL LEADERBOARD →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}
export default Leaderboard;
