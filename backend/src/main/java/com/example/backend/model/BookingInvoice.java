package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "bookingInvoice")
public class BookingInvoice {

    @Id
    private String id;
    private String bookingId;
    private String invoiceNo;
    private Date invoiceDate = new Date();
    private List<InvoiceItem> items;
    private double total;

    public BookingInvoice() {}

    public BookingInvoice(String bookingId, String invoiceNo, List<InvoiceItem> items, double total) {
        this.bookingId = bookingId;
        this.invoiceNo = invoiceNo;
        this.items = items;
        this.total = total;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public String getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(String invoiceNo) {
        this.invoiceNo = invoiceNo;
    }

    public Date getInvoiceDate() {

        return invoiceDate;
    }

    public void setInvoiceDate(Date invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public List<InvoiceItem> getItems() {
        return items;
    }

    public void setItems(List<InvoiceItem> items) {
        this.items = items;
    }

    public double getTotal() {
        return total;
    }
}
