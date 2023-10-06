import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="section">
        <h3>For Devs</h3>
        <ul>
          <li>How it works</li>
          <li>How to create a profile</li>
          <li>Find jobs</li>
        </ul>
      </div>
      <div className="section">
        <h3>For Clients</h3>
        <ul>
          <li>How it works</li>
          <li>How to post a job</li>
          <li>Find devs</li>
        </ul>
      </div>
      <div className="section">
        <h3>Stay Connected</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/somilror" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-logo.png" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter-logo.png" alt="Twitter" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-logo.png" alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;