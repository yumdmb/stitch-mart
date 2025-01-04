import express from 'express';
import { createCart, fetchCart, editAdd, editMinus, fetchTotalPrice, checkout} from '../controllers/cart.controller.js';

const router = express.Router();

router.post("/:id", createCart);
router.get("/show", fetchCart);
router.put("/editAdd/:id", editAdd);
router.put("/editMinus/:id", editMinus);
router.get("/totalPrice", fetchTotalPrice);
router.post("/checkout/:email", checkout);

export default router;