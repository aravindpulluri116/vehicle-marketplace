import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import './Account.css';

const Account = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {
    name: 'Not Available',
    email: 'Not Available'
  };

  return (
    <>
      <HomeNavbar />
      <div className="account-container">
        <h2>My Account</h2>

        <div className="account-card">
          <h3>Profile Information</h3>
          <p><strong>Name:</strong> {user.name || 'Not Available'}</p>
          <p><strong>Email:</strong> {user.email || 'Not Available'}</p>
          <p><strong>Logged In:</strong> Yes</p>
        </div>

        <div className="account-actions">
          <a href="/your-orders">🧾 View Your Orders</a>
          <a href="/help">❓ Customer Help</a>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = '/';
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
