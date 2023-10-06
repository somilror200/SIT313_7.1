import React from 'react';
import './SeeAllCustomers.css';

function SeeAllCustomers({ label, onClick }) {
  return (
    <button className="see-all-customers-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default SeeAllCustomers;