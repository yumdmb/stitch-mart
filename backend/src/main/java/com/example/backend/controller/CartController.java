package com.example.backend.controller;

import com.example.backend.model.Cart;
import com.example.backend.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private InventoryService inventoryService;

    @PostMapping("/{inventoryId}")
    public Cart createCart(@PathVariable String inventoryId) {
        return inventoryService.createCart(inventoryId);
    }

    @GetMapping("/show")
    public List<Cart> fetchCart() {
        return inventoryService.fetchCart();
    }

    @PutMapping("/editAdd/{cartId}")
    public Cart editCartAdd(@PathVariable String cartId) {
        return inventoryService.editCartAdd(cartId);
    }

    @PutMapping("/editMinus/{cartId}")
    public Cart editCartMinus(@PathVariable String cartId) {
        return inventoryService.editCartMinus(cartId);
    }

    @GetMapping("/totalPrice")
    public double fetchTotalPrice() {
        return inventoryService.fetchTotalPrice();
    }

    @PostMapping("/checkout/{email}")
    public String checkout(@PathVariable String email) {
        inventoryService.checkout(email);
        return "Checkout completed successfully!";
    }
}
