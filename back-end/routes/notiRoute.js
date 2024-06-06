import express from 'express';
import { fetchNoti, notification, notiUnread} from '../controllers/notiControllers.js';

const router = express.Router();

router.post("/", notification);
router.get("/show", fetchNoti);
router.get("/unread", notiUnread);
router.get("/inventory", fetchNoti);

export default router;