import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../firebase/firebaseAuth';
import '../styles/AuthPages.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await loginUser(email, password);

      // ✅ Load stored user info using email
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const name = storedUser?.email === email ? storedUser.name : 'User';

      // ✅ Save again with both name and email
      localStorage.setItem('user', JSON.stringify({ name, email }));

      alert("Login successful!");
      navigate('/home');
    } catch (error) {
      console.error("Login Error:", error.code);

      switch (error.code) {
        case 'auth/user-not-found':
          alert("No account found with this email. Please sign up first.");
          break;
        case 'auth/wrong-password':
          alert("Incorrect password. Please try again.");
          break;
        case 'auth/invalid-email':
          alert("Invalid email format.");
          break;
        default:
          alert("Login failed. Please try again later.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
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
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-success mt-3">Login</button>

        <p className="mt-3"><Link to="/forgot-password">Forgot password?</Link></p>
        <p className="mt-2">Don't have an account? <Link to="/signup">Create one</Link></p>
      </form>
    </div>
  );
}

export default Login;
