import express from 'express';
import { createEmbroideryBooking, getAllEmbroideryBookings, updateBookingStatus } from '../controllers/booking.controller.js';
import upload from '../upload.js';

const router = express.Router();

// Route to handle embroidery booking creation
router.post('/', upload.single('designFile'), createEmbroideryBooking);

// Route to get all embroidery bookings
router.get('/', getAllEmbroideryBookings);

// Route to update booking status
router.patch('/status', updateBookingStatus);

export default router;


