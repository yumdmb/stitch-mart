import Booking from '../models/booking.model.js';
import multer from 'multer';
import path from 'path';

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Upload destination
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Controller to handle embroidery booking creation
export const createEmbroideryBooking = async (req, res) => {
    try {
        const { name, email, phone, embroideryType, size, quantity } = req.body;
        const designFile = req.file.path;

        const newBooking = new Booking({
            name,
            email,
            phone,
            embroideryType,
            size,
            quantity,
            designPreferences: designFile,
            status: 'Pending', // Default status
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

// Controller to get all embroidery bookings
export const getAllEmbroideryBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving bookings', error });
    }
};

// Controller to update booking status
export const updateBookingStatus = async (req, res) => {
    try {
        const { bookingId, status } = req.body;
        await Booking.findByIdAndUpdate(bookingId, { status });
        res.status(200).json({ message: 'Booking status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating booking status', error });
    }
};

export { upload };
