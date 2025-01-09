import { truncate } from "fs";
import Inventory from "../models/inventory.model.js";
import Notification from '../models/notiModel.js';

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

export const updateInventory = async (req, res, next) => {
  try {
    const InventoryUpdated = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    console.log("InventoryUpdated: ", InventoryUpdated);
    if (parseInt(InventoryUpdated.quantity) < 10) {
      const lowStockNoti = new Notification({
        email: "adamarbain2107@gmail.com",
        isRead: false,
        category: "Low Inventory Alert",
        content: `${InventoryUpdated.item} is running low! Only ${InventoryUpdated.quantity} is left!.`,
      });
      await lowStockNoti.save();
    }

    return res.status(200).json(InventoryUpdated);
  } catch (error) {
    next(error);
  }
};

export const deleteInventory = async (req, res, next) => {
    try{
        await Inventory.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: 'Inventory deleted successfully'});
    }
    catch (error) {
        next(error);
    }
};


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