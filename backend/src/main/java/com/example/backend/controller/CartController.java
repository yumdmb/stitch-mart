package com.example.backend.controller;

import com.example.backend.model.Cart;
import com.example.backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/{id}")
    public ResponseEntity<Cart> addToCart(@PathVariable String id, @RequestParam String item, @RequestParam double price) {
        Cart cart = cartService.addToCart(id, item, price);
        return ResponseEntity.ok(cart);
    }

    @PutMapping("/editAdd/{id}")
    public ResponseEntity<Cart> incrementQuantity(@PathVariable String id) {
        Cart cart = cartService.incrementQuantity(id);
        return ResponseEntity.ok(cart);
    }

    @PutMapping("/editMinus/{id}")
    public ResponseEntity<Void> decrementQuantity(@PathVariable String id) {
        cartService.decrementQuantity(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/show")
    public ResponseEntity<List<Cart>> fetchCart() {
        List<Cart> cart = cartService.fetchCart();
        return ResponseEntity.ok(cart);
    }

    @GetMapping("/totalPrice")
    public ResponseEntity<Double> fetchTotalPrice() {
        double totalPrice = cartService.fetchTotalPrice();
        return ResponseEntity.ok(totalPrice);
    }

    @PostMapping("/checkout")
    public ResponseEntity<Void> checkout(@RequestParam String email) {
        cartService.checkout(email);
        return ResponseEntity.ok().build();
    }
}
