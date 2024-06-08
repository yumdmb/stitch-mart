import express from 'express';
import { fetchNoti, notification, notiUnread, notiInventory, notiOrder, notiAppointment, markRead, markReadOne} from '../controllers/notiControllers.js';

const router = express.Router();

router.post("/", notification);
router.get("/show/:email", fetchNoti);
router.get("/unread/:email", notiUnread);
router.get("/inventory/:email", notiInventory);
router.get("/order/:email", notiOrder);
router.get("/appointment/:email", notiAppointment);
router.put("/markRead/:email", markRead);
router.put("/markReadOne/:id", markReadOne);

export default router;