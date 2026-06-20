import "../components/Navbar.css";
import './Home.css';
// import './Main.css';
function Home() {
  return (
   <>
    
    <section id="hero">
    <div className="hero-glow-orb orb-1"></div>
    <div className="hero-glow-orb orb-2"></div>
    <div className="hero-glow-orb orb-3"></div>
    <div className="container position-relative" style={{ zIndex: 2 }}>
      <div className="row align-items-center gy-5">
        <div className="col-lg-6">
          <div className="hero-eyebrow">THE ULTIMATE GAMING UNIVERSE</div>
          <h1 className="hero-title">
            <span className="line1">DOMINATE</span>
            <span className="line2 glitch" data-text="THE GRID">THE GRID</span>
            <span className="line3">OR BE DELETED</span>
          </h1>
          <p className="hero-desc">
            Enter a world where legends are forged in data and glory is measured in milliseconds.
            Compete, climb, conquer — your legacy starts now.
          </p>
          <div className="hero-btns">
            <a href="#" className="btn-neon btn-neon-primary">
              <span>⚡</span> PLAY NOW — FREE
            </a>
            <a href="#tournament" className="btn-neon btn-neon-outline">
              <span>🏆</span> VIEW TOURNAMENTS
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num" data-target="2.4">0</div>
              <div className="stat-label">Million Players</div>
            </div>
            <div className="stat-item">
              <div className="stat-num" data-target="500">0</div>
              <div className="stat-label">Active Tournaments</div>
            </div>
            <div className="stat-item">
              <div className="stat-num" data-target="12">0</div>
              <div className="stat-label">Games Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-num" data-target="4.5" data-suffix="M">0</div>
              <div className="stat-label">Prize Pool $</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
          <div className="hero-visual position-relative">
            <div className="hex-grid">
              {/* <!-- Row 1 --> */}
              <div className="hex-cell active" style={{ '--dur': '2.5s', '--del': '0s' }}>🎮</div>
              <div className="hex-cell" style={{ '--dur': '3s', '--del': '-.5s' }}>⚔️</div>
              <div className="hex-cell" style={{ '--dur': '2.8s', '--del': '-1s' }}>🏆</div>
              <div className="hex-cell" style={{ '--dur': '3.2s', '--del': '-1.5s' }}>🎯</div>
              <div className="hex-cell" style={{ '--dur': '2.6s', '--del': '-2s' }}>🌌</div>
              {/* <!-- Row 2 --> */}
              <div className="hex-cell" style={{ '--dur': '3.1s', '--del': '-.3s' }}>🔥</div>
              <div className="hex-cell active" style={{ '--dur': '2.7s', '--del': '-.8s' }}>⚡</div>
              <div className="hex-cell" style={{ '--dur': '3s', '--del': '-1.3s' }}>🛡️</div>
              <div className="hex-cell" style={{ '--dur': '2.9s', '--del': '-1.8s' }}>🚀</div>
              <div className="hex-cell" style={{ '--dur': '3.3s', '--del': '-.6s' }}>💎</div>
              {/* <!-- Row 3 --> */}
              <div className="hex-cell" style={{ '--dur': '2.5s', '--del': '-2.1s' }}>🎲</div>
              <div className="hex-cell" style={{ '--dur': '3.1s', '--del': '-.4s' }}>🌀</div>
              <div className="hex-cell active" style={{ '--dur': '2.8s', '--del': '-.9s' }}>👾</div>
              <div className="hex-cell" style={{ '--dur': '3s', '--del': '-1.4s' }}>🦾</div>
              <div className="hex-cell" style={{ '--dur': '2.6s', '--del': '-1.9s' }}>🔮</div>
            </div>
            <div className="floating-card card-1">
              <span className="dot"></span> 14,283 ONLINE NOW
            </div>
            <div className="floating-card card-2">
              <span className="dot"></span> MATCH FOUND — 0:03
            </div>
            <div className="floating-card card-3">
              <span className="dot" style={{ background: 'var(--neon-pink)', boxShadow: '0 0 8px var(--neon-pink)' }}></span> NEXUS.LVL 99 WON $2,400
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>

  );
}

export default Home;