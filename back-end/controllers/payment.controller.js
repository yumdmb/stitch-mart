import Payment from '../models/payment.model.js';

// Get all payments
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('clientId');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new payment
export const addPayment = async (req, res) => {
  const payment = new Payment(req.body);
  try {
    const newPayment = await payment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
