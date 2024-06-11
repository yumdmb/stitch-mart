import { truncate } from "fs";
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

export const fetchInventoryId = async (req, res, next) => {
    try{
        const InventoryFetched = await Inventory.findById(req.params.id);
        return res.status(200).json(InventoryFetched);
    }
    catch (error) {
        next(error);
    }
}

// export async function editInventory(req, res, next) {
//     try {
//         const { name, quantity } = req.body;

//         const inventory = await Inventory.find(name);

//         await Inventory.update(
//             {
//                 item: name
//             },
//             {$set: {quantity: 10}}, 
//         {new: true});

//         // if (!inventory) {
//         //     return res.status(404).send('Item not found');
//         // }

//         // inventory.quantity += quantity;
//         // await inventory.save();

//         res.json(inventory);
//     } catch (error) {
//         res.status(500).send('Server error');
//     }
// }

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