import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainShowroom.css';
import HomeNavbar from '../components/HomeNavbar';

const carSlides = [
  {
    id: "alcazar",
    src: '/images/car1.jpeg',
    name: 'Hyundai Alcazar',
    price: '₹8.5L',
    tagline: 'Bold SUV for your bold life',
    emi: 'EMI starts ₹10,200/month'
  },
  {
    id: "bmw5series",
    src: '/images/car2.jpeg',
    name: 'BMW 5 Series',
    price: '₹22L',
    tagline: 'Luxury that speaks class',
    emi: 'EMI starts ₹27,900/month'
  },
  {
    id: "creta",
    src: '/images/car3.jpeg',
    name: 'Hyundai Creta',
    price: '₹7.6L',
    tagline: 'India’s premium family SUV',
    emi: 'EMI starts ₹9,200/month'
  },
  {
    id: "fortuner",
    src: '/images/car4.jpeg',
    name: 'Toyota Fortuner',
    price: '₹18.9L',
    tagline: 'Power & presence redefined',
    emi: 'EMI starts ₹23,300/month'
  },
  {
    id: "dzire",
    src: '/images/car5.jpg',
    name: 'Maruti Dzire',
    price: '₹3.9L',
    tagline: 'Family-friendly & fuel-efficient',
    emi: 'EMI starts ₹5,100/month'
  },
  {
    id: "sonet",
    src: '/images/car6.jpg',
    name: 'Kia Sonet',
    price: '₹6.2L',
    tagline: 'Tech-loaded compact SUV',
    emi: 'EMI starts ₹7,500/month'
  },
  {
    id: "xuv300",
    src: '/images/car7.jpg',
    name: 'Mahindra XUV300',
    price: '₹6.9L',
    tagline: 'Solid build. Great features.',
    emi: 'EMI starts ₹8,400/month'
  },
  {
    id: "verna",
    src: '/images/car8.jpg',
    name: 'Hyundai Verna',
    price: '₹5.5L',
    tagline: 'Elegance meets performance',
    emi: 'EMI starts ₹6,600/month'
  }
];

const MainShowroom = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const current = carSlides[index];

  const nextSlide = () => setIndex((index + 1) % carSlides.length);
  const prevSlide = () => setIndex((index - 1 + carSlides.length) % carSlides.length);

  const handleBuyNow = () => {
    navigate('/buy-now', { state: { car: current } });
  };

  const handleMoreInfo = () => {
    navigate(`/info/${current.id}`);
  };

  return (
    <div className="main-showroom-container">
      <HomeNavbar />
      <header className="showroom-header">
        <h1>Welcome to SRS Secondhand Car Seller</h1>
        <p className="subtitle">Where trust drives your next ride</p>
        <p className="tagline">Explore quality secondhand cars at unbeatable prices.</p>
      </header>

      <section className="top-sellers-info">
        <h2>🚗 Top Selling Cars This Month</h2>
        <p>These premium models are the most in-demand choices trusted by happy customers nationwide.</p>
      </section>

      <div className="slideshow">
        <button onClick={prevSlide} className="nav-button">❮</button>
        <div className="slide-wrapper">
          <img src={current.src} alt={current.name} className="slide-img" />
          <p className="car-label">{current.name}</p>
          <p className="car-price">{current.price}</p>
          <p className="car-tagline">{current.tagline}</p>
          <p className="car-emi">{current.emi}</p>
          <div className="button-row">
            <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
            <button className="more-info-button" onClick={handleMoreInfo}>More Info</button>
          </div>
        </div>
        <button onClick={nextSlide} className="nav-button">❯</button>
      </div>
    </div>
  );
};

export default MainShowroom;
