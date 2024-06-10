import React from 'react';

function PaymentViewer({ clients, payments }) {
  return (
    <div className="payment-viewer">
      <h3>Payments</h3>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            <div>Client: {clients.find(client => client._id === payment.clientId)?.name}</div>
            <div>Amount: ${payment.amount}</div>
            <div>Date: {payment.date}</div>
            <div>Time: {payment.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentViewer;