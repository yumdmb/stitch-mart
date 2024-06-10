import Cart from '../models/cart.model.js';
import Inventory from "../models/inventory.model.js";

export const createCart = async (req, res, next) => {
    try{
        const InventoryFetched = await Inventory.findById(req.params.id);
        const checkCart = await Cart.find({itemId: InventoryFetched.id});
        if (checkCart.length <= 0) {
            const newCart = new Cart({ itemId: InventoryFetched._id, item: InventoryFetched.item, quantity: 1, totalPrice: InventoryFetched.price});
            await newCart.save();
            return res.status(200).json(InventoryFetched);
        } else {
            const cartItem = checkCart[0];
            const newQuantity = cartItem.quantity + 1;
            const newTotalPrice = InventoryFetched.price * newQuantity;

            const updatedCart = await Cart.updateOne(
                {
                    itemId: InventoryFetched.id
                },
                {$set: {quantity: newQuantity,
                        totalPrice: newTotalPrice
                }}, 
            {new: true});
            return res.status(200).json(InventoryFetched);
            return res.status(200).json({ message: 'Item already in cart' });
        }
        
    }
    catch (error) {
        next(error);
    }
};

export const editAdd = async (req, res, next) => {
    try{
        const currentCart = await Cart.find({itemId: req.params.id});

        const cartItem = currentCart[0];
        const newQuantity = parseInt(cartItem.quantity) + 1;
        const newTotalPrice = parseFloat(cartItem.totalPrice) + parseFloat(cartItem.totalPrice) / parseFloat(cartItem.quantity);

        const updatedCart = await Cart.updateOne(
            {
                itemId: req.params.id
            },
            {$set: {quantity: newQuantity,
                totalPrice: newTotalPrice
            }}, 
        {new: true});

        return res.status(200).json(updatedCart);
    } catch (error){
        next(error);
    }
}

export const editMinus = async (req, res, next) => {
    try{
        const currentCart = await Cart.find({itemId: req.params.id});

        const cartItem = currentCart[0];
        const newQuantity = parseInt(cartItem.quantity) - 1;
        const newTotalPrice = parseFloat(cartItem.totalPrice) - parseFloat(cartItem.totalPrice) / parseFloat(cartItem.quantity);

        if(newQuantity<1){
            const updatedCart = await Cart.deleteOne(
                {
                    itemId: req.params.id
                });
        } else {
            const updatedCart = await Cart.updateOne(
                {
                    itemId: req.params.id
                },
                {$set: {quantity: newQuantity,
                    totalPrice: newTotalPrice
                }}, 
            {new: true});
        }
        

        return res.status(200).json(updatedCart);
    } catch (error){
        next(error);
    }
}

export const fetchCart = async (req, res, next) => {
    try{
        const cartFetched = await Cart.find({});
        return res.status(200).json(cartFetched);
    }
    catch (error) {
        next(error);
    }
}