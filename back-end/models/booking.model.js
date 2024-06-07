const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    design: { type: String, required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
    appointmentTime: { type: Date, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
