import './Financial.css';
import React, { useState } from 'react';

// Component for generating financial reports
function FinancialReports() {

  const [revenue, setRevenue] = useState(1230);

  // Function to generate profit and loss statement
  const generateProfitLossStatement = () => {
    // Logic to calculate profit and loss
  };

  // Function to generate cash flow summary
  const generateCashFlowSummary = () => {
    // Logic to generate cash flow summary
  };

  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  // Get the current date
  const currentDate = new Date();

  // Get the previous month
  const prevMonth = currentDate.getMonth() - 1;
  const currentYear = currentDate.getFullYear();

  if (prevMonth === -1) {
    // If the current month is January, set the previous month to December
    prevMonth = 11;
    currentYear--;
  }

  const prevMonthName = monthNames[prevMonth];

  // Function to show the financial performance message
  const showFinancialPerformance = () => {
    // Sample revenue and expense values
    const servicesRevenue = 1080;
    const operatingExpenses = 250;
    const sumMonth = prevMonthName;
    const sumYear = currentYear;
  
    // Calculate total revenues and expenses
    const totalRevenues = servicesRevenue;
    const totalExpenses = operatingExpenses;
    const netIncome = totalRevenues - totalExpenses;
  
    const alertMessage = `Cash Flow Summary (${sumMonth} ${sumYear}):\nRevenues:\n    Services to customers: $${servicesRevenue}\nTotal Revenues: $${totalRevenues}\n\nExpenses:\n    Operating Expenses: $${operatingExpenses}\nTotal Expenses: $${totalExpenses}\n\nNet Income: $${netIncome}`;
    alert(alertMessage);
  };

  return (
    <div className="financial-reports">
      <div className="header-container">
        <h2>{prevMonthName} {currentYear} Report</h2>
      </div>
      <button onClick={showFinancialPerformance}>Show Financial Performance</button>
    </div>
  );
}

export default FinancialReports;