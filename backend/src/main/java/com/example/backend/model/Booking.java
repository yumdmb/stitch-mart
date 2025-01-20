package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "booking")
public class Booking {

    @Id
    private String id;
    private String name;
    private String email;
    private String phone;
    private String embroideryType;
    private String size;
    private int quantity;
    private String designPreferences;
    private String status = "Pending"; // Default to "Pending"
    private Date createdAt = new Date();

    public Booking() {}

    public Booking(String name, String email, String phone, String embroideryType, String size, int quantity, String designPreferences, String status) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.embroideryType = embroideryType;
        this.size = size;
        this.quantity = quantity;
        this.designPreferences = designPreferences;
        this.status = status;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmbroideryType() {
        return embroideryType;
    }

    public void setEmbroideryType(String embroideryType) {
        this.embroideryType = embroideryType;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }


    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDesignPreferences() {
        return designPreferences;
    }

    public void setDesignPreferences(String designPreferences) {
        this.designPreferences = designPreferences;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
