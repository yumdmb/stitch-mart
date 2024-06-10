import express from 'express';
import { createCart, fetchCart, editAdd, editMinus} from '../controllers/cart.controller.js';

const router = express.Router();

router.post("/:id", createCart);
router.get("/show", fetchCart);
router.put("/editAdd/:id", editAdd);
router.put("/editMinus/:id", editMinus);

export default router;