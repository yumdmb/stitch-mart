package com.example.backend.controller;

import com.example.backend.model.Booking;
import com.example.backend.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    // Create a new booking
    @PostMapping
    public ResponseEntity<?> createBooking(@RequestParam String name,
                                           @RequestParam String email,
                                           @RequestParam String phone,
                                           @RequestParam String embroideryType,
                                           @RequestParam String size,
                                           @RequestParam int quantity,
                                           @RequestParam("designFile") MultipartFile designFile) {
        try {
            // Save the uploaded file
            String uploadDir = "uploads/";
            String filePath = uploadDir + System.currentTimeMillis() + "-" + designFile.getOriginalFilename();
            File file = new File(filePath);
            designFile.transferTo(file);

            // Create booking
            Booking booking = new Booking();
            booking.setName(name);
            booking.setEmail(email);
            booking.setPhone(phone);
            booking.setEmbroideryType(embroideryType);
            booking.setSize(size);
            booking.setQuantity(quantity);
            booking.setDesignPreferences(filePath);
            booking.setStatus("Pending");

            Booking savedBooking = bookingService.createBooking(booking);
            return ResponseEntity.ok(savedBooking);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error uploading file: " + e.getMessage());
        }
    }

    // Get all bookings
    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    // Update booking status
    @PatchMapping("/{id}/status")
    public ResponseEntity<?> updateBookingStatus(@PathVariable Long id, @RequestParam String status) {
        Optional<Booking> updatedBooking = bookingService.updateBookingStatus(id, status);
        if (updatedBooking.isPresent()) {
            return ResponseEntity.ok(updatedBooking.get());
        } else {
            return ResponseEntity.status(404).body("Booking not found");
        }
    }
}
