package com.example.backend.controller;

import com.example.backend.model.BookingInvoice;
import com.example.backend.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/booking-invoices")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingInvoiceController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/generate")
    public BookingInvoice generateInvoice(@RequestBody BookingInvoice bookingInvoice) {
        return bookingService.generateInvoice(bookingInvoice.getBookingId(), bookingInvoice.getBookingId());
    }

    @GetMapping
    public List<BookingInvoice> getInvoices() {
        return bookingService.getInvoices();
    }
}
