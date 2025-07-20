import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <button className="google-btn">Sign in with Google</button>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Login; 