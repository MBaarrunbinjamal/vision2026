function Cta (){
    return(
        // <!-- ═══════════════════════════════════ CTA -->
  <section id="cta" style={{
  padding: "120px 0",
  position: "relative",
  zIndex: 2,
  overflow: "hidden"
}}>
    <div className="cta-orb"></div>
    <div className="container position-relative" style={{ zIndex: 1 }}> 
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center reveal">
          <div className="section-eyebrow justify-content-center">JOIN THE NEXUS</div>
          <h2 className="cta-title">READY TO <span>DOMINATE?</span></h2>
          <p className="cta-sub">2.4 million players can't be wrong. Your gaming career starts with one click.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap align-items-center" style={{ maxWidth: "500px", margin: "0 auto" }}>
            <input type="email" className="input-neon flex-grow-1" placeholder="enter your email address" style={{ minWidth: "220px" }} />
            <a href="#" className="btn-neon btn-neon-primary" style={{ whiteSpace: "nowrap" }}>⚡ CREATE FREE ACCOUNT</a>
          </div>
          <p className="mt-3" style={{ fontSize: ".78rem", color: "#4a3560", fontFamily: "'Share Tech Mono',monospace" }}>NO CREDIT CARD REQUIRED · INSTANT ACCESS · CANCEL ANYTIME</p>
        </div>
      </div>
    </div>
  </section>
    );
}
export default Cta;