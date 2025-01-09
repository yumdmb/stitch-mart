import Cart from '../models/cart.model.js';
import Inventory from "../models/inventory.model.js";
import Notification from '../models/notiModel.js';

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

export const checkout = async (req, res, next) => {
    const cartFetched = await Cart.find({});
    const {email} = req.params;
    const cartDetails = cartFetched.map(cart => 
        `${cart.item} (${cart.quantity})`
    ).join('\n');

    for (const cartItem of cartFetched) {
        const inventoryItem = await Inventory.findById(cartItem.itemId);

        if (!inventoryItem) {
            return res.status(404).json({ message: `Item ${cartItem.item} not found in inventory` });
        }

        if (inventoryItem.quantity < cartItem.quantity) {
            return res.status(400).json({ message: `Insufficient stock for item ${cartItem.item}` });
        }

        await Inventory.updateOne(
            { _id: inventoryItem._id },
            { $inc: { quantity: -cartItem.quantity } }
          );

        if (inventoryItem.quantity<10) {
            const notiLowInv = new Notification({ email: 'adamarbain2107@gmail.com', //since seller
                isRead: false, 
                category: 'Low Inventory Alert',
                content: `${inventoryItem.item} is running low! Only ${inventoryItem.quantity} is left!.`});
            await notiLowInv.save();
        }
    }

    const notiBuyer = new Notification({
        email: email,
        isRead: false,
        category: 'Order Update',
        content: `Your items : \n${cartDetails}, has been booked successfully.`
    });

    const notiSeller = new Notification({ email: 'adamarbain2107@gmail.com',
    isRead: false, 
    category: 'Order Update',
        content: `${cartDetails} is booked from ${email}.`});
    await notiBuyer.save();
    await notiSeller.save();
    await Cart.deleteMany({})
    return res.status(201).json(notiSeller);
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

export const fetchTotalPrice = async (req, res, next) => {
    try{
        const cartFetched = await Cart.find({});
        const totalPrice = cartFetched.reduce((accumulator, cart) => accumulator + cart.totalPrice, 0);
        return res.status(200).json({totalPrice});
    }
    catch (error) {
        next(error);
    }
}