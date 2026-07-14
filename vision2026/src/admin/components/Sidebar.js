import './Ad.css';
function Sidebar() {
  return (
    // <!-- ════════════════ SIDEBAR ════════════════ -->
<aside className="sidebar" id="sidebar">

  {/* // <!-- Logo --> */}
  <div className="sidebar-logo">
    <div className="logo-mark">
      <div className="logo-hex">NX</div>
      <div>
        <div className="logo-text">NEXUSSS</div>
        <div className="logo-sub">ADMIN CONTROL</div>
      </div>
    </div>
  </div>

  {/* <!-- Navigation --> */}
  <nav className="sidebar-nav">

    <div className="nav-group-label">COMMAND CENTER</div>

    <div className="nav-item">
      <a href="/admin" className="nav-link-custom active">
        <i className="bi bi-grid-1x2 nav-icon"></i>
        Dashboard 
      </a>
    </div>
    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-graph-up-arrow nav-icon"></i>
        Analytics
        <span className="nav-badge cyan">LIVE</span>
      </a>
    </div>
    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-controller nav-icon"></i>
        Game Servers
      </a>
    </div>

    <div className="nav-group-label">PLAYERS</div>

    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-people nav-icon"></i>
        Player Management
        <span className="nav-badge">24K</span>
      </a>
    </div>
    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-trophy nav-icon"></i>
        Leaderboards
      </a>
    </div>
    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-shield-exclamation nav-icon"></i>
        Reports &amp; Bans
        <span className="nav-badge">7</span>
      </a>
    </div>

    <div className="nav-group-label">ECONOMY</div>

    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-coin nav-icon"></i>
        Virtual Economy
      </a>
    </div>
    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-bag nav-icon"></i>
        Item Catalog
      </a>
    </div>
    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-credit-card nav-icon"></i>
        Transactions
      </a>
    </div>

    <div className="nav-group-label">OPERATIONS</div>

    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-calendar-event nav-icon"></i>
        Events
      </a>
    </div>
    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-gear nav-icon"></i>
        Settings
      </a>
    </div>
    <div className="nav-item">
      <a href="#" className="nav-link-custom">
        <i className="bi bi-box-arrow-right nav-icon"></i>
        Sign Out
      </a>
    </div>

  </nav>

  {/* <!-- Footer --> */}
  <div className="sidebar-footer">
    <div className="admin-card">
      <div className="admin-avatar">ZA</div>
      <div>
        <div className="admin-name">Zara Aziz</div>
        <div className="admin-role">SUPER ADMIN</div>
      </div>
      <a href="#" className="ms-auto" style={{color: "var(--text-dim)", fontSize: "16px", textDecoration: "none"}}>
        <i className="bi bi-three-dots-vertical"></i>
      </a>
    </div>
  </div>

</aside>

  );
}
export default Sidebar;