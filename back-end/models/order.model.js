import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  productName: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;