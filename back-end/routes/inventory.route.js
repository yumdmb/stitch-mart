import express from 'express';
import { fetchInventory, fetchInventoryId } from '../controllers/inventory.controller.js';

const router = express.Router();

router.get("/", fetchInventory); 
router.get("/:id", fetchInventoryId); 
// router.post("/create", createInventory); //create new inven

export default router;