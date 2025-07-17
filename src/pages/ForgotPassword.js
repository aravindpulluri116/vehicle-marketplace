// src/pages/ForgotPassword.js
import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // TODO: Add Firebase reset logic here
    console.log("Password reset email sent to:", email);
    setMessage(`Reset email sent to ${email}`);
  };

  return (
    <div className="container mt-5">
      <h2>Forgot Your Password?</h2>
      <form onSubmit={handlePasswordReset}>
        <div className="form-group">
          <label>Enter your registered email:</label>
          <input
            type="email"
            className="form-control"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning mt-3">Send Reset Link</button>
      </form>
      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}

export default ForgotPassword;
