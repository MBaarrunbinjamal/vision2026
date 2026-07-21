import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUsers,
  FaUserPlus,
  FaUserCheck,
  FaUserClock,
  FaArrowUp,
  FaArrowDown,
  FaDesktop,
  FaMobileAlt,
  FaTabletAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaChartLine,
  FaUserCircle,
  FaCircle
} from "react-icons/fa";

import "./Admin.css";

function UserAnalytics() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const userGrowth = [
    { month: "JAN", value: 45, users: "4,500" },
    { month: "FEB", value: 58, users: "5,800" },
    { month: "MAR", value: 52, users: "5,200" },
    { month: "APR", value: 70, users: "7,000" },
    { month: "MAY", value: 64, users: "6,400" },
    { month: "JUN", value: 82, users: "8,200" },
    { month: "JUL", value: 94, users: "9,400" }
  ];

  const activityData = [
    { day: "MON", value: 72 },
    { day: "TUE", value: 85 },
    { day: "WED", value: 65 },
    { day: "THU", value: 92 },
    { day: "FRI", value: 78 },
    { day: "SAT", value: 55 },
    { day: "SUN", value: 48 }
  ];

  return (
    <>

      {/* =====================================================
          SIDEBAR OVERLAY
      ===================================================== */}

      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={closeSidebar}
      ></div>


      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
      >

        {/* LOGO */}

        <div className="sidebar-logo">

          <div className="logo-mark">

            <div className="logo-hex">
              NX
            </div>

            <div>
              <div className="logo-text">
                NEXUS
              </div>

              <div className="logo-sub">
                ADMIN SYSTEM
              </div>
            </div>

          </div>

        </div>


        {/* CLOSE BUTTON */}

        <button
          className="sidebar-close-btn"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        >
          <FaTimes />
        </button>


        {/* NAVIGATION */}

        <nav className="sidebar-nav">

          <div className="nav-group-label">
            MAIN MENU
          </div>


          <div className="nav-item">

            <a href="/admin" className="nav-link-custom">

              <span className="nav-icon">
                ◈
              </span>

              Dashboard

            </a>

          </div>


          <div className="nav-item">

            <a href="/admin/users" className="nav-link-custom">

              <span className="nav-icon">
                <FaUsers />
              </span>

              Users

              <span className="nav-badge cyan">
                2.4K
              </span>

            </a>

          </div>


          <div className="nav-item">

            <a
              href="/admin/analytics"
              className="nav-link-custom active"
            >

              <span className="nav-icon">
                <FaChartLine />
              </span>

              Analytics

            </a>

          </div>


          <div className="nav-item">

            <a href="/admin/activity" className="nav-link-custom">

              <span className="nav-icon">
                ◉
              </span>

              Activity

              <span className="nav-badge">
                12
              </span>

            </a>

          </div>


          <div className="nav-group-label">
            MANAGEMENT
          </div>


          <div className="nav-item">

            <a href="/admin/reports" className="nav-link-custom">

              <span className="nav-icon">
                ▣
              </span>

              Reports

            </a>

          </div>


          <div className="nav-item">

            <a href="/admin/settings" className="nav-link-custom">

              <span className="nav-icon">
                ⚙
              </span>

              Settings

            </a>

          </div>

        </nav>


        {/* SIDEBAR FOOTER */}

        <div className="sidebar-footer">

          <div className="admin-card">

            <div className="admin-avatar">
              A
            </div>

            <div>

              <div className="admin-name">
                Admin User
              </div>

              <div className="admin-role">
                SUPER ADMIN
              </div>

            </div>

          </div>

        </div>

      </aside>


      {/* =====================================================
          TOPBAR
      ===================================================== */}

      <header className="topbar">


        {/* MOBILE MENU */}

        <button
          className="menu-toggle"
          onClick={toggleSidebar}
          aria-label="Open sidebar"
        >
          <FaBars />
        </button>


        {/* SEARCH */}

        <div className="topbar-search">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search analytics..."
          />

        </div>


        {/* TOPBAR ACTIONS */}

        <div className="topbar-actions">

          <div className="status-live">

            <span className="status-dot"></span>

            SYSTEM ONLINE

          </div>


          <button className="topbar-btn">

            <FaChartLine />

          </button>


          <button className="topbar-btn">

            <FaUserCircle />

            <span className="topbar-dot"></span>

          </button>

        </div>

      </header>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="main">


        {/* PAGE HEADER */}

        <div className="page-header">

          <div className="breadcrumb-custom">

            <span>
              NEXUS
            </span>

            <span className="sep">
              /
            </span>

            <span>
              ANALYTICS
            </span>

            <span className="sep">
              /
            </span>

            <span className="current">
              USERS
            </span>

          </div>


          <h1 className="page-title">

            User <span>Analytics</span>

          </h1>


          <p className="page-sub">

            Monitor user growth, engagement, retention and platform activity.

          </p>

        </div>


        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <div className="row g-4 mb-4">


          {/* TOTAL USERS */}

          <div className="col-xl-3 col-md-6">

            <div className="stat-card">

              <div className="stat-icon-wrap violet">
                <FaUsers />
              </div>

              <div className="stat-value">
                24,892
              </div>

              <div className="stat-label">
                TOTAL USERS
              </div>

              <div className="stat-change up">
                <FaArrowUp />
                12.8%
              </div>

              <svg
                className="stat-sparkline"
                viewBox="0 0 80 40"
              >

                <polyline
                  points="0,35 10,28 20,31 30,20 40,24 50,12 60,18 70,7 80,4"
                  fill="none"
                  stroke="var(--purple)"
                  strokeWidth="2"
                />

              </svg>

            </div>

          </div>


          {/* ACTIVE USERS */}

          <div className="col-xl-3 col-md-6">

            <div className="stat-card cyan-glow">

              <div className="stat-icon-wrap cyan">
                <FaUserCheck />
              </div>

              <div className="stat-value">
                18,426
              </div>

              <div className="stat-label">
                ACTIVE USERS
              </div>

              <div className="stat-change up">
                <FaArrowUp />
                8.4%
              </div>

              <svg
                className="stat-sparkline"
                viewBox="0 0 80 40"
              >

                <polyline
                  points="0,30 10,25 20,28 30,17 40,20 50,10 60,14 70,8 80,5"
                  fill="none"
                  stroke="var(--cyan)"
                  strokeWidth="2"
                />

              </svg>

            </div>

          </div>


          {/* NEW USERS */}

          <div className="col-xl-3 col-md-6">

            <div className="stat-card pink-glow">

              <div className="stat-icon-wrap pink">
                <FaUserPlus />
              </div>

              <div className="stat-value">
                3,284
              </div>

              <div className="stat-label">
                NEW USERS THIS MONTH
              </div>

              <div className="stat-change up">
                <FaArrowUp />
                18.2%
              </div>

              <svg
                className="stat-sparkline"
                viewBox="0 0 80 40"
              >

                <polyline
                  points="0,34 10,30 20,25 30,29 40,16 50,20 60,12 70,15 80,5"
                  fill="none"
                  stroke="var(--pink)"
                  strokeWidth="2"
                />

              </svg>

            </div>

          </div>


          {/* RETENTION */}

          <div className="col-xl-3 col-md-6">

            <div className="stat-card gold-glow">

              <div className="stat-icon-wrap gold">
                <FaUserClock />
              </div>

              <div className="stat-value">
                74.6%
              </div>

              <div className="stat-label">
                USER RETENTION
              </div>

              <div className="stat-change down">
                <FaArrowDown />
                2.1%
              </div>

              <svg
                className="stat-sparkline"
                viewBox="0 0 80 40"
              >

                <polyline
                  points="0,10 10,12 20,15 30,12 40,20 50,18 60,24 70,22 80,30"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="2"
                />

              </svg>

            </div>

          </div>

        </div>


        {/* =====================================================
            CHARTS
        ===================================================== */}

        <div className="row g-4 mb-4">


          {/* USER GROWTH */}

          <div className="col-lg-8">

            <div className="panel">

              <div className="panel-head">

                <div>

                  <div className="section-eyebrow">
                    GROWTH MONITOR
                  </div>

                  <div className="section-title">
                    User Growth
                  </div>

                </div>


                <button className="btn-glow outline">
                  Last 7 Months
                </button>

              </div>


              <div className="panel-body">

                <div className="chart-wrap">

                  {userGrowth.map((item, index) => (

                    <div
                      className="chart-bar-col"
                      key={index}
                    >

                      <div
                        className={`chart-bar ${
                          index === userGrowth.length - 1
                            ? "highlight"
                            : ""
                        }`}
                        style={{
                          height: `${item.value}%`
                        }}
                        data-val={`${item.users} users`}
                      ></div>

                      <span className="chart-label">
                        {item.month}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* ACTIVE USERS */}

          <div className="col-lg-4">

            <div className="panel">

              <div className="panel-head">

                <div>

                  <div className="section-eyebrow">
                    ENGAGEMENT
                  </div>

                  <div className="section-title">
                    Activity
                  </div>

                </div>

              </div>


              <div className="panel-body">

                <div className="activity-chart">

                  {activityData.map((item, index) => (

                    <div
                      key={index}
                      className="activity-chart-row"
                    >

                      <span className="activity-day">
                        {item.day}
                      </span>

                      <div className="activity-progress">

                        <div
                          className="activity-progress-fill"
                          style={{
                            width: `${item.value}%`
                          }}
                        ></div>

                      </div>

                      <span className="activity-percent">
                        {item.value}%
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            DEMOGRAPHICS + DEVICES
        ===================================================== */}

        <div className="row g-4 mb-4">


          {/* USER DEMOGRAPHICS */}

          <div className="col-lg-6">

            <div className="panel">

              <div className="panel-head">

                <div>

                  <div className="section-eyebrow">
                    USER PROFILE
                  </div>

                  <div className="section-title">
                    Demographics
                  </div>

                </div>

              </div>


              <div className="panel-body">

                <div className="analytics-row">

                  <span>
                    18 - 24 Years
                  </span>

                  <strong>
                    32%
                  </strong>

                </div>

                <div className="analytics-progress">

                  <div
                    style={{ width: "32%" }}
                  ></div>

                </div>


                <div className="analytics-row">

                  <span>
                    25 - 34 Years
                  </span>

                  <strong>
                    41%
                  </strong>

                </div>

                <div className="analytics-progress">

                  <div
                    style={{ width: "41%" }}
                  ></div>

                </div>


                <div className="analytics-row">

                  <span>
                    35 - 44 Years
                  </span>

                  <strong>
                    18%
                  </strong>

                </div>

                <div className="analytics-progress">

                  <div
                    style={{ width: "18%" }}
                  ></div>

                </div>


                <div className="analytics-row">

                  <span>
                    45+ Years
                  </span>

                  <strong>
                    9%
                  </strong>

                </div>

                <div className="analytics-progress">

                  <div
                    style={{ width: "9%" }}
                  ></div>

                </div>

              </div>

            </div>

          </div>


          {/* DEVICES */}

          <div className="col-lg-6">

            <div className="panel">

              <div className="panel-head">

                <div>

                  <div className="section-eyebrow">
                    PLATFORM USAGE
                  </div>

                  <div className="section-title">
                    Devices
                  </div>

                </div>

              </div>


              <div className="panel-body">


                <div className="device-row">

                  <div className="device-icon violet">
                    <FaDesktop />
                  </div>

                  <div className="device-info">

                    <div className="device-name">
                      Desktop
                    </div>

                    <div className="device-bar">

                      <div
                        style={{
                          width: "58%"
                        }}
                      ></div>

                    </div>

                  </div>

                  <strong>
                    58%
                  </strong>

                </div>


                <div className="device-row">

                  <div className="device-icon cyan">
                    <FaMobileAlt />
                  </div>

                  <div className="device-info">

                    <div className="device-name">
                      Mobile
                    </div>

                    <div className="device-bar">

                      <div
                        style={{
                          width: "34%"
                        }}
                      ></div>

                    </div>

                  </div>

                  <strong>
                    34%
                  </strong>

                </div>


                <div className="device-row">

                  <div className="device-icon pink">
                    <FaTabletAlt />
                  </div>

                  <div className="device-info">

                    <div className="device-name">
                      Tablet
                    </div>

                    <div className="device-bar">

                      <div
                        style={{
                          width: "8%"
                        }}
                      ></div>

                    </div>

                  </div>

                  <strong>
                    8%
                  </strong>

                </div>


              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            RECENT USER ACTIVITY
        ===================================================== */}

        <div className="row g-4">


          {/* ACTIVITY TABLE */}

          <div className="col-lg-8">

            <div className="panel">

              <div className="panel-head">

                <div>

                  <div className="section-eyebrow">
                    LIVE MONITOR
                  </div>

                  <div className="section-title">
                    Recent User Activity
                  </div>

                </div>

                <button className="btn-glow cyan-outline">
                  View All
                </button>

              </div>


              <div className="panel-body table-responsive">

                <table className="player-table">

                  <thead>

                    <tr>

                      <th>
                        USER
                      </th>

                      <th>
                        ACTION
                      </th>

                      <th>
                        LOCATION
                      </th>

                      <th>
                        STATUS
                      </th>

                      <th>
                        TIME
                      </th>

                    </tr>

                  </thead>


                  <tbody>


                    <tr>

                      <td>

                        <div className="user-table-cell">

                          <div className="player-avatar-sm user-avatar-violet">
                            AM
                          </div>

                          <div>
                            <strong>
                              Alex Morgan
                            </strong>

                            <small>
                              @alexm
                            </small>
                          </div>

                        </div>

                      </td>

                      <td>
                        Logged In
                      </td>

                      <td>
                        New York
                      </td>

                      <td>
                        <span className="status-pill online">
                          ONLINE
                        </span>
                      </td>

                      <td>
                        2 min ago
                      </td>

                    </tr>


                    <tr>

                      <td>

                        <div className="user-table-cell">

                          <div className="player-avatar-sm user-avatar-cyan">
                            JS
                          </div>

                          <div>
                            <strong>
                              James Smith
                            </strong>

                            <small>
                              @jsmith
                            </small>
                          </div>

                        </div>

                      </td>

                      <td>
                        Updated Profile
                      </td>

                      <td>
                        London
                      </td>

                      <td>
                        <span className="status-pill online">
                          ONLINE
                        </span>
                      </td>

                      <td>
                        8 min ago
                      </td>

                    </tr>


                    <tr>

                      <td>

                        <div className="user-table-cell">

                          <div className="player-avatar-sm user-avatar-pink">
                            SK
                          </div>

                          <div>
                            <strong>
                              Sarah Khan
                            </strong>

                            <small>
                              @sarahk
                            </small>
                          </div>

                        </div>

                      </td>

                      <td>
                        Purchased Plan
                      </td>

                      <td>
                        Karachi
                      </td>

                      <td>
                        <span className="status-pill online">
                          ONLINE
                        </span>
                      </td>

                      <td>
                        14 min ago
                      </td>

                    </tr>


                    <tr>

                      <td>

                        <div className="user-table-cell">

                          <div className="player-avatar-sm user-avatar-gold">
                            DL
                          </div>

                          <div>
                            <strong>
                              David Lee
                            </strong>

                            <small>
                              @davidl
                            </small>
                          </div>

                        </div>

                      </td>

                      <td>
                        Logged Out
                      </td>

                      <td>
                        Toronto
                      </td>

                      <td>
                        <span className="status-pill offline">
                          OFFLINE
                        </span>
                      </td>

                      <td>
                        21 min ago
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>


          {/* TOP LOCATIONS */}

          <div className="col-lg-4">

            <div className="panel">

              <div className="panel-head">

                <div>

                  <div className="section-eyebrow">
                    GLOBAL REACH
                  </div>

                  <div className="section-title">
                    Top Locations
                  </div>

                </div>

              </div>


              <div className="panel-body">


                <div className="location-item">

                  <div className="location-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div className="location-info">

                    <strong>
                      United States
                    </strong>

                    <span>
                      7,842 users
                    </span>

                  </div>

                  <b>
                    31%
                  </b>

                </div>


                <div className="location-item">

                  <div className="location-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div className="location-info">

                    <strong>
                      United Kingdom
                    </strong>

                    <span>
                      4,286 users
                    </span>

                  </div>

                  <b>
                    17%
                  </b>

                </div>


                <div className="location-item">

                  <div className="location-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div className="location-info">

                    <strong>
                      Pakistan
                    </strong>

                    <span>
                      3,921 users
                    </span>

                  </div>

                  <b>
                    16%
                  </b>

                </div>


                <div className="location-item">

                  <div className="location-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div className="location-info">

                    <strong>
                      Canada
                    </strong>

                    <span>
                      2,854 users
                    </span>

                  </div>

                  <b>
                    11%
                  </b>

                </div>


                <div className="location-item">

                  <div className="location-icon">
                    <FaGlobe />
                  </div>

                  <div className="location-info">

                    <strong>
                      Other Regions
                    </strong>

                    <span>
                      5,989 users
                    </span>

                  </div>

                  <b>
                    25%
                  </b>

                </div>


              </div>

            </div>

          </div>

        </div>


      </main>

    </>
  );
}

export default UserAnalytics;