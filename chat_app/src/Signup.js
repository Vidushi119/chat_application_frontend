import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <button className="google-btn">Sign up with Google</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup; 