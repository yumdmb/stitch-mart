import express from 'express';
import { getAllOrders, addOrder } from '../controllers/order.controller.js';

const router = express.Router();

router.get('/', getAllOrders);
router.post('/add', addOrder);

export default router;