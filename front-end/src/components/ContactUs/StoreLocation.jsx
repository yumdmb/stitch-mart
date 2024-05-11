import React from 'react';
import './StoreLocation.css';

function StoreLocation() {
  return (
    <div className="location-container">
      <h2>Our Store Location</h2>
      <p>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
        </span>
         Faculty of Computer Science, Universiti Malaya
      </p>
      <div className="map-container">
        <iframe
          title="storeLocation"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Faculty%20of%20Computer%20Science,%20Universiti%20Malaya+(StitchMart)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
}

export default StoreLocation;
