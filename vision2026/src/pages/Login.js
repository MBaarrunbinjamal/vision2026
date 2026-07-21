import "./Login.css";

import { Link, useNavigate } from 'react-router-dom';

function Login() {
  var navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var email = e.target.email.value;
    var password = e.target.password.value;
    var obj = { email, password };

    fetch('http://localhost:7000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        var role = data.Role;
        alert(data.message);
        if (role === 'Admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        alert(data.message);
      }
    })
    .catch(err => console.log('something went wrong', err));
  }

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-logo">N▸EXUS</div>
          <p className="login-subtitle">ENTER THE GRID</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>EMAIL</label>
              <input type="email" placeholder="Enter your email" name="email" />
            </div>

            <div className="input-group">
              <label>PASSWORD</label>
              <input type="password" placeholder="Enter your password" name="password" />
            </div>

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot?</a>
            </div>

            <button className="login-btn" type="submit">⚡ LOGIN</button>

            <p className="register-text">
              Don't have an account? <Link to="/register" className="auth-link">JOIN NEXUS</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;