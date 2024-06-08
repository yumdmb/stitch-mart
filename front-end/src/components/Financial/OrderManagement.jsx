import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderViewer from './OrderViewer';
import PaymentViewer from './PaymentViewer';
import './Financial.css';

function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const ordersResponse = await axios.get('/api/orders');
        const clientsResponse = await axios.get('/api/clients');
        const paymentsResponse = await axios.get('/api/payments');

        setOrders(ordersResponse.data);
        setClients(clientsResponse.data);
        setPayments(paymentsResponse.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="order-management">
      <div className="header-container">
        <h2>Order Management</h2>
      </div>
      <div className="order-container">
        <OrderViewer orders={orders} clients={clients} payments={payments} />
      </div>
      <div className="order-container">
        <PaymentViewer clients={clients} payments={payments} />
      </div>
    </div>
  );
}

export default OrderManagement;