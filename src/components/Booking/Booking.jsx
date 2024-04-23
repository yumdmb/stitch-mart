import React, {useState} from 'react';
import './BookingApp.css';

function Booking() {
    return (
        <div className="booking">
            <div className="header-container">
                <h2>Embroidery Service Booking</h2>
            </div>
            <div className="booking-content">
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="embroidery_type">Embroidery Type:</label>
                            <select id="embroidery_type" name="embroidery_type">
                                <option value="Outline">Outline Embroidery</option>
                                <option value="Whitework">Whitework Embroidery</option>
                                <option value="Candle Wicking">Candle Wicking Embroidery</option>
                                <option value="Patchwork">Patchwork Embroidery</option>
                                <option value="Shadow Work">Shadow Work Embroidery</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="size">Size (inches):</label>
                            <input type="number" id="size" name="size" min="1" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" min="1" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="design">Design Preferences:</label>
                        <input type="file" id="design" name="design" accept=".pdf,.png" />
                    </div>
                    <button type="submit">Submit Booking</button>
                </form>
            </div>
        </div>
    );
}

export default Booking;