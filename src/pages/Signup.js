import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../firebase/firebaseAuth';
import '../styles/AuthPages.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await registerUser(email, password);

      // ✅ Save name + email to localStorage
      localStorage.setItem('user', JSON.stringify({ name, email }));

      alert("Signup successful!");
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group mt-2">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="form-group mt-2">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Enter a strong password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
        <p className="mt-2">Already have an account? <Link to="/">Login here</Link></p>
      </form>
    </div>
  );
}

export default Signup;
