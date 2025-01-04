import './Financial.css';
import React, { useState, useEffect } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';

// Component for tracking income, expenses, and overall revenue
function FinancialRecords() {
  const [payments, setPayments] = useState([]);
  const [expenseInput, setExpenseInput] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [revenue, setRevenue] = useState(0); 
  const [totalIncome, setTotalIncome] = useState(0);

  // useEffect to fetch payment data from the database
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('/api/payments');
        const paymentData = await response.json();
        setPayments(paymentData);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  // Function to calculate total income from payment data
  useEffect(() => {
    const totalRevenue = payments.reduce((total, payment) => total + payment.amount, 0);
    setRevenue(totalRevenue);
  }, [payments]); // Re-calculate total income whenever payments change

  // Function to handle expense input change
  const handleExpenseInputChange = (event) => {
    setExpenseInput(event.target.value);
  };

  // Function to handle confirm button click
  const handleConfirmExpense = () => {
    const expenseAmount = parseFloat(expenseInput);
    if (!isNaN(expenseAmount)) {
      // Append the new expense amount to the expenses array
      setExpenses([...expenses, expenseAmount]);
      // Reset the expense input field after adding the expense
      setExpenseInput('');
    }
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, amount) => total + amount, 0);

  // Update total revenue whenever income or expenses change
  useEffect(() => {
    const totalIncome = revenue - totalExpenses;
    setTotalIncome(totalIncome);
  }, [revenue, totalExpenses]);

  // Get current date in dd/mm/yyyy format
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Function to generate PDF
  const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    page.drawText(`Financial Records: ${currentDate}`, {x: 50, y: height - 50, size: 20});

    page.drawText(`Revenue: $${revenue}`, {x: 50, y: height - 100, size: 15});
    page.drawText(`Total Expenses: $${totalExpenses}`, {x: 50, y: height - 120, size: 15});
    page.drawText(`Total Income: $${totalIncome}`, {x: 50, y: height - 140, size: 15});

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, `Financial_Records_${currentDate}.pdf`);
  };

  return (
    <div className="financial-records">
      <div className="header-container">
        <h2>Financial Records: {currentDate}</h2>
      </div>
      <div className="financial-records p">
        <p>
          Revenue: ${revenue}
        </p>
        <label htmlFor="expenses">Enter Expenses:</label>
        <p>
        <input
          id="expenses"
          type="number"
          placeholder="Enter Expenses"
          value={expenseInput}
          onChange={handleExpenseInputChange}
        />
        <button onClick={handleConfirmExpense}>Confirm</button>
        </p>
        <div>
          <p>Total Expenses: ${totalExpenses}</p>
          <p>Total Income: ${totalIncome}</p>
          <button className='invoice-button' onClick={generatePDF}>Generate PDF</button>
        </div>
      </div>
    </div>
  );
}

export default FinancialRecords;

