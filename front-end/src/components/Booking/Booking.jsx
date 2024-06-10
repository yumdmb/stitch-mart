import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingApp.css';

function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        embroideryType: '',
        size: '',
        quantity: '',
        designFile: null
    });

    let nav = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'designFile') {
            setFormData({
                ...formData,
                designFile: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            if (key === 'size' || key === 'quantity') {
                data.append(key, Number(formData[key]));
            } else {
                data.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                body: data,
            });

            const result = await response.json();
            if (response.ok) {
                alert('Your booking has been submitted successfully!');
            } else {
                alert(`Error: ${result.message}`);
            }
            nav('/time-available');
        } catch (error) {
            alert('Error submitting booking');
        }
    };

    return (
        <div style={{ backgroundColor: "#ffba42", minHeight: "100vh", padding: "20px" }}>
            <div className="booking">
                <div className="bookingheader">
                    <h2>Embroidery Booking</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="embroideryType">Embroidery Type:</label>
                            <select id="embroideryType" name="embroideryType" value={formData.embroideryType} onChange={handleChange} required>
                                <option value="">Select a type</option>
                                <option value="Outline">Outline</option>
                                <option value="Whitework">Whitework</option>
                                <option value="Candle Wicking">Candle Wicking</option>
                                <option value="Patchwork">Patchwork</option>
                                <option value="Shadow Work">Shadow Work</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="size">Size (inches):</label>
                            <input type="number" id="size" name="size" value={formData.size} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="designFile">Design Preferences:</label>
                        <input type="file" id="designFile" name="designFile" onChange={handleChange} required />
                    </div>

                    <button type="submit">Submit Booking</button>
                </form>
            </div>
        </div>
    );
}

export default Booking;
