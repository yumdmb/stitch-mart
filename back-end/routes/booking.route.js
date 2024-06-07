import express from 'express';
import { bookService, getAvailableSlots } from '../controllers/booking.controller.js';

const router = express.Router();

// Route to handle booking
router.post('/book', bookService);

// Route to get available slots
router.get('/slots', getAvailableSlots);

export default router;
