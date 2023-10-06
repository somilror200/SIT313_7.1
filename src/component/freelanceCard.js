import React from 'react';
import PropTypes from 'prop-types';
import './freelanceCard.css';

function FreelancerCard({ name, description, rating, imageUrl }) {
  const starIcons = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <span key={index} role="img" aria-label="star">
      ⭐️
    </span>
  ));

  return (
    <div className="freelancer-card">
      <img src={imageUrl} alt={`${name}'s Profile`} className="freelancer-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="rating">
        {starIcons}
      </div>
    </div>
  );
}

FreelancerCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default FreelancerCard;