package com.example.backend.model;

import java.time.LocalDateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookings") // Maps this class to the "users" collection in MongoDB
public class Booking {
    @Id
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String embroideryType;
    private String size;
    private int quantity;
    private String designPreferences; // Path to the uploaded design file
    private String status = "Pending"; // Default status

    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
