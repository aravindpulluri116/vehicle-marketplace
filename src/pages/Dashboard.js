// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../firebase/firebaseAuth';
import { getAuth } from 'firebase/auth';

function Dashboard() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await logoutUser();
      alert('You have been logged out!');
      navigate('/login');
    } catch (error) {
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <div className="dashboard container mt-5 text-center">
      <h2>Welcome, {user?.email}</h2>
      <p>You’re logged in successfully.</p>

      <div className="dashboard-buttons mt-4">
        <button className="btn btn-primary m-2" onClick={() => navigate('/buy')}>
          Buy Cars
        </button>
        <button className="btn btn-success m-2" onClick={() => navigate('/sell')}>
          Sell a Car
        </button>
        <button className="btn btn-warning m-2" onClick={() => navigate('/your-orders')}>
          Your Orders
        </button>
        <button className="btn btn-danger m-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
