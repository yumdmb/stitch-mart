package com.example.backend.repository;

import com.example.backend.model.BookingInvoice;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookingInvoiceRepository extends MongoRepository<BookingInvoice, String> {
}
