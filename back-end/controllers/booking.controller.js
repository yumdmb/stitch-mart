const Booking = require('../models/booking.model');
const nodemailer = require('nodemailer');

// Handle booking request
exports.bookService = async (req, res) => {
    const { name, email, phone, design, size, quantity, appointmentTime } = req.body;

    try {
        const newBooking = new Booking({ name, email, phone, design, size, quantity, appointmentTime });
        await newBooking.save();
        
        // Send confirmation email
        sendConfirmationEmail(newBooking);
        
        res.status(200).json({ message: 'Booking successful', booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: 'Error booking service', error });
    }
};

// Get available slots (For simplicity, we assume slots are predefined)
exports.getAvailableSlots = (req, res) => {
    const slots = [
        { time: '10:00 AM', available: true },
        { time: '11:00 AM', available: true },
        { time: '12:00 PM', available: false }, // example of an unavailable slot
        // Add more slots as needed
    ];
    res.status(200).json(slots);
};

// Send confirmation email
const sendConfirmationEmail = (booking) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: booking.email,
        subject: 'Booking Confirmation',
        text: `Dear ${booking.name},\n\nYour booking for embroidery service has been confirmed.\nDetails:\nDesign: ${booking.design}\nSize: ${booking.size}\nQuantity: ${booking.quantity}\nAppointment Time: ${booking.appointmentTime}\n\nThank you for choosing our services.\n\nBest regards,\nEmbroidery Service Team`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
