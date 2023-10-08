import React from 'react';
import './BottomBar.css';
import emailjs from "emailjs-com";

function BottomBar() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wcub1rh', 'template_y95uzac', e.target, 'bUAXeIgJbhSWgtXuP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form className="bottom-bar" onSubmit={sendEmail}>
      <p>Signup for Daily Insider:</p>
      <div className="subscribe-box">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
}

export default BottomBar;
