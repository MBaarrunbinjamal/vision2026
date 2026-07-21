import { useNavigate } from "react-router-dom";
function Pgheader() {
  const navigate = useNavigate();
  return (
//    <!-- Page Header -->
  <div className="page-header d-flex flex-wrap align-items-start justify-content-between gap-3">
    <div>
      <div className="breadcrumb-custom mb-2">
        <span>NEXUS</span><span className="sep">/</span>
        <span>COMMAND</span><span className="sep">/</span>
        <span className="current">DASHBOARD</span>
      </div>
      <h1 className="page-title">Command <span>Overview</span></h1> 
      <p className="page-sub">Last synced: <span style={{
  color: "var(--cyan)",
  fontFamily: "'Share Tech Mono', monospace"
}}>2 seconds ago</span> &nbsp;·&nbsp; Server time: <span id="serverTime" style={{
  fontFamily: "'Share Tech Mono', monospace",
  color: "var(--purple)"
}}></span></p>
    </div>
    <div className="d-flex gap-2 flex-wrap">
      <button className="btn-glow outline"><i className="bi bi-download"></i> Export</button>
      <button
      className="btn-glow violet"
      onClick={() => navigate("/addevent")}
    >
      <i className="bi bi-plus-lg"></i> New Event
    </button>
    </div>
  </div>
  );
}
export default Pgheader;