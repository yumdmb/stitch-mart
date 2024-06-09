import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './BookingApp.css';

function BookingApp() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div style={{ backgroundColor: "#ffba42" }}>
      <div className='book-header'>
        <h1>Booking</h1>
      </div>

      <div className="button-container">
        <button className="feature-button" onClick={() => navigateTo('/time-available')}>
          <img src="/time-available.png" alt="Time Available" />
          <span>Embroidery Appointment</span>
        </button>
        <button className="feature-button" onClick={() => navigateTo('/booking')}>
          <img src="/booking.png" alt="Booking" />
          <span>Embroidery Booking </span>
        </button>
        <button className="feature-button" onClick={() => navigateTo('/receive-booking')}>
          <img src="/receive-booking.png" alt="Receive Booking" />
          <span>Booking Confirmation </span>
        </button>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default BookingApp;

