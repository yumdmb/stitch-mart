import Inventory from "../models/inventory.model.js";

export const fetchInventory = async (req, res, next) => {
    try{
        const InventoryFetched = await Inventory.find({});
        return res.status(200).json(InventoryFetched);
    }
    catch (error) {
        next(error);
    }
}

// export const createInventory = async (req, res, next) => {
//     const newInventory = new Inventory({ item: 'Hello',
//                                     price: 25,
//                                     quantity: 100});
//     try {
//         await newInventory.save();
//         res.status(201).json({ message: 'New notificaNew invenorytion updated'});
//     } catch (error) {
//         next(error);
//     }
// };