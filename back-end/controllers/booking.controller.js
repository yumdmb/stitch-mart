import Booking from '../models/booking.model.js';
import Notification from '../models/notiModel.js';
import multer from 'multer';

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

        const notiBuyer = new Notification({
            email: email,
            isRead: false,
            category: 'Order Update',
            content: `One of your items needs booking confirmation.`
        });

        const notiSeller = new Notification({
            email: 'adamarbain2107@gmail.com',
            isRead: false,
            category: 'Order Update',
            content: `User ${name} (${email}) is on process to book for your custom embroidery services.`
        });
        await notiSeller.save();
        await notiBuyer.save();
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
