import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import './Help.css';

const Help = () => {
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi! Welcome to SRS Vehicle Services 💬 How can I help you today?' },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [feedback, setFeedback] = useState({ name: '', message: '' });

  const smartReply = (message) => {
    const lower = message.toLowerCase();

    if (lower.includes('location') || lower.includes('where')) {
      return '📍 We are near Durgam Cheruvu Metro, Madhapur, Hyderabad.';
    } else if (lower.includes('return')) {
      return '↩️ To return a car, email us at support@srsservices.com within 7 days of delivery.';
    } else if (lower.includes('cancel')) {
      return '❌ To cancel your order, contact us via email or call 1800-123-4567 before delivery.';
    } else if (lower.includes('status') || lower.includes('track')) {
      return '🛣️ You can view your order status under the "Your Orders" section.';
    } else if (lower.includes('payment')) {
      return '💳 We accept Card, EMI, and Car Loan payments. Need help with one?';
    } else if (lower.includes('hello') || lower.includes('hi')) {
      return '👋 Hello! How can I assist you today?';
    } else {
      return '🤖 Sorry, I didn’t understand that. Please ask about location, returns, payment, or order help!';
    }
  };

  const handleSendMessage = () => {
    if (chatInput.trim() === '') return;

    const userMsg = { sender: 'user', text: chatInput };
    setChatMessages([...chatMessages, userMsg]);

    const botReply = { sender: 'bot', text: smartReply(chatInput) };
    setTimeout(() => {
      setChatMessages((prev) => [...prev, botReply]);
    }, 700);

    setChatInput('');
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedback.name || !feedback.message) return;
    alert('✅ Thank you for your feedback!');
    setFeedback({ name: '', message: '' });
  };

  return (
    <>
      <HomeNavbar />
      <div className="help-page-container">
        <h2>Need Help? We're Here for You</h2>

        <div className="help-cards">
          {/* Customer Care Info */}
          <div className="help-card">
            <h3>SRS Vehicle Services – Customer Care</h3>
            <p>📞 Phone: 1800-123-4567</p>
            <p>📧 Email: support@srsservices.com</p>
          </div>

          {/* Map */}
          <div className="help-card">
            <h3>Visit Our Service Hub</h3>
            <p>SRS Vehicle Services, Near Durgam Cheruvu Metro, Madhapur, Hyderabad</p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1332513488667!2d78.38572107503277!3d17.447753883437873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d503c9409f%3A0xb2a350e48b7a2e6f!2sDurgam%20Cheruvu%20Metro%20Station!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="help-card">
            <h3>Send Us Feedback</h3>
            <form onSubmit={handleFeedbackSubmit} className="feedback-form">
              <input
                type="text"
                placeholder="Your Name"
                value={feedback.name}
                onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                value={feedback.message}
                onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Advanced Chatbot */}
          <div className="help-card chat-box">
            <h3>Live Chat – SRS Smart Assistant 🤖</h3>
            <div className="chat-window">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input-area">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
