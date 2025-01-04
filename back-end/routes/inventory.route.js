import express from 'express';
import { fetchInventory, fetchInventoryId, updateInventory } from '../controllers/inventory.controller.js';

const router = express.Router();

router.get("/", fetchInventory);
router.get("/:id", fetchInventoryId);
router.put("/:id", updateInventory); // Add this route to handle updates

export default router;
