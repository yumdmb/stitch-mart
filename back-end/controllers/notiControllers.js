import Notification from '../models/notiModel.js';

export const notification = async (req, res, next) => {
    const newNoti = new Notification({ email: 'adamarbain2107@gmail.com',
                                         isRead: false, 
                                         category: 'Order Update',
                                          content: 'Meow Meow' });
    try {
        await newNoti.save();
        res.status(201).json({ message: 'New notification updated'});
    } catch (error) {
        next(error);
    }
};

export const markRead = async (req, res, next) => {
    try {
        const {id, email, category, content} = req.params;
        const noti = await Notification.updateMany(
                {
                    email: email,
                    isRead: false
                },
                {$set: {isRead: true}}, 
            {new: true});
        res.status(200).json(noti);
    } catch (error) {
        next(error);
    }
}

export const markReadOne = async (req, res, next) => {
    try {
        const {id, email, category, content} = req.params;
        const noti = await Notification.updateOne(
                {
                    _id: id
                },
                {$set: {isRead: true}}, 
            {new: true});
        res.status(200).json(noti);
    } catch (error) {
        next(error);
    }
}

export const fetchNoti = async (req, res, next) => {
    try{
        const notiFetched = await Notification.find({email: req.params.email});
        return res.status(200).json(notiFetched);
    }
    catch (error) {
        next(error);
    }
}

export const notiUnread = async (req, res) => {
    try{
        const notiFetched = await Notification.find({email: req.params.email, isRead: false});
        return res.status(200).json(notiFetched);
    }
    catch (error) {
        console.log(error);
    }
}

export const notiInventory = async (req, res) => {
    try{
        const notiFetched = await Notification.find({email: req.params.email, category: "Low Inventory Alert"});
        return res.status(200).json(notiFetched);
    }
    catch (error) {
        console.log(error);
    }
}

export const notiOrder = async (req, res) => {
    try{
        const notiFetched = await Notification.find({email: req.params.email, category: "Order Update"});
        return res.status(200).json(notiFetched);
    }
    catch (error) {
        console.log(error);
    }
}

export const notiAppointment = async (req, res) => {
    try{
        const notiFetched = await Notification.find({email: req.params.email, category: "Appointment Booking Succeeded!"});
        return res.status(200).json(notiFetched);
    }
    catch (error) {
        console.log(error);
    }
}

