import React from 'react';

function EmbroideryServiceBooking() {
    return (
        <div className="container">
            <h2>Embroidery Service Booking</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="embroidery_type">Embroidery Type:</label>
                <select id="embroidery_type" name="embroidery_type">
                    <option value="Outline">Outline Embroidery</option>
                    <option value="Whitework">Whitework Embroidery</option>
                    <option value="Candle Wicking">Candle Wicking Embroidery</option>
                    <option value="Patchwork">Patchwork Embroidery</option>
                    <option value="Shadow Work">Shadow Work Embroidery</option>
                </select>

                <label htmlFor="design">Design Preferences:</label>
                <textarea id="design" name="design" rows="4" cols="50"></textarea>

                <label htmlFor="size">Size (inches):</label>
                <input type="number" id="size" name="size" min="1" required />

                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min="1" required />

                <label htmlFor="delivery_date">Preferred Delivery Date:</label>
                <input type="date" id="delivery_date" name="delivery_date" />

                <button type="submit">Submit Booking</button>
            </form>
        </div>
    );
}

export default EmbroideryServiceBooking;