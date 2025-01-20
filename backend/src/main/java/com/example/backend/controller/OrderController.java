package com.example.backend.controller;

import com.example.backend.model.Order;
import com.example.backend.service.FinancialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private FinancialService financialService;

    @GetMapping
    public List<Order> getAllOrders() {
        return financialService.getAllOrders();
    }

    @PostMapping("/add")
    public Order addOrder(@RequestBody Order order) {
        return financialService.addOrder(order);
    }
}
