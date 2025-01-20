package com.example.backend.service;

import com.example.backend.model.Cart;
import com.example.backend.model.Inventory;
import com.example.backend.model.Notification;
import com.example.backend.repository.CartRepository;
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
    private CartRepository cartRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    // Inventory Operations
    public List<Inventory> fetchInventory() {
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

            if (updatedInventory.getQuantity() < 10) {
                Notification notification = new Notification(
                    "adamarbain2107@gmail.com",
                    false,
                    "Low Inventory Alert",
                    updatedInventory.getItem() + " is running low! Only " + updatedInventory.getQuantity() + " is left!"
                );
                notificationRepository.save(notification);
            }

            return inventoryRepository.save(updatedInventory);
        }

        return null;
    }

    public void deleteInventory(String id) {
        inventoryRepository.deleteById(id);
    }

    // Cart Operations
    public Cart createCart(String inventoryId) {
        Optional<Inventory> inventoryOpt = inventoryRepository.findById(inventoryId);

        if (inventoryOpt.isPresent()) {
            Inventory inventory = inventoryOpt.get();
            Optional<Cart> existingCartOpt = cartRepository.findByItemId(inventoryId);

            if (existingCartOpt.isEmpty()) {
                Cart newCart = new Cart(inventoryId, inventory.getItem(), 1, inventory.getPrice());
                return cartRepository.save(newCart);
            } else {
                Cart existingCart = existingCartOpt.get();
                existingCart.setQuantity(existingCart.getQuantity() + 1);
                existingCart.setTotalPrice(existingCart.getTotalPrice() + inventory.getPrice());
                return cartRepository.save(existingCart);
            }
        }

        return null;
    }

    public Cart editCartAdd(String cartItemId) {
        Optional<Cart> cartOpt = cartRepository.findById(cartItemId);

        if (cartOpt.isPresent()) {
            Cart cart = cartOpt.get();
            double itemPrice = cart.getTotalPrice() / cart.getQuantity();
            cart.setQuantity(cart.getQuantity() + 1);
            cart.setTotalPrice(cart.getTotalPrice() + itemPrice);
            return cartRepository.save(cart);
        }

        return null;
    }

    public Cart editCartMinus(String cartItemId) {
        Optional<Cart> cartOpt = cartRepository.findById(cartItemId);

        if (cartOpt.isPresent()) {
            Cart cart = cartOpt.get();
            double itemPrice = cart.getTotalPrice() / cart.getQuantity();
            cart.setQuantity(cart.getQuantity() - 1);

            if (cart.getQuantity() < 1) {
                cartRepository.delete(cart);
                return null;
            }

            cart.setTotalPrice(cart.getTotalPrice() - itemPrice);
            return cartRepository.save(cart);
        }

        return null;
    }

    public List<Cart> fetchCart() {
        return cartRepository.findAll();
    }

    public double fetchTotalPrice() {
        return cartRepository.findAll().stream()
                .mapToDouble(Cart::getTotalPrice)
                .sum();
    }

    public void checkout(String email) {
        List<Cart> cartItems = cartRepository.findAll();
        StringBuilder cartDetails = new StringBuilder();

        for (Cart cartItem : cartItems) {
            cartDetails.append(cartItem.getItem()).append(" (").append(cartItem.getQuantity()).append(")\n");
            Inventory inventory = inventoryRepository.findById(cartItem.getItemId()).orElseThrow();

            if (inventory.getQuantity() < cartItem.getQuantity()) {
                throw new IllegalArgumentException("Insufficient stock for " + cartItem.getItem());
            }

            inventory.setQuantity(inventory.getQuantity() - cartItem.getQuantity());
            inventoryRepository.save(inventory);

            if (inventory.getQuantity() < 10) {
                Notification notification = new Notification(
                    "adamarbain2107@gmail.com",
                    false,
                    "Low Inventory Alert",
                    inventory.getItem() + " is running low! Only " + inventory.getQuantity() + " is left!"
                );
                notificationRepository.save(notification);
            }
        }

        Notification buyerNotification = new Notification(
            email,
            false,
            "Order Update",
            "Your items:\n" + cartDetails + "have been booked successfully."
        );

        Notification sellerNotification = new Notification(
            "adamarbain2107@gmail.com",
            false,
            "Order Update",
            "The following items were booked:\n" + cartDetails + "by " + email + "."
        );

        notificationRepository.save(buyerNotification);
        notificationRepository.save(sellerNotification);

        cartRepository.deleteAll();
    }
}
