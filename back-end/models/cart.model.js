import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    itemId:{
        type: String
    },
    item: {
        type: String
    },
    quantity: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;