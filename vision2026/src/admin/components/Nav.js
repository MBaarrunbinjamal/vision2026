import './Ad.css';
function Nav() {
    return (
    //    <!-- ════════════════ TOPBAR ════════════════ -->
<header className="topbar">
  <button className="menu-toggle" id="menuToggle" onclick="toggleSidebar()">
    <i className="bi bi-layout-sidebar"></i>
  </button>

  <div className="topbar-search">
    <i className="bi bi-search search-icon"></i>
    <input type="text" placeholder="Search players, servers, events…" />
  </div>

  <div className="topbar-actions">
    <div className="status-live">
      <div className="status-dot"></div>
      SYSTEMS NOMINAL
    </div>

    <a href="#" className="topbar-btn">
      <i className="bi bi-bell"></i>
      <span className="topbar-dot"></span>
    </a>
    <a href="#" className="topbar-btn">
      <i className="bi bi-terminal"></i>
    </a>
    <a href="#" className="topbar-btn">
      <i className="bi bi-person-circle"></i>
    </a>
  </div>
</header>

    );
}

export default Nav;