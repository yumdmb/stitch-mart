import './BookingApp.css';
import React, { useState } from 'react';

function ReceiveBooking() {
    const handleReceive = () => {
        alert("Received!");
    };

    return (
        <div className="receivebooking">
            <div className="receivebookingheader">
                <h2>Booking Confirmation</h2> 
            </div>
            <div className="receivebooking-content">
                <h6>Dear <span id="user">Adam</span>, Thanks for your booking!</h6>
                <div className="invoice-details">
                    <h3>Invoice Details:</h3>
                    <p><strong>Invoice No.:</strong> ABC123</p>
                    <p><strong>Invoice Date:</strong> April 25, 2024</p>
                    <p><strong>Total:</strong> $100.00</p>
                </div>

                <div className="invoice-recap">
                    <h3>Invoice Recap:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Embroidery Service</td>
                                <td>1</td>
                                <td>$100.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="button" onClick={handleReceive}>Receive</button>
            </div>
        </div>
    );
}

export default ReceiveBooking;