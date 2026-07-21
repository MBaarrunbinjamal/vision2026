function Games() {
  return (
    // <!-- ═══════════════════════════════════ GAMES -->
  <section id="games" style={{ padding: "100px 0", position: "relative", zIndex: 2 }}>
    <div className="container">
      <div className="row mb-5 reveal">
        <div className="col-lg-6">
          <div className="section-eyebrow">GAME LIBRARY</div>
          <h2 className="section-title">CHOOSE YOUR <span>BATTLEFIELD</span></h2>
        </div>
        <div className="col-lg-6 d-flex align-items-end justify-content-lg-end">
          <a href="#" className="btn-neon btn-neon-outline" style={{ fontSize: ".7rem", padding: ".6rem 1.5rem" }}>VIEW ALL 120+ GAMES</a>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-sm-6 col-lg-4 reveal">
          <div className="game-card">
            <div className="game-card-thumb game-thumb-g1">
              <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 0 20px var(--neon-cyan))" }}>🌌</span>
              <div className="game-badge badge-live">LIVE</div>
            </div>
            <div className="game-card-body">
              <div className="game-title">VOID BREACH</div>
              <div className="game-genre">Space Tactical Shooter</div>
              <div className="game-rating">
                <span className="star">★★★★★</span>
                <span className="rating-num">4.9 (12.4K)</span>
              </div>
              <div className="game-card-footer">
                <div className="game-price free">FREE</div>
                <button className="btn-play">▶ PLAY</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 reveal" style={{ transitionDelay: ".1s" }}>
          <div className="game-card">
            <div className="game-card-thumb game-thumb-g2">
              <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 0 20px var(--neon-green))" }}>⚔️</span>
              <div className="game-badge badge-hot">HOT</div>
            </div>
            <div className="game-card-body">
              <div className="game-title">ETERNAL CLASH</div>
              <div className="game-genre">Fantasy Battle Arena</div>
              <div className="game-rating">
                <span className="star">★★★★★</span>
                <span className="rating-num">4.8 (8.1K)</span>
              </div>
              <div className="game-card-footer">
                <div className="game-price free">FREE</div>
                <button className="btn-play">▶ PLAY</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 reveal" style={{ transitionDelay: ".2s" }}>
          <div className="game-card">
            <div className="game-card-thumb game-thumb-g3">
              <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 0 20px var(--neon-pink))" }}>🔥</span>
              <div className="game-badge badge-new">NEW</div>
            </div>
            <div className="game-card-body">
              <div className="game-title">INFERNO RUN</div>
              <div className="game-genre">Roguelite Action RPG</div>
              <div className="game-rating">
                <span className="star">★★★★☆</span>
                <span className="rating-num">4.6 (3.2K)</span>
              </div>
              <div className="game-card-footer">
                <div className="game-price" style={{ color: "var(--neon-pink)" }}>$9.99</div>
                <button className="btn-play">▶ PLAY</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 reveal" style={{ transitionDelay: ".3s" }}>
          <div className="game-card">
            <div className="game-card-thumb game-thumb-g4">
              <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 0 20px var(--neon-yellow))" }}>🚗</span>
              <div className="game-badge badge-live">LIVE</div>
            </div>
            <div className="game-card-body">
              <div className="game-title">OVERDRIVE X</div>
              <div className="game-genre">Futuristic Racing</div>
              <div className="game-rating">
                <span className="star">★★★★★</span>
                <span className="rating-num">4.7 (5.8K)</span>
              </div>
              <div className="game-card-footer">
                <div className="game-price free">FREE</div>
                <button className="btn-play">▶ PLAY</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 reveal" style={{ transitionDelay: ".4s" }}>
          <div className="game-card">
            <div className="game-card-thumb game-thumb-g5">
              <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 0 20px var(--neon-cyan))" }}>🌊</span>
              <div className="game-badge badge-new">NEW</div>
            </div>
            <div className="game-card-body">
              <div className="game-title">DEEP SYNC</div>
              <div className="game-genre">Underwater Survival</div>
              <div className="game-rating">
                <span className="star">★★★★☆</span>
                <span className="rating-num">4.5 (1.9K)</span>
              </div>
              <div className="game-card-footer">
                <div className="game-price" style={{ color: "var(--neon-pink)" }}>$14.99</div>
                <button className="btn-play">▶ PLAY</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 reveal" style={{ transitionDelay: ".5s" }}>
          <div className="game-card">
            <div className="game-card-thumb game-thumb-g6">
              <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 0 20px var(--purple-300))" }}>🔮</span>
              <div className="game-badge badge-hot">HOT</div>
            </div>
            <div className="game-card-body">
              <div className="game-title">CHRONO RIFT</div>
              <div className="game-genre">Sci-Fi Strategy</div>
              <div className="game-rating">
                <span className="star">★★★★★</span>
                <span className="rating-num">4.9 (7.3K)</span>
              </div>
              <div className="game-card-footer">
                <div className="game-price free">FREE</div>
                <button className="btn-play">▶ PLAY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}
export default Games;