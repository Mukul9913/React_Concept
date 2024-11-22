import React from 'react';

function Header() {
  return (
    <header className="white-header">
      <div className="logo">foodwagon</div>
      <div className="location">
        Deliver to: <span className="current-location">Current Location Mohammadpur Bus Stand, Dhaka</span>
      </div>
      <div className="actions">
        <input type="text" placeholder="Search Food" />
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;
    