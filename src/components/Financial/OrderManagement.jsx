import './Financial.css';
import React, { useState } from 'react';
import OrderViewer from './OrderViewer';
import PaymentViewer from './PaymentViewer';

// Component for tracking orders, invoicing clients, and recording payments
function OrderManagement() {
    const [orders, setOrders] = useState([
      { id: 1, clientId: 4, productName: "Product A", quantity: 2, totalPrice: 100 },
      { id: 2, clientId: 5, productName: "Product B", quantity: 1, totalPrice: 50 },
      { id: 3, clientId: 6, productName: "Product C", quantity: 3, totalPrice: 150 }
    ]);
  
    const [clients, setClients] = useState([
      { id: 1, name: "Adam", email: "adam123@gmail.com" },
      { id: 2, name: "Elvis", email: "elvis456@gmail.com" },
      { id: 3, name: "Haqeem", email: "haqeem789@gmail.com" },
      { id: 4, name: "Eisraq", email: "eisraq123@gmail.com" },
      { id: 5, name: "Hakim", email: "hakim456@gmail.com" },
      { id: 6, name: "Addin", email: "addin789@gmail.com" }
    ]);

    const [payments, setPayments] = useState([
      { id: 1, clientId: 1, amount: 50, date: "2024-04-20" , time: "14:40:21"},
      { id: 2, clientId: 2, amount: 100, date: "2024-04-21", time: "21:24:56" },
      { id: 3, clientId: 3, amount: 75, date: "2024-04-22", time: "09:27:32" }
    ]);
  
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

  export default OrderManagement;