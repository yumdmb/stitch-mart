import express from 'express';
import { fetchInventory } from '../controllers/inventory.controller.js';

const router = express.Router();

router.get("/", fetchInventory); 
// router.post("/create", createInventory); //create new inven

export default router;