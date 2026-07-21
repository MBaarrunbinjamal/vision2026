import React from "react";
import { Link } from "react-router-dom";


function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      {/* =========================================
          SIDEBAR
      ========================================= */}

      <aside
        className={`sidebar ${isOpen ? "open" : ""}`}
        id="sidebar"
      >

        {/* =========================================
            LOGO
        ========================================= */}

        <div className="sidebar-logo">

          <div className="logo-mark">

            <div className="logo-hex">
              NX
            </div>

            <div>

              <div className="logo-text">
                C▸DEX
              </div>

              <div className="logo-sub">
                ADMIN CONTROL
              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            NAVIGATION
        ========================================= */}

        <nav className="sidebar-nav">

          <div className="nav-group-label">
            COMMAND CENTER
          </div>


          {/* Dashboard */}

          <div className="nav-item">

            <Link
              to="/admin"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-grid-1x2 nav-icon"></i>

              Dashboard

            </Link>

          </div>


          {/* Analytics */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-graph-up-arrow nav-icon"></i>

              Analytics

              <span className="nav-badge cyan">
                LIVE
              </span>

            </a>

          </div>


          {/* Game Servers */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-controller nav-icon"></i>

              Game Servers

            </a>

          </div>


          {/* =========================================
              PLAYERS
          ========================================= */}

          <div className="nav-group-label">
            PLAYERS
          </div>


          {/* Player Management */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-people nav-icon"></i>

              Player Management

              <span className="nav-badge">
                24K
              </span>

            </a>

          </div>


          {/* Leaderboards */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-trophy nav-icon"></i>

              Leaderboards

            </a>

          </div>


          {/* Reports */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-shield-exclamation nav-icon"></i>

              Reports &amp; Bans

              <span className="nav-badge">
                7
              </span>

            </a>

          </div>


          {/* =========================================
              ECONOMY
          ========================================= */}

          <div className="nav-group-label">
            ECONOMY
          </div>


          {/* Virtual Economy */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-coin nav-icon"></i>

              Virtual Economy

            </a>

          </div>


          {/* Item Catalog */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-bag nav-icon"></i>

              Item Catalog

            </a>

          </div>


          {/* Transactions */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-credit-card nav-icon"></i>

              Transactions

            </a>

          </div>


          {/* =========================================
              OPERATIONS
          ========================================= */}

          <div className="nav-group-label">
            OPERATIONS
          </div>


          {/* Events */}

          <div className="nav-item">

            <Link
              to="/addevent"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-calendar-event nav-icon"></i>

              Events

            </Link>

          </div>


          {/* Settings */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-gear nav-icon"></i>

              Settings

            </a>

          </div>


          {/* Sign Out */}

          <div className="nav-item">

            <a
              href="#"
              className="nav-link-custom"
              onClick={closeSidebar}
            >

              <i className="bi bi-box-arrow-right nav-icon"></i>

              Sign Out

            </a>

          </div>

        </nav>


        {/* =========================================
            SIDEBAR FOOTER
        ========================================= */}

        <div className="sidebar-footer">

          <div className="admin-card">

            <div className="admin-avatar">
              ZA
            </div>


            <div>

              <div className="admin-name">
                Zara Aziz
              </div>

              <div className="admin-role">
                SUPER ADMIN
              </div>

            </div>


            <a
              href="#"
              className="ms-auto"
              style={{
                color: "var(--text-dim)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >

              <i className="bi bi-three-dots-vertical"></i>

            </a>

          </div>

        </div>

      </aside>


      {/* =========================================
          MOBILE SIDEBAR OVERLAY
      ========================================= */}

      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        id="sidebarOverlay"
        onClick={closeSidebar}
      ></div>

    </>
  );
}

export default Sidebar;