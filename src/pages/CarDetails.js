// src/pages/CarDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import carData from '../data/CarData';
import HomeNavbar from '../components/HomeNavbar';
import './CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const car = carData.find((c) => c.id === id);

  if (!car) {
    return (
      <>
        <HomeNavbar />
        <div className="car-details-container">
          <h2>Car not found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <HomeNavbar />
      <div className="car-details-container">
        <div className="car-details-card">
          <img src={car.image} alt={car.name} className="car-details-img" />
          <div className="car-details-info">
            <h2>{car.name}</h2>
            <p className="car-price">{car.price}</p>
            <p className="car-description">{car.description}</p>

            <h3>Top Features</h3>
            <ul className="car-features">
              {car.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>

            <h3>Specifications</h3>
            <ul className="car-specs">
              {Object.entries(car.specs).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </li>
              ))}
            </ul>

            <div className="car-detail-actions">
              <button onClick={() => alert('Buy Now Clicked')}>🚗 Buy Now</button>
              <button onClick={() => alert('Add to Wishlist')}>❤️ Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
