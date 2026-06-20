import './Register.css';
import './Main.css';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const Register = () => {
  var navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var username = e.target.username.value;
    var email = e.target.email.value;
    var password = e.target.password.value;
    var confirmPassword = e.target.confirmPassword.value;
    var obj = { username, email, password, confirmPassword };

    fetch('http://localhost:7000/api/register', {
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
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="logo">N▸EXUS</div>
          <p className="subtitle">CREATE YOUR GAMING IDENTITY</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Username" name="username" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email Address" name="email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" name="password" />
            </div>
            <div className="mb-4">
              <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" />
            </div>

            <div className="form-check text-light mb-4">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">I agree to the Terms & Conditions</label>
            </div>

            <button className="btn btn-neon1" type="submit">CREATE ACCOUNT</button>

            <div className="text-center mt-4">
              Already have an account? <Link to="/login" className="auth-link">Sign In</Link>
            </div>

            <div className="hud-box">STATUS : ONLINE • 2.4M PLAYERS CONNECTED</div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;