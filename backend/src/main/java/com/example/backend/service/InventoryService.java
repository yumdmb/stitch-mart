package com.example.backend.service;

import com.example.backend.model.Inventory;
import com.example.backend.model.Notification;
import com.example.backend.repository.InventoryRepository;
import com.example.backend.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    public List<Inventory> fetchAllInventory() {
        return inventoryRepository.findAll();
    }

    public Optional<Inventory> fetchInventoryById(String id) {
        return inventoryRepository.findById(id);
    }

    public Inventory updateInventory(String id, Inventory inventoryDetails) {
        Optional<Inventory> inventory = inventoryRepository.findById(id);

        if (inventory.isPresent()) {
            Inventory updatedInventory = inventory.get();
            updatedInventory.setItem(inventoryDetails.getItem());
            updatedInventory.setQuantity(inventoryDetails.getQuantity());
            updatedInventory.setPrice(inventoryDetails.getPrice());
            updatedInventory.setAbout(inventoryDetails.getAbout());
            updatedInventory.setPicture(inventoryDetails.getPicture());
            inventoryRepository.save(updatedInventory);

            if (updatedInventory.getQuantity() < 10) {
                Notification lowStockNoti = new Notification(
                    "adamarbain2107@gmail.com",
                    false,
                    "Low Inventory Alert",
                    updatedInventory.getItem() + " is running low! Only " + updatedInventory.getQuantity() + " is left!"
                );
                notificationRepository.save(lowStockNoti);
            }
            return updatedInventory;
        }
        return null;
    }

    public void deleteInventory(String id) {
        inventoryRepository.deleteById(id);
    }
}
