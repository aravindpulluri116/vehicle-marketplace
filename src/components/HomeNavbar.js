// src/components/HomeNavbar.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './HomeNavbar.css';

const HomeNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="home-navbar">
      <div className="logo">🚗 <span>SRS Car Seller</span></div>
      <div className="nav-links">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
        >
          Home
        </NavLink>

        {/* ❌ Removed Buy link */}
        {/* ✅ Replaced Sell with More Info */}
        <NavLink
          to="/info/1" // default to first car (Hyundai Alcazar), can be dynamic later
          className={({ isActive }) =>
            isActive || currentPath.startsWith("/info") ? 'nav-link active-link' : 'nav-link'
          }
        >
          More Info
        </NavLink>

        <NavLink
          to="/your-orders"
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
        >
          Your Orders
        </NavLink>

        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
        >
          Help
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
        >
          Account
        </NavLink>
      </div>
    </nav>
  );
};

export default HomeNavbar;
