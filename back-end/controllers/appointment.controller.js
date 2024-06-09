import Appointment from '../models/appointment.model.js';
import Notification from '../models/notiModel.js';

// Controller to handle appointment booking
export const createAppointment = async (req, res) => {
    try {
        const { name, email, phone, date, time } = req.body;
        const newAppointment = new Appointment({ name, email, phone, date, time });
        const newNoti = new Notification({ email: email,
            isRead: false, 
            category: 'Appointment Booikng Succeed!',
             content: `Your appointment on ${date}, ${time} has been booked successfully.` });
        await newAppointment.save();
        await newNoti.save();
        res.status(201).json({ message: 'Appointment booked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error booking appointment', error });
    }
};

// Controller to get available slots
export const getAvailableSlots = async (req, res) => {
    try {
        const { date } = req.query;
        const appointments = await Appointment.find({ date });
        const bookedSlots = appointments.map(appointment => appointment.time);
        const allSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
        const availableSlots = allSlots.filter(slot => !bookedSlots.includes(slot));
        res.status(200).json({ slots: availableSlots });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving available slots', error });
    }
};
