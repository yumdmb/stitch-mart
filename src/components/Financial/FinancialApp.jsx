import './FinancialApp.css';
import React, { useState } from 'react';
import OrderViewer from './OrderViewer';
import PaymentViewer from './PaymentViewer';

// Component for tracking income, expenses, and overall revenue
function FinancialRecords() {
  const [income, setIncome] = useState(524);
  const [expenses, setExpenses] = useState(100);

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

// Component for tracking orders, invoicing clients, and recording payments
function OrderManagement() {
  const [orders, setOrders] = useState([
    { id: 1, clientId: 1, productName: "Product A", quantity: 2, totalPrice: 100 },
    { id: 2, clientId: 2, productName: "Product B", quantity: 1, totalPrice: 50 },
    { id: 3, clientId: 3, productName: "Product C", quantity: 3, totalPrice: 150 }
  ]);

  const [clients, setClients] = useState([
    { id: 1, name: "Client 1", email: "client1@example.com" },
    { id: 2, name: "Client 2", email: "client2@example.com" },
    { id: 3, name: "Client 3", email: "client3@example.com" }
  ]);

  const [payments, setPayments] = useState([]);

  // Function to add a new order
  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  // Function to invoice the customer
  const invoiceClient = (order) => {
    // Simulating sending an email to the customer
    const clientEmail = clients.find(client => client.id === order.clientId).email;
    console.log(`Invoice sent to ${clientEmail}`);
    alert(`Invoice sent to ${clientEmail}`);
  };

  // Function to record a payment
  const recordPayment = (payment) => {
    setPayments([...payments, payment]);
  };

  return (
    <div className="order-management">
      <div className="header-container">
      <h2>Order Management</h2>
      </div>
      <div className='order-container'>
      <OrderViewer orders={orders} clients={clients} payments={payments} invoiceClient={invoiceClient}/>
      </div>
      <div className='order-container'>
      <PaymentViewer clients={clients} payments={payments} />
      </div>
    </div>
  );
}

// Component for generating financial reports
function FinancialReports() {
  // Function to generate profit and loss statement
  const generateProfitLossStatement = () => {
    // Logic to calculate profit and loss
  };

  // Function to generate cash flow summary
  const generateCashFlowSummary = () => {
    // Logic to generate cash flow summary
  };

  return (
    <div className="financial-reports">
      <h2>Financial Reports</h2>
      {/* Add buttons to generate reports */}
    </div>
  );
}

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
