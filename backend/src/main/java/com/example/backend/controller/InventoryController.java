package com.example.backend.controller;

import com.example.backend.model.Inventory;
import com.example.backend.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inventory")
@CrossOrigin(origins = "http://localhost:3000")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping
    public List<Inventory> fetchInventory() {
        return inventoryService.fetchInventory();
    }

    @GetMapping("/{id}")
    public Optional<Inventory> fetchInventoryById(@PathVariable String id) {
        return inventoryService.fetchInventoryById(id);
    }

    @PutMapping("/{id}")
    public Inventory updateInventory(@PathVariable String id, @RequestBody Inventory inventoryDetails) {
        return inventoryService.updateInventory(id, inventoryDetails);
    }

    @DeleteMapping("/{id}")
    public String deleteInventory(@PathVariable String id) {
        inventoryService.deleteInventory(id);
        return "Inventory deleted successfully!";
    }
}
