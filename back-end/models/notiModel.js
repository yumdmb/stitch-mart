import { Int32 } from 'bson';
import mongoose from 'mongoose';

const notiSchema = new mongoose.Schema({
    email: {
        type: String
    },
    isRead: {
        type: Boolean,
        default: false
    },
    category: {
        type: String
    },
    content: {
        type: String,
    }
}, { timestamps: true });

const Notification = mongoose.model('Notification', notiSchema);

export default Notification;