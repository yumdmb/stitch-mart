const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

// Route to handle booking
router.post('/book', bookingController.bookService);

// Route to get available slots
router.get('/slots', bookingController.getAvailableSlots);

module.exports = router;
