import React, { useState, useEffect } from 'react';

function OrderViewer({ orders, clients, invoiceClient }) {
  const [notification, setNotification] = useState(null);

  // Function to get client details based on clientId
  const getClientDetails = (clientId) => {
    // Find the client with the matching clientId
    const client = clients.find(client => client._id === clientId);
    // If client found, return name and email, otherwise return 'Unknown Client'
    return client ? `${client.name} (${client.email})` : 'Unknown Client';
  };

  // Function to handle invoice click event
  const handleInvoiceClick = async (order) => {
    try {
      // Find the client corresponding to the order
      const client = clients.find(client => client._id === order.clientId);
      if (client) {
        // If client found, send invoice request to the backend
        const response = await fetch('/api/invoice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            clientId: client._id, // Send client ID to the backend
            email: client.email,
            // Include any other necessary invoice details here
          }),
        });
        // Check if invoice request was successful
        if (response.ok) {
          console.log("Invoice sent successfully");
          // Display success notification
          setNotification({ type: 'success', message: `Invoice sent to ${client.email}` });
        } else {
          console.error("Failed to send invoice:", response.statusText);
          // Display error notification
          setNotification({ type: 'error', message: `Failed to send invoice to ${client.email}` });
        }
      } else {
        // If client not found, display error notification
        console.error("Client not found");
        setNotification({ type: 'error', message: 'Client not found' });
      }
    } catch (error) {
      console.error("Error sending invoice:", error);
      // Display error notification
      setNotification({ type: 'error', message: 'Error sending invoice' });
    }
  };

  return (
    <div className="order-viewer">
      <h3>Orders</h3>
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <div>Product: {order.productName}</div>
            <div>Quantity: {order.quantity}</div>
            <div>Total Price: ${order.totalPrice}</div>
            {/* Display client details */}
            <div>Client: {getClientDetails(order.clientId)}</div>
            <button onClick={() => handleInvoiceClick(order)}>Invoice</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderViewer;