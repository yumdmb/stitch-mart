import React from 'react';

//Function to view the orders made by the customers
function OrderViewer({ orders, clients, payments, invoiceClient }) {
    
    return (
      <div className="order-viewer">
        <h3>Ongoing Orders</h3>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              Client: {clients.find(client => client.id === order.clientId).name} | 
              Product: {order.productName} | 
              Quantity: {order.quantity} | 
              Total Price: ${order.totalPrice} | <br></br>
              Email: {clients.find(client => client.id === order.clientId).email}
              <br></br>
              <button className="invoice-button" onClick={() => invoiceClient(order)}>Invoice Client</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default OrderViewer;