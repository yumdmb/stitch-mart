import express from 'express';
import { fetchNoti, notification, notiUnread, notiInventory, notiOrder, notiAppointment} from '../controllers/notiControllers.js';

const router = express.Router();

router.post("/", notification);
router.get("/show", fetchNoti);
router.get("/unread", notiUnread);
router.get("/inventory", notiInventory);
router.get("/order", notiOrder);
router.get("/appointment", notiAppointment);

export default router;