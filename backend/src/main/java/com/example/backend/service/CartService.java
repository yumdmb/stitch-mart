package com.example.backend.service;

import com.example.backend.model.Cart;
import com.example.backend.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Cart addToCart(String itemId, String item, double price) {
        return cartRepository.findByItemId(itemId).map(cart -> {
            cart.setQuantity(cart.getQuantity() + 1);
            cart.setTotalPrice(cart.getTotalPrice() + price);
            return cartRepository.save(cart);
        }).orElseGet(() -> {
            Cart newCart = new Cart();
            newCart.setItemId(itemId);
            newCart.setItem(item);
            newCart.setQuantity(1);
            newCart.setTotalPrice(price);
            return cartRepository.save(newCart);
        });
    }

    public Cart incrementQuantity(String itemId) {
        return cartRepository.findByItemId(itemId).map(cart -> {
            double unitPrice = cart.getTotalPrice() / cart.getQuantity();
            cart.setQuantity(cart.getQuantity() + 1);
            cart.setTotalPrice(cart.getTotalPrice() + unitPrice);
            return cartRepository.save(cart);
        }).orElseThrow(() -> new RuntimeException("Item not found in cart"));
    }

    public void decrementQuantity(String itemId) {
        cartRepository.findByItemId(itemId).ifPresent(cart -> {
            double unitPrice = cart.getTotalPrice() / cart.getQuantity();
            if (cart.getQuantity() > 1) {
                cart.setQuantity(cart.getQuantity() - 1);
                cart.setTotalPrice(cart.getTotalPrice() - unitPrice);
                cartRepository.save(cart);
            } else {
                cartRepository.delete(cart);
            }
        });
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
        if (cartItems.isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }
        // Process the checkout logic, update inventory, and send notifications

        // Clear the cart after checkout
        cartRepository.deleteAll();
    }
}
