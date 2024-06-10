import React, { useState, useEffect } from 'react';
import './BookingApp.css';

function ReceiveBooking() {
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('/api/bookings');
                if (response.ok) {
                    const data = await response.json();
                    setBookings(data);
                } else {
                    console.error('Failed to fetch bookings');
                }
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const handleGenerateInvoice = async (bookingId, bookingEmail) => {
        try {
            const response = await fetch(`/api/invoices/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bookingId, bookingEmail }),
            });
            const data = await response.json();
            if (response.ok) {
                setInvoice(data.invoice);  // Ensure data.invoice is set here
                alert('We will deliver your embroidery set soon');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            alert('Error generating invoice');
        }
    };

    return (
        <div style={{ backgroundColor: "#ffba42", minHeight: "100vh", padding: "20px" }}>
            <div className="receivebooking">
                <div className="receivebookingheader">
                    <h2>Booking Confirmation</h2>
                </div>
                <div className="booking-content">
                    {bookings.map((booking) => (
                        <div key={booking._id} className="booking-item">
                            <p><strong>Name:</strong> {booking.name}</p>
                            <p><strong>Email:</strong> {booking.email}</p>
                            <p><strong>Phone:</strong> {booking.phone}</p>
                            <p><strong>Embroidery Type:</strong> {booking.embroideryType}</p>
                            <p><strong>Size:</strong> {booking.size} inches</p>
                            <p><strong>Quantity:</strong> {booking.quantity}</p>
                            <p><strong>Price:</strong> RM{booking.size * booking.quantity * 10}</p>
                            <div className="button-container-center">
                                <button className="button" onClick={() => handleGenerateInvoice(booking._id, booking.email)}>Confirm Booking</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReceiveBooking;
