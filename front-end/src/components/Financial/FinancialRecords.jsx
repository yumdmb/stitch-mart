import './Financial.css';
import React, { useState } from 'react';

// Component for tracking income, expenses, and overall revenue
function FinancialRecords() {
  const [income, setIncome] = useState(4230);
  const [expenses, setExpenses] = useState(1045);

  const totalRevenue = income - expenses;

  return (
    <div className="financial-records">
      <div className="header-container">
        <h2>Financial Records</h2>
      </div>
      <div className="financial-records p">
      <p>Income: ${income}</p>
      <p>Expenses: ${expenses}</p>
      <p>Total Revenue: ${totalRevenue}</p>
      </div>
    </div>
  );
}

export default FinancialRecords;