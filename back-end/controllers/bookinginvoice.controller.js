import Booking from '../models/booking.model.js';
import BookingInvoice from '../models/bookinginvoice.model.js';

export const generateInvoice = async (req, res) => {
    try {
        const { bookingId } = req.body;

        // Fetch booking details
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        const items = [{
            embroideryType: booking.embroideryType,
            size: booking.size,
            quantity: booking.quantity,
            price: booking.size * 10
        }];

        const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        // Create a new invoice
        const newInvoice = new BookingInvoice({
            bookingId,
            invoiceNo: `INV-${Date.now()}`,
            items,
            total
        });

        await newInvoice.save();

        res.status(201).json({ message: 'Invoice generated successfully', invoice: newInvoice });
    } catch (error) {
        res.status(500).json({ message: 'Error generating invoice', error });
    }
};

export const getInvoices = async (req, res) => {
    try {
        const invoices = await BookingInvoice.find().populate('bookingId');
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving invoices', error });
    }
};

