import React from 'react';
import PropTypes from 'prop-types';
import './CustomerCard.css'

function CustomerCard({ name, description, rating, imageUrl }) {
  const starIcons = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <span key={index} role="img" aria-label="star">
      ⭐️
    </span>
  ));

  return (
    <div className="customer-card">
      <img src={imageUrl} alt={`${name}'s Profile`} className="customer--image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="rating">
        {starIcons}
      </div>
    </div>
  );
}

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CustomerCard;