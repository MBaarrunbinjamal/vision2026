import React, { useEffect, useState } from "react";
import EventRegistration from "./EventRegistration";


function Tournament() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const res = await fetch("http://localhost:7000/api/events");
      const data = await res.json();

      if (data.success) {
        setEvents(data.events);
      }
    } catch (err) {
      console.log(err);
    }
  }

const [selectedEvent, setSelectedEvent] = useState(null);



  return (
    // <!-- ═══════════════════════════════════ TOURNAMENT -->
    
    <section id="tournament" style={{
      padding: "100px 0",
      position: "relative",
      zIndex: 2,
      background:
        "linear-gradient(135deg, rgba(13,0,16,.9) 0%, rgba(30,0,53,.9) 50%, rgba(13,0,16,.9) 100%)"
    }}>
      <div className="container">
        <div className="row mb-5 reveal">
          <div className="col-lg-7">
            <div className="section-eyebrow">COMPETE</div>
            <h2 className="section-title">ACTIVE <span>TOURNAMENTS</span></h2>
            <p className="mt-3" style={{ color: "#6a5580", fontSize: "1rem" }}>Real money. Real glory. Zero excuses.</p>
          </div>
        </div>
        {/* <div className="row g-4">
          <div className="col-md-6 col-xl-4 reveal">
            <div className="tournament-card">
              <div className="t-card-header">
                <div>
                  <div className="t-game"></div>
                  <div style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginTop: ".25rem"
                  }}>APEX CIRCUIT S12</div>
                </div>
                <span className="t-status live">● LIVE</span>
              </div>
              <div className="t-card-body">
                <div className="t-prize">$10,000</div>
                <div className="t-prize-label">TOTAL PRIZE POOL</div>
                <div className="progress-neon"><div className="bar" style={{ width: "78%" }}></div></div>
                <div className="progress-label"><span>78/100 SLOTS FILLED</span><span>22 OPEN</span></div>
                <div className="t-meta">
                  <div className="t-meta-item">Teams<br /><strong>50</strong></div>
                  <div className="t-meta-item">Format<br /><strong>5v5</strong></div>
                  <div className="t-meta-item">Platform<br /><strong>ALL</strong></div>
                </div>
                <div className="mt-3">
                  <a href="#" className="btn-neon btn-neon-primary" style={{ fontSize: ".65rem", padding: ".5rem 1.2rem" }}>⚡ JOIN NOW</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 reveal" style={{ transitionDelay: ".15s" }}>
            <div className="tournament-card">
              <div className="t-card-header">
                <div>
                  <div className="t-game">ETERNAL CLASH</div>
                  <div style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginTop: ".25rem"
                  }}>WORLD CHAMPIONSHIP</div>
                </div>
                <span className="t-status soon">◇ SOON</span>
              </div>
              <div className="t-card-body">
                <div className="t-prize">$50,000</div>
                <div className="t-prize-label">TOTAL PRIZE POOL</div>
                <div className="progress-neon"><div className="bar" style={{ width: "42%" }}></div></div>
                <div className="progress-label"><span>42/128 TEAMS</span><span>Starts in 3d</span></div>
                <div className="t-meta">
                  <div className="t-meta-item">Teams<br /><strong>128</strong></div>
                  <div className="t-meta-item">Format<br /><strong>3v3</strong></div>
                  <div className="t-meta-item">Platform<br /><strong>PC</strong></div>
                </div>
                <div className="mt-3">
                  <a href="#" className="btn-neon btn-neon-primary" style={{ fontSize: ".65rem", padding: ".5rem 1.2rem" }}>⚡ REGISTER</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 reveal" style={{ transitionDelay: ".3s" }}>
            <div className="tournament-card">
              <div className="t-card-header">
                <div>
                  <div className="t-game">OVERDRIVE X</div>
                  <div style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginTop: ".25rem"
                  }}>VELOCITY GRAND PRIX</div>
                </div>
                <span className="t-status live">● LIVE</span>
              </div>
              <div className="t-card-body">
                <div className="t-prize">$5,000</div>
                <div className="t-prize-label">TOTAL PRIZE POOL</div>
                <div className="progress-neon"><div className="bar" style={{ width: "95%" }}></div></div>
                <div className="progress-label"><span>95/100 RACERS</span><span>5 LEFT</span></div>
                <div className="t-meta">
                  <div className="t-meta-item">Players<br /><strong>100</strong></div>
                  <div className="t-meta-item">Format<br /><strong>Solo</strong></div>
                  <div className="t-meta-item">Platform<br /><strong>ALL</strong></div>
                </div>
                <div className="mt-3">
                  <a href="#" className="btn-neon btn-neon-primary" style={{ fontSize: ".65rem", padding: ".5rem 1.2rem" }}>⚡ LAST SPOTS</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
       
        <div className="row g-4">

          {events.map((event, index) => (

            <div
              className="col-md-6 col-xl-4 "
              key={event._id}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >

              <div className="tournament-card">

                <div className="t-card-header">

                  <div>

                    <div className="t-game">

                      {event.category}

                    </div>

                    <div
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: ".95rem",
                        fontWeight: 700,
                        color: "#fff",
                        marginTop: ".25rem"
                      }}
                    >

                      {event.title}

                    </div>

                  </div>

                  <span className="t-status soon">

                   {event.status === "live" ? "● LIVE" : "◇ SOON"}

                  </span>

                </div>

                <div className="t-card-body">

                  <div className="t-prize">

                    {event.organizer}

                  </div>

                  <div className="t-prize-label">

                    Organizer

                  </div>

                  <p style={{ color: "#999", marginTop: "15px" }}>

                    {event.description}

                  </p>

                  <div className="t-meta">

                    <div className="t-meta-item">

                      Venue

                      <br />

                      <strong>{event.venue}</strong>

                    </div>

                    <div className="t-meta-item">

                      Date

                      <br />

                      <strong>{event.eventDate}</strong>

                    </div>

                    <div className="t-meta-item">

                      Time

                      <br />

                      <strong>{event.eventTime}</strong>

                    </div>

                  </div>

                  <div className="mt-3">

                    <button
                      className="btn-neon btn-neon-primary"
                      onClick={() => setSelectedEvent(event)}
                      style={{
                        fontSize: ".65rem",
                        padding: ".5rem 1.2rem"
                      }}
                    >

                      Register

                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>
        
      </div>
      {
    selectedEvent && (
        <EventRegistration
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
        />
    )
}
    </section>
    
  );
}
export default Tournament;