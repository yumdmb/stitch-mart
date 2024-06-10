import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  about: { type: String, required: true },
  picture: { type: String, required: true, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
});

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;