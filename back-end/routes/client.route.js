import express from 'express';
import { getAllClients, addClient } from '../controllers/client.controller.js';

const router = express.Router();

router.get('/', getAllClients);
router.post('/add', addClient);

export default router;
