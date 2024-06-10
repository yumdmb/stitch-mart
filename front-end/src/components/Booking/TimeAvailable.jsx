import React, { useState, useEffect } from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import './BookingApp.css';

function TimeAvailable() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    useEffect(() => {
        const fetchAvailableSlots = async () => {
            if (selectedDate) {
                try {
                    const response = await fetch(`/api/appointments/time-available?date=${selectedDate.toISOString().split('T')[0]}`);
                    if (response.ok) {
                        const data = await response.json();
                        setAvailableTimeSlots(data.slots);
                    } else {
                        console.error('Failed to fetch available slots');
                    }
                } catch (error) {
                    console.error('Error fetching available slots:', error);
                }
            }
        };

        fetchAvailableSlots();
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date[0]);
        setSelectedTimeSlot(""); // Reset selected time slot when date changes
    };

    const handleTimeSlotChange = (event) => {
        setSelectedTimeSlot(event.target.value);
    };

    const handleAppointmentFormSubmit = async (event) => {
        event.preventDefault();

        if (selectedTimeSlot) {
            const formData = new FormData(event.target);
            const appointmentDetails = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                date: selectedDate.toISOString().split('T')[0],
                time: selectedTimeSlot,
            };

            try {
                const response = await fetch('/api/appointments/appointment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(appointmentDetails),
                });

                const data = await response.json();
                if (response.ok) {
                    alert('Your appointment has been booked successfully!');
                } else {
                    alert(`Error: ${data.message}`);
                }
            } catch (error) {
                alert('Error creating appointment');
            }
        } else {
            alert('Please select an appointment time slot.');
        }
    };

    return (
        <div style={{ backgroundColor: "#ffba42", minHeight: "100vh", padding: "20px" }}>
            <div className="time-available">
                <div className="header-container">
                    <h2>Embroidery Appointment</h2>
                </div>
                <div className="time-available-content">
                    <form id="appointment-form" onSubmit={handleAppointmentFormSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="calendar">Choose Appointment Date:</label>
                                <div className="calendar-container">
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
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="time-slot">Choose an Appointment Time:</label>
                                <select id="time-slot" name="time-slot" value={selectedTimeSlot} onChange={handleTimeSlotChange} required>
                                    <option value="">Select a time slot</option>
                                    {availableTimeSlots.map((slot, index) => (
                                        <option key={index} value={slot}>{slot}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button type="submit">Book Appointment</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TimeAvailable;

