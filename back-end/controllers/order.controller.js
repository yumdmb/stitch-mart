import Order from '../models/order.model.js';

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('clientId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new order
export const addOrder = async (req, res) => {
  const order = new Order(req.body);
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
