package com.example.backend.model;

public class InvoiceItem {

    private String embroideryType;
    private int size;
    private int quantity;
    private double price;

    public InvoiceItem(String embroideryType, int size, int quantity, double price) {
        this.embroideryType = embroideryType;
        this.size = size;
        this.quantity = quantity;
        this.price = price;
    }

    // Getters and Setters
    public String getEmbroideryType() {
        return embroideryType;
    }

    public void setEmbroideryType(String embroideryType) {
        this.embroideryType = embroideryType;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
