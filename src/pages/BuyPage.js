// src/pages/BuyPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';
import './BuyPage.css';

const BuyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [emiDetails, setEmiDetails] = useState({
    downPayment: '', bank: '', tenure: '', interest: ''
  });
  const [loanDetails, setLoanDetails] = useState({
    pan: '', salary: '', bank: '', tenure: ''
  });

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    if (paymentMethod === 'Card') {
      if (!cardName || cardNumber.replace(/\s/g, '').length !== 16 || !/^\d{2}\/\d{2}$/.test(expiry) || cvv.length !== 3) {
        alert('Please enter complete and valid card details');
        return;
      }
    }

    if (paymentMethod === 'EMI') {
      const { downPayment, bank, tenure, interest } = emiDetails;
      if (!downPayment || !bank || !tenure || !interest) {
        alert('Please complete all EMI details');
        return;
      }
    }

    if (paymentMethod === 'Car Loan') {
      const { pan, salary, bank, tenure } = loanDetails;
      if (!pan || !salary || !bank || !tenure) {
        alert('Please complete all Car Loan details');
        return;
      }
    }

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      ...car,
      paymentMethod,
      details:
        paymentMethod === 'Card' ? { cardName, cardNumber, expiry, cvv }
        : paymentMethod === 'EMI' ? emiDetails
        : loanDetails,
      orderTime: new Date().toLocaleString()
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('✅ Payment Successful! Thank you for buying from SRS 🚗❤️');
    navigate('/your-orders');
  };

  return (
    <div className="buy-page-container">
      <HomeNavbar />
      <div className="buy-content">
        <h2>Purchase Your Dream Car</h2>
        {car ? (
          <>
            <img src={car.src} alt={car.name} className="buy-car-img" />
            <h3>{car.name}</h3>
            <p className="buy-price">{car.price}</p>
            <p className="buy-tagline">{car.tagline}</p>

            <h4>Select Payment Option</h4>
            <ul className="payment-options">
              <li><label><input type="radio" name="payment" onChange={() => setPaymentMethod('Card')} /> Card Payment</label></li>
              <li><label><input type="radio" name="payment" onChange={() => setPaymentMethod('EMI')} /> EMI Option</label></li>
              <li><label><input type="radio" name="payment" onChange={() => setPaymentMethod('Car Loan')} /> Car Loan</label></li>
            </ul>

            {paymentMethod === 'Card' && (
              <div className="payment-form">
                <label>Cardholder Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={cardName}
                  onChange={e => setCardName(e.target.value)}
                />
                <label>Card Number:</label>
                <input
                  type="text"
                  maxLength={19}
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={e => {
                    const formatted = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
                    setCardNumber(formatted);
                  }}
                />
                <label>Expiry (MM/YY):</label>
                <input
                  type="text"
                  maxLength={5}
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={e => {
                    let val = e.target.value.replace(/\D/g, '');
                    if (val.length >= 3) val = val.slice(0, 2) + '/' + val.slice(2);
                    setExpiry(val);
                  }}
                />
                <label>CVV:</label>
                <input
                  type="password"
                  maxLength={3}
                  placeholder="CVV"
                  value={cvv}
                  onChange={e => setCvv(e.target.value.replace(/\D/g, ''))}
                />
              </div>
            )}

            {paymentMethod === 'EMI' && (
              <div className="payment-form">
                <label>Down Payment:</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={emiDetails.downPayment}
                  onChange={e => setEmiDetails({ ...emiDetails, downPayment: e.target.value })}
                />
                <label>Bank:</label>
                <input
                  type="text"
                  placeholder="Enter bank name"
                  value={emiDetails.bank}
                  onChange={e => setEmiDetails({ ...emiDetails, bank: e.target.value })}
                />
                <label>Tenure (months):</label>
                <input
                  type="number"
                  placeholder="Eg: 24"
                  value={emiDetails.tenure}
                  onChange={e => setEmiDetails({ ...emiDetails, tenure: e.target.value })}
                />
                <label>Interest Rate (%):</label>
                <input
                  type="number"
                  placeholder="Eg: 7.5"
                  value={emiDetails.interest}
                  onChange={e => setEmiDetails({ ...emiDetails, interest: e.target.value })}
                />
              </div>
            )}

            {paymentMethod === 'Car Loan' && (
              <div className="payment-form">
                <label>PAN:</label>
                <input
                  type="text"
                  placeholder="ABCDE1234F"
                  value={loanDetails.pan}
                  onChange={e => setLoanDetails({ ...loanDetails, pan: e.target.value })}
                />
                <label>Monthly Salary:</label>
                <input
                  type="number"
                  placeholder="Eg: 50000"
                  value={loanDetails.salary}
                  onChange={e => setLoanDetails({ ...loanDetails, salary: e.target.value })}
                />
                <label>Preferred Bank:</label>
                <input
                  type="text"
                  placeholder="Eg: HDFC, SBI..."
                  value={loanDetails.bank}
                  onChange={e => setLoanDetails({ ...loanDetails, bank: e.target.value })}
                />
                <label>Loan Tenure (months):</label>
                <input
                  type="number"
                  placeholder="Eg: 36"
                  value={loanDetails.tenure}
                  onChange={e => setLoanDetails({ ...loanDetails, tenure: e.target.value })}
                />
              </div>
            )}

            <button className="proceed-button" onClick={handlePayment}>Proceed to Payment</button>
          </>
        ) : (
          <p>No car selected.</p>
        )}
      </div>
    </div>
  );
};

export default BuyPage;
