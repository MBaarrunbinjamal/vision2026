import React, { useState } from "react";
// import useAdminDashboard from "../hooks/useAdminDashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import NeuralCanvas from "./NeuralCanvas";

function AddEvent() {
  // Start all dashboard JavaScript effects
    // useAdminDashboard();


  // =========================================
  // SIDEBAR STATE
  // =========================================

  const [sidebarOpen, setSidebarOpen] = useState(false);


  // =========================================
  // EVENT STATE
  // =========================================

  const [event, setEvent] = useState({
    title: "",
    description: "",
    venue: "",
    category: "",
    eventDate: "",
    registrationStart: "",
    registrationEnd: "",
    eventTime: "",
    maxParticipants: "",
    organizer: "",
    image: ""
  });


  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (e) => {

    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });

  };


  // =========================================
  // HANDLE FORM SUBMIT
  // =========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(event);

    try {

      const response = await fetch(
        "http://localhost:7000/api/addEvent",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token")
          },

          body: JSON.stringify(event)
        }
      );


      if (!response.ok) {
        throw new Error("Failed to create event");
      }


      alert("Event Created Successfully");


      // Reset form

      setEvent({
        title: "",
        description: "",
        venue: "",
        category: "",
        eventDate: "",
        registrationStart: "",
        registrationEnd: "",
        eventTime: "",
        maxParticipants: "",
        organizer: "",
        image: ""
      });

    } catch (error) {

      console.error("Error:", error);

      alert("Failed to create event");

    }

  };


  return (

    <>
    
    <NeuralCanvas />

      {/* =========================================
          SIDEBAR
      ========================================= */}

      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />


      {/* =========================================
          TOPBAR
      ========================================= */}

      <Topbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main className="main">

        {/* =========================================
            PAGE HEADER
        ========================================= */}

        <div className="page-header">

          {/* Breadcrumb */}

          <div className="breadcrumb-custom">

            <span>
              COMMAND CENTER
            </span>

            <span className="sep">
              /
            </span>

            <span className="current">
              EVENTS
            </span>

            <span className="sep">
              /
            </span>

            <span className="current">
              CREATE
            </span>

          </div>


          {/* Title */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              marginTop: "8px"
            }}
          >

            <div>

              <h1 className="page-title">
                Create <span>New Event</span>
              </h1>

              <p className="page-sub">
                Configure and publish a new event for your gaming community.
              </p>

            </div>

          </div>

        </div>


        {/* =========================================
            FORM PANEL
        ========================================= */}

        <div className="panel">

          {/* Panel Header */}

          <div className="panel-head">

            <div>

              <div className="section-eyebrow">
                EVENT CONFIGURATION
              </div>

              <h2 className="section-title">
                <i className="bi bi-calendar-plus"></i>
                New Event Protocol
              </h2>

            </div>


            {/* Status */}

            <div className="status-live">

              <div className="status-dot"></div>

              READY

            </div>

          </div>


          {/* Panel Body */}

          <div className="panel-body">

            <form onSubmit={handleSubmit}>


              {/* =========================================
                  BASIC INFORMATION
              ========================================= */}

              <div
                style={{
                  marginBottom: "24px"
                }}
              >

                <div className="section-eyebrow">
                  01 / BASIC INFORMATION
                </div>

                <h3
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "18px"
                  }}
                >
                  Event Details
                </h3>


                {/* Event Title */}

                <div className="mb-3">

                  <label className="nexus-form-label">
                    EVENT TITLE
                  </label>

                  <input
                    type="text"
                    name="title"
                    className="nexus-form-control"
                    placeholder="Enter event title..."
                    value={event.title}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Description */}

                <div className="mb-3">

                  <label className="nexus-form-label">
                    EVENT DESCRIPTION
                  </label>

                  <textarea
                    name="description"
                    className="nexus-form-control"
                    rows="5"
                    placeholder="Describe the event, rules, objectives and other important information..."
                    value={event.description}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>


                {/* Category + Venue */}

                <div className="row g-3">

                  {/* Category */}

                  <div className="col-md-6">

                    <label className="nexus-form-label">
                      EVENT CATEGORY
                    </label>

                    <select
                      name="category"
                      className="nexus-form-control"
                      value={event.category}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select Category
                      </option>

                      <option value="Workshop">
                        Workshop
                      </option>

                      <option value="Seminar">
                        Seminar
                      </option>

                      <option value="Competition">
                        Competition
                      </option>

                      <option value="Conference">
                        Conference
                      </option>

                      <option value="Sports">
                        Sports
                      </option>

                      <option value="Cultural">
                        Cultural
                      </option>

                    </select>

                  </div>


                  {/* Venue */}

                  <div className="col-md-6">

                    <label className="nexus-form-label">
                      EVENT VENUE
                    </label>

                    <input
                      type="text"
                      name="venue"
                      className="nexus-form-control"
                      placeholder="Enter event venue..."
                      value={event.venue}
                      onChange={handleChange}
                    />

                  </div>

                </div>

              </div>


              {/* =========================================
                  DATE & TIME
              ========================================= */}

              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "24px",
                  marginBottom: "24px"
                }}
              >

                <div className="section-eyebrow">
                  02 / SCHEDULE
                </div>

                <h3
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "18px"
                  }}
                >
                  Event Schedule
                </h3>


                <div className="row g-3">


                  {/* Event Date */}

                  <div className="col-md-6">

                    <label className="nexus-form-label">
                      EVENT DATE
                    </label>

                    <input
                      type="date"
                      name="eventDate"
                      className="nexus-form-control"
                      value={event.eventDate}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* Event Time */}

                  <div className="col-md-6">

                    <label className="nexus-form-label">
                      EVENT TIME
                    </label>

                    <input
                      type="time"
                      name="eventTime"
                      className="nexus-form-control"
                      value={event.eventTime}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* Registration Start */}

                  <div className="col-md-6">

                    <label className="nexus-form-label">
                      REGISTRATION START
                    </label>

                    <input
                      type="date"
                      name="registrationStart"
                      className="nexus-form-control"
                      value={event.registrationStart}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* Registration End */}

                  <div className="col-md-6">

                    <label className="nexus-form-label">
                      REGISTRATION END
                    </label>

                    <input
                      type="date"
                      name="registrationEnd"
                      className="nexus-form-control"
                      value={event.registrationEnd}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

              </div>


              {/* =========================================
                  EVENT MANAGEMENT
              ========================================= */}

              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "24px",
                  marginBottom: "24px"
                }}
              >

                <div className="section-eyebrow">
                  03 / MANAGEMENT
                </div>

                <h3
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "18px"
                  }}
                >
                  Event Management
                </h3>


                <div className="row g-3">


                  {/* Maximum Participants */}

                  <div className="col-md-6">

                    <label className="nexus-form-label">
                      MAXIMUM PARTICIPANTS
                    </label>

                    <input
                      type="number"
                      name="maxParticipants"
                      className="nexus-form-control"
                      placeholder="e.g. 100"
                      min="1"
                      value={event.maxParticipants}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* Organizer */}

                  <div className="col-md-6">

                    <label className="nexus-form-label">
                      ORGANIZER NAME
                    </label>

                    <input
                      type="text"
                      name="organizer"
                      className="nexus-form-control"
                      placeholder="Enter organizer name..."
                      value={event.organizer}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* Image URL */}

                  <div className="col-12">

                    <label className="nexus-form-label">
                      EVENT IMAGE URL
                    </label>

                    <input
                      type="url"
                      name="image"
                      className="nexus-form-control"
                      placeholder="https://example.com/event-image.jpg"
                      value={event.image}
                      onChange={handleChange}
                    />

                    <div className="nexus-form-help">
                      <i className="bi bi-info-circle"></i>
                      Add a public image URL for the event banner.
                    </div>

                  </div>

                </div>

              </div>


              {/* =========================================
                  FORM ACTIONS
              ========================================= */}

              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "22px",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                  flexWrap: "wrap"
                }}
              >

                {/* Reset */}

                <button
                  type="button"
                  className="btn-glow outline"
                  onClick={() =>
                    setEvent({
                      title: "",
                      description: "",
                      venue: "",
                      category: "",
                      eventDate: "",
                      registrationStart: "",
                      registrationEnd: "",
                      eventTime: "",
                      maxParticipants: "",
                      organizer: "",
                      image: ""
                    })
                  }
                >

                  <i className="bi bi-arrow-counterclockwise"></i>

                  Reset Form

                </button>


                {/* Submit */}

                <button
                  type="submit"
                  className="btn-glow violet"
                >

                  <i className="bi bi-plus-lg"></i>

                  Create Event

                </button>

              </div>


            </form>

          </div>

        </div>

      </main>


      {/* =========================================
          FORM STYLING
      ========================================= */}

      <style>
        {`

          /* =========================================
             NEXUS FORM LABEL
          ========================================= */

          .nexus-form-label {
            display: block;
            margin-bottom: 8px;
            color: var(--text-muted);
            font-family: 'Share Tech Mono', monospace;
            font-size: 10px;
            letter-spacing: 2px;
            font-weight: 500;
          }


          /* =========================================
             NEXUS FORM CONTROL
          ========================================= */

          .nexus-form-control {
            width: 100%;
            background: rgba(123, 47, 255, 0.06);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 12px 14px;
            color: var(--text-primary);
            font-family: 'Inter', sans-serif;
            font-size: 13px;
            outline: none;
            transition:
              border-color 0.25s ease,
              box-shadow 0.25s ease,
              background 0.25s ease;
          }


          /* =========================================
             FOCUS
          ========================================= */

          .nexus-form-control:focus {
            border-color: var(--violet);
            background: rgba(123, 47, 255, 0.1);
            box-shadow:
              0 0 0 3px rgba(123, 47, 255, 0.12),
              0 0 18px rgba(123, 47, 255, 0.08);
          }


          /* =========================================
             PLACEHOLDER
          ========================================= */

          .nexus-form-control::placeholder {
            color: var(--text-dim);
          }


          /* =========================================
             SELECT
          ========================================= */

          .nexus-form-control option {
            background: var(--panel);
            color: var(--text-primary);
          }


          /* =========================================
             TEXTAREA
          ========================================= */

          textarea.nexus-form-control {
            resize: vertical;
            min-height: 120px;
          }


          /* =========================================
             DATE & TIME ICON
          ========================================= */

          .nexus-form-control::-webkit-calendar-picker-indicator {
            filter: invert(1);
            opacity: 0.6;
            cursor: pointer;
          }


          /* =========================================
             HELP TEXT
          ========================================= */

          .nexus-form-help {
            margin-top: 7px;
            font-size: 10px;
            color: var(--text-dim);
            font-family: 'Share Tech Mono', monospace;
          }


          .nexus-form-help i {
            color: var(--cyan);
            margin-right: 5px;
          }


          /* =========================================
             FORM PANEL ANIMATION
          ========================================= */

          .panel {
            animation: cardEntry 0.6s ease both;
          }


          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 576px) {

            .panel-body {
              padding: 16px;
            }

            .panel-head {
              padding: 16px;
            }

            .panel-head .status-live {
              display: none;
            }

            .page-title {
              font-size: 24px;
            }

            .nexus-form-control {
              padding: 11px 12px;
            }

          }

        `}
      </style>

    </>

  );
}

export default AddEvent;