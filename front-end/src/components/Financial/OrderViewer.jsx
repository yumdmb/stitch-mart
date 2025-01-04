import React, { useState, useEffect } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';

function OrderViewer({ orders, clients }) {
  const [notification, setNotification] = useState(null);

  // Function to get client details based on clientId
  const getClientDetails = (clientId) => {
    const client = clients.find(client => client._id === clientId);
    return client ? `${client.name} (${client.email})` : 'Unknown Client';
  };

  // Function to handle invoice click event
  const handleInvoiceClick = async (order) => {
    const client = clients.find(client => client._id === order.clientId);
    if (client) {
      try {
        // Create a new PDFDocument
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);
        const { width, height } = page.getSize();

        // Add content to the PDF
        page.drawText('Invoice', { x: 50, y: height - 50, size: 20 });
        page.drawText(`Client Name: ${client.name}`, { x: 50, y: height - 110, size: 15 });
        page.drawText(`Client Email: ${client.email}`, { x: 50, y: height - 140, size: 15 });
        page.drawText(`Product: ${order.productName}`, { x: 50, y: height - 170, size: 15 });
        page.drawText(`Quantity: ${order.quantity}`, { x: 50, y: height - 200, size: 15 });
        page.drawText(`Total Price: $${order.totalPrice}`, { x: 50, y: height - 230, size: 15 });

        // Serialize the PDFDocument to bytes
        const pdfBytes = await pdfDoc.save();

        // Create a blob from the PDF bytes and save it
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        saveAs(blob, `invoice ${client.name}.pdf`);

        setNotification({ type: 'success', message: 'Invoice generated successfully' });
      } catch (error) {
        console.error('Error generating invoice:', error);
        setNotification({ type: 'error', message: 'Failed to generate invoice' });
      }
    } else {
      setNotification({ type: 'error', message: 'Client not found' });
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
            <div>Client: {getClientDetails(order.clientId)}</div>
            <button className='invoice-button' onClick={() => handleInvoiceClick(order)}>Invoice</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderViewer;
