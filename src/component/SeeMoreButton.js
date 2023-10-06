import React from 'react';
import './SeeMoreButton.css';

function SeeMoreButton({ label, onClick }) {
  return (
    <button className="see-more-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default SeeMoreButton;