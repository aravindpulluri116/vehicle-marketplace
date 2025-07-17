import React, { useEffect, useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import './YourOrders.css';

const YourOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders.reverse());
  }, []);

  return (
    <>
      <HomeNavbar />
      <div className="orders-page-container">
        <div className="orders-content">
          <h2 className="orders-heading">Your Orders</h2>

          {orders.length === 0 ? (
            <p className="no-orders-text">No orders found yet. Go buy your dream car!</p>
          ) : (
            <div className="orders-list">
              {orders.map((order, idx) => (
                <div key={idx} className="order-card">
                  <img src={order.src} alt={order.name} />
                  <div className="order-info">
                    <h3>{order.name}</h3>
                    <p><strong>Price:</strong> {order.price}</p>
                    <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                    <p><strong>Ordered On:</strong> {order.orderTime}</p>

                    {order.paymentMethod === 'Card' && (
                      <p>
                        <strong>Card (ending):</strong>{' '}
                        {order.details && typeof order.details === 'object'
                          ? `****${order.details.cardNumber?.slice(-4)}`
                          : 'N/A'}
                      </p>
                    )}

                    {order.paymentMethod === 'EMI' && order.details && typeof order.details === 'object' && (
                      <>
                        <p><strong>Bank:</strong> {order.details.bank}</p>
                        <p><strong>Tenure:</strong> {order.details.tenure} months</p>
                        <p><strong>Interest:</strong> {order.details.interest}%</p>
                      </>
                    )}

                    {order.paymentMethod === 'Car Loan' && order.details && typeof order.details === 'object' && (
                      <>
                        <p><strong>Bank:</strong> {order.details.bank}</p>
                        <p><strong>Loan Tenure:</strong> {order.details.tenure} months</p>
                        <p><strong>PAN:</strong> {order.details.pan}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default YourOrders;
