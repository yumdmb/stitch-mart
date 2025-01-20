package com.example.backend.service;

import com.example.backend.model.Booking;
import com.example.backend.model.BookingInvoice;
import com.example.backend.model.InvoiceItem;
import com.example.backend.model.Notification;
import com.example.backend.repository.BookingInvoiceRepository;
import com.example.backend.repository.BookingRepository;
import com.example.backend.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private BookingInvoiceRepository bookingInvoiceRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    public Booking createBooking(Booking booking) {
        Notification notiBuyer = new Notification(
            booking.getEmail(),
            false,
            "Order Update",
            "One of your items needs booking confirmation."
        );

        Notification notiSeller = new Notification(
            "adamarbain2107@gmail.com",
            false,
            "Order Update",
            "User " + booking.getName() + " (" + booking.getEmail() + ") is booking embroidery services."
        );

        notificationRepository.save(notiBuyer);
        notificationRepository.save(notiSeller);
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking updateBookingStatus(String bookingId, String status) {
        Optional<Booking> bookingOpt = bookingRepository.findById(bookingId);
        if (bookingOpt.isPresent()) {
            Booking booking = bookingOpt.get();
            booking.setStatus(status);
            return bookingRepository.save(booking);
        }
        return null;
    }

    public BookingInvoice generateInvoice(String bookingId, String bookingEmail) {
        Booking booking = bookingRepository.findById(bookingId).orElseThrow(() -> new IllegalArgumentException("Booking not found"));

        List<InvoiceItem> items = new ArrayList<>();
        items.add(new InvoiceItem(
            booking.getEmbroideryType(),
            Integer.parseInt(booking.getSize()),
            booking.getQuantity(),
            Double.parseDouble(booking.getSize()) * 10
        ));

        double total = items.stream().mapToDouble(item -> item.getPrice() * item.getQuantity()).sum();

        BookingInvoice newInvoice = new BookingInvoice(
            bookingId,
            "INV-" + System.currentTimeMillis(),
            items,
            total
        );

        Notification notiBuyer = new Notification(
            bookingEmail,
            false,
            "Order Update",
            "Your booking order for " + bookingId + " has been confirmed."
        );

        Notification notiSeller = new Notification(
            bookingEmail,
            false,
            "Order Update",
            "Booking order for " + bookingId + " has been confirmed."
        );

        notificationRepository.save(notiBuyer);
        notificationRepository.save(notiSeller);
        bookingRepository.deleteById(bookingId);
        return bookingInvoiceRepository.save(newInvoice);
    }

    public List<BookingInvoice> getInvoices() {
        return bookingInvoiceRepository.findAll();
    }
}
