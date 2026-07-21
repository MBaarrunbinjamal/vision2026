import React from "react";

function Topbar({ toggleSidebar }) {
  return (
    // TOPBAR
    <header className="topbar">

      {/* Mobile Sidebar Button */}

      <button
        className="menu-toggle"
        id="menuToggle"
        onClick={toggleSidebar}
      >
        <i className="bi bi-layout-sidebar"></i>
      </button>


      {/* Search */}

      <div className="topbar-search">

        <i className="bi bi-search search-icon"></i>

        <input
          type="text"
          placeholder="Search players, servers, events…"
        />

      </div>


      {/* Topbar Actions */}

      <div className="topbar-actions">

        <div className="status-live">

          <div className="status-dot"></div>

          SYSTEMS NOMINAL

        </div>


        <button className="topbar-btn">
          <i className="bi bi-bell"></i>
          <span className="topbar-dot"></span>
        </button>


        <button className="topbar-btn">
          <i className="bi bi-terminal"></i>
        </button>


        <button className="topbar-btn">
          <i className="bi bi-person-circle"></i>
        </button>

      </div>

    </header>
  );
}

export default Topbar;