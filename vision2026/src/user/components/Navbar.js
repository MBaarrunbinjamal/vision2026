import './Navbar.css';
import './Main.css';
import { useState, useRef, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import Token from "../../Token";
function Navbar()

{
    var tokenCtx = useContext(Token);
  var [currentToken, setCurrentToken] = useState(tokenCtx);

  function deleteToken() {
    localStorage.removeItem("token");
    setCurrentToken(null);
  }
  return (
   // ═══════════════════════════════════ NAVBAR 
  <nav className="navbar navbar-expand-lg" id="mainNav">
    <div className="container">
      <Link className="navbar-brand" to="/">C▸DEX</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav mx-auto gap-1">
          <li className="nav-item"><a className="nav-link" href="#games">Games</a></li>
          <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
          <li className="nav-item"><a className="nav-link" href="#tournament">Tournaments</a></li>
          <li className="nav-item"><a className="nav-link" href="#leaderboard">Leaderboard</a></li>
        </ul>
        <ul className="navbar-nav gap-2">
          
            {currentToken !== null ? (
            <button  onClick={deleteToken}>Logout</button>
          ) : (
            <>
  <li className="nav-item"><Link className="nav-link" to="/login">Login In</Link></li>
          <li className="nav-item"><Link className="nav-link nav-cta" to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  </nav>

  );
}

export default Navbar;