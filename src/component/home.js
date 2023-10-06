import React from 'react';
import FreelancerCard from './freelanceCard';
import CustomerCard from './CustomerCard';
import SeeMoreButton from './SeeMoreButton.js';
import SeeAllCustomers from './SeeAllCustomers';
import BottomBar from './BottomBar';
import Footer from './Footer';
import Footer2 from './Footer_2';

const Home = () => {
  const imageStyle = {
    width: '100%',
    maxHeight: '450px',
    marginTop: '20px',
  };

  const featuredFreelancers = [
    {
      name: 'Freelancer 1',
      description: 'Experienced developer',
      rating: 5,
      imageUrl: '/images/freelancer1.jpeg',
    },
    {
      name: 'Freelancer 2',
      description: 'Creative designer',
      rating: 3,
      imageUrl: '/images/freelancer2.jpeg',
    },
    {
      name: 'Freelancer 3',
      description: 'Skilled writer',
      rating: 4,
      imageUrl: '/images/freelancer3.jpeg',
    },
  ];

  const featuredCustomer = [
    {
      name: 'Customer 1',
      description: 'Frequent buyer',
      rating: 4,
      imageUrl: '/images/customer1.png',
    },
    {
      name: 'Customer 2',
      description: 'Bulk orders',
      rating: 4,
      imageUrl: '/images/customer2.png',
    },
    {
      name: 'Customer 3',
      description: 'Daily orders',
      rating: 5,
      imageUrl: '/images/customer3.png',
    },
  ];

  return (
    <div className="HomePage">
      <img src="/devlink_home_img.png" alt="Devlink Marketplace Logo" style={imageStyle} />
      <h2 style={{ textAlign: 'center' }}>Featured Freelancers</h2>
      <div className="freelancer-cards">
        {featuredFreelancers.map((freelancer, index) => (
          <FreelancerCard
            key={index}
            name={freelancer.name}
            description={freelancer.description}
            rating={freelancer.rating}
            imageUrl={freelancer.imageUrl}
          />
        ))}
      </div>
      <SeeMoreButton label="See More" onClick={() => console.log('See More button clicked')} />
      <div className="customer-cards">
        {featuredCustomer.map((customer, index) => (
          <CustomerCard
            key={index}
            name={customer.name}
            description={customer.description}
            rating={customer.rating}
            imageUrl={customer.imageUrl}
          />
        ))}
      </div>
      <SeeAllCustomers label="See All Customers" onClick={() => console.log('See All Customers button clicked')} />
      <BottomBar />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default Home;