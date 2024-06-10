import express from 'express';
import { generateInvoice, getInvoices } from '../controllers/bookinginvoice.controller.js';

const router = express.Router();

// Route to generate invoice
router.post('/generate', generateInvoice);

// Route to get all invoices
router.get('/', getInvoices);

export default router;
