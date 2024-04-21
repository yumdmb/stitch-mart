import React, { useState } from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

function TimeAvailable() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date[0]);
        setSelectedTimeSlot(null);
    };

    const handleTimeSlotChange = (event) => {
        setSelectedTimeSlot(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (selectedTimeSlot) {
            const formData = new FormData(event.target);
            const appointmentDetails = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                date: selectedDate.toISOString().split('T')[0], // Convert date to YYYY-MM-DD format
                time: selectedTimeSlot
            };

            console.log("Appointment Details:", appointmentDetails);
            alert("Your appointment has been booked successfully!");
        } else {
            alert("Please select an appointment time slot.");
        }
    };

    const availableTimeSlots = [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM"
    ];

    return (
        <div className="container">
            <h2>Book Your Embroidery Appointment</h2>
            <form id="appointment-form" onSubmit={handleFormSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />

                <div className="calendar-container">
                    <label htmlFor="calendar">Choose Appointment Date:</label>
                    <Flatpickr
                        id="calendar"
                        value={selectedDate}
                        onChange={handleDateChange}
                        options={{
                            dateFormat: "Y-m-d",
                            minDate: "today"
                        }}
                        required
                    />
                </div>

                <h3>Choose an Appointment Time</h3>
                <div id="time-slots">
                    {availableTimeSlots.map((slot, index) => (
                        <label key={index} className="time-slot">
                            <input
                                type="radio"
                                name="appointment-time"
                                value={slot}
                                checked={selectedTimeSlot === slot}
                                onChange={handleTimeSlotChange}
                            />
                            {slot}
                        </label>
                    ))}
                </div>

                <button type="submit">Book Appointment</button>
                {selectedTimeSlot === null && <p className="error-message">Please select an appointment time slot.</p>}
            </form>
        </div>
    );
}

export default TimeAvailable;
