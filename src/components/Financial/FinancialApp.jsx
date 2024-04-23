import './FinancialApp.css';
import React, { useState } from 'react';
import FinancialRecords from './FinancialRecords';
import OrderManagement from './OrderManagement';
import FinancialReports from './FinancialReports';

// Main App component
function FinancialApp() {
  return (
    
    <div style={{backgroundColor:"#ffba42"}}>
      <div className="financial">
      <h1>Finance</h1>
      </div>
      <FinancialRecords />
      <OrderManagement />
      <FinancialReports />
      <div class="footer">
      <p>Footer</p>
      </div>
    </div>
  );
}

export default FinancialApp;
