import React from 'react';

function PaymentViewer({ clients, payments }) {
  return (
    <div className="payment-viewer">
      <h3>Completed Payments</h3>
      {clients.map(client => (
        <div key={client.id}>
          <h4>{client.name}</h4>
          <ul>
            {payments
              .filter(payment => payment.clientId === client.id)
              .map(payment => (
                <li key={payment.id}>
                  Payment of ${payment.amount} completed on {payment.date}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PaymentViewer;