import React, { useState } from 'react';
import EmbroideryServiceBooking from './EmbroideryServiceBooking';
import TimeAvailable from './TimeAvailable';
import ReceiveBooking from './ReceiveBooking';

function BookingApp() {
    const [bookingDetails, setBookingDetails] = useState(null); // Store booking details
    const [confirmedBooking, setConfirmedBooking] = useState(false); // Track whether booking is confirmed

    // Function to handle booking submission from EmbroideryServiceBooking component
    const handleBookingSubmit = (details) => {
        setBookingDetails(details);
        // Move to the next step: Time Available
        setConfirmedBooking(false); // Ensure ReceiveBooking is not shown until the booking is confirmed again
    };

    // Function to handle booking confirmation from ReceiveBooking component
    const handleBookingConfirmation = () => {
        setConfirmedBooking(true); // Set booking as confirmed
    };

    return (
        <div>
            {/* Show EmbroideryServiceBooking component if booking is not confirmed */}
            {!confirmedBooking && <EmbroideryServiceBooking onSubmit={handleBookingSubmit} />}
            
            {/* Show TimeAvailable component if booking is not confirmed */}
            {!confirmedBooking && <TimeAvailable onSubmit={handleBookingSubmit} />}
            
            {/* Show ReceiveBooking component if booking is confirmed */}
            {confirmedBooking && <ReceiveBooking bookingDetails={bookingDetails} />}
        </div>
    );
}

export default BookingApp;
