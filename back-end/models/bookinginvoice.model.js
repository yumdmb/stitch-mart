import mongoose from 'mongoose';

const bookingInvoiceSchema = new mongoose.Schema({
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    invoiceNo: { type: String, required: true },
    invoiceDate: { type: Date, default: Date.now },
    items: [{
        embroideryType: { type: String, required: true },
        size: { type: Number, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    total: { type: Number, required: true }
});

const BookingInvoice = mongoose.model('BookingInvoice', bookingInvoiceSchema);
export default BookingInvoice;
