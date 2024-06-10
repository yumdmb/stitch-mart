import './Financial.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FinancialRecords from './FinancialRecords';
import OrderManagement from './OrderManagement';

//Main App for Finance Module
function FinancialApp() {

  let navigate = useNavigate();

  // Function to handle navigation to Home
  const goToHome = () => {
    navigate('/');
    console.log("Navigate to Home");
  };

  return (
    <div>
      <div style={{backgroundColor:"#ffba42"}}>
      <div className="financial">
        <h1>Finance</h1>
          <button className="home-button" onClick={goToHome}>Home</button>
      </div>
        <FinancialRecords />
        <OrderManagement />
        <div class="footer">
        <p></p>
      </div>
      </div>
    </div>
  );
}

export default FinancialApp;
