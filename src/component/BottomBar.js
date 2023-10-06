import React from 'react';
import './BottomBar.css';

function BottomBar() {
  return (
    <div className="bottom-bar">
      <p>Signup for Daily Insider:</p>
      <div className="subscribe-box">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default BottomBar;