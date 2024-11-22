import React, { useState } from 'react';

function Hero() {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Are you starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <div className="search-box">
          <div className="tabs">
            <button 
              className={activeTab === 'Delivery' ? 'active' : ''}
              onClick={() => setActiveTab('Delivery')}
            >
              Delivery
            </button>
            <button 
              className={activeTab === 'Pickup' ? 'active' : ''}
              onClick={() => setActiveTab('Pickup')}
            >
              Pickup
            </button>
          </div>
          <div className="search-input">
            <input type="text" placeholder="Enter Your Address" />
            <button>Find Food</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
