import Notification from '../models/notiModel.js';

export const notification = async (req, res, next) => {
    const { email, isRead, category, content } = req.body;
    const newNoti = new Notification({ email, isRead, category, content });
    try {
        await newNoti.save();
        res.status(201).json({ message: 'Notification back-end page.', count: 5});
    } catch (error) {
        next(error);
    }
};

export const fetchNoti = async (req, res, next) => {
    try{
        const notiFetched = await Notification.find({});
        return res.status(200).json({notis: notiFetched});
    }
    catch (error) {
        next(error);
    }
}

export const notiUnread = async (req, res) => {
    try{
        const notiFetched = await Notification.find({isRead: false});
        return res.status(200).json({notis : notiFetched});
    }
    catch (error) {
        console.log(error);
    }
}