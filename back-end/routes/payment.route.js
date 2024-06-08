import express from 'express';
import { getAllPayments, addPayment } from '../controllers/payment.controller.js';

const router = express.Router();

router.get('/', getAllPayments);
router.post('/add', addPayment);

export default router;
