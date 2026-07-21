function Footer() {
    return (
// <!-- ═══════════════════════════════════ FOOTER -->
  <footer>
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6">
          <div className="footer-brand">N▸EXUS</div>
          <div className="footer-tagline">// THE ULTIMATE GAMING UNIVERSE</div>
          <p className="mt-3" style={{
  fontSize: ".9rem",
  color: "#4a3560",
  lineHeight: 1.7,
  maxWidth: "280px"
}}>Where legends are forged and careers are built. Join the world's most competitive gaming platform.</p>
          <div className="social-links mt-3">
            <a className="social-btn" href="#" aria-label="Twitter">𝕏</a>
            <a className="social-btn" href="#" aria-label="Discord" style={{ fontSize: ".8rem" }}>DC</a>
            <a className="social-btn" href="#" aria-label="Twitch" style={{ fontSize: ".7rem" }}>TW</a>
            <a className="social-btn" href="#" aria-label="YouTube" style={{ fontSize: ".75rem" }}>YT</a>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-heading">Platform</div>
          <ul className="footer-links">
            <li><a href="#">Games</a></li>
            <li><a href="#">Tournaments</a></li>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Clans</a></li>
            <li><a href="#">Marketplace</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-heading">Company</div>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-heading">Support</div>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Anti-Cheat</a></li>
            <li><a href="#">Rules</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-heading">Legal</div>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">DMCA</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 NEXUS GAMING INC. — ALL RIGHTS RESERVED</div>
        <div className="footer-copy" style={{ color: "rgba(179,0,255,.3)" }}>v4.7.1 — BUILD 20250530</div>
      </div>
    </div>
  </footer>
    );
}
export default Footer;