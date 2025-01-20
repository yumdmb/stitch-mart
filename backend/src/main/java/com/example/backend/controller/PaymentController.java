package com.example.backend.controller;

import com.example.backend.model.Payment;
import com.example.backend.service.FinancialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @Autowired
    private FinancialService financialService;

    @GetMapping
    public List<Payment> getAllPayments() {
        return financialService.getAllPayments();
    }

    @PostMapping("/add")
    public Payment addPayment(@RequestBody Payment payment) {
        return financialService.addPayment(payment);
    }
}
