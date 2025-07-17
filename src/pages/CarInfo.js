import React from 'react';
import { useParams } from 'react-router-dom';
import carData from '../data/CarData';
import HomeNavbar from '../components/HomeNavbar';
import './CarInfo.css';

const CarInfo = () => {
  const { carId } = useParams();
  const car = carData.find((item) => item.id === carId);

  if (!car) {
    return (
      <>
        <HomeNavbar />
        <div className="car-info-container">
          <h2>Car not found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <HomeNavbar />
      <div className="car-info-container">
        <img src={car.image} alt={car.name} className="car-image" />
        <div className="car-details">
          <h2>{car.name}</h2>
          <p><strong>Price:</strong> {car.price}</p>
          <p><strong>Description:</strong> {car.description}</p>
          <p><strong>Engine:</strong> {car.specs.engine}</p>
          <p><strong>Mileage:</strong> {car.specs.mileage}</p>
          <p><strong>Fuel Type:</strong> {car.specs.fuelType}</p>
          <p><strong>Seating Capacity:</strong> {car.specs.seatingCapacity}</p>
          <p><strong>Transmission:</strong> {car.specs.transmission}</p>
          <p><strong>Boot Space:</strong> {car.specs.bootSpace}</p>
          <h4>Top Features:</h4>
          <ul>
            {car.features.map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
