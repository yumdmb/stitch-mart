import React from 'react';

function PaymentViewer({ clients, payments }) {

  // Display only clients who have associated payments
  const clientsWithPayments = clients.filter(client =>
    payments.some(payment => payment.clientId === client.id)
  );

  return (
    <div className="payment-viewer">
      <h3>Completed Payments</h3>
      {clientsWithPayments.map(client => (
        <div key={client.id}>
          <div>{client.name}</div>
          <ul>
            {payments
              .filter(payment => payment.clientId === client.id)
              .map(payment => (
                <li key={payment.id}>
                  Payment of ${payment.amount} completed on {payment.date} {payment.time}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PaymentViewer;