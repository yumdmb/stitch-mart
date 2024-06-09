import express from 'express';
import { createAppointment, getAvailableSlots } from '../controllers/appointment.controller.js';

const router = express.Router();

// Route to handle appointment booking
router.post('/appointment', createAppointment);

// Route to get available slots
router.get('/time-available', getAvailableSlots);

export default router;




