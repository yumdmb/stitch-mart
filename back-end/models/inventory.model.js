import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;