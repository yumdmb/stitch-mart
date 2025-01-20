package com.example.backend.repository;

import com.example.backend.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface CartRepository extends MongoRepository<Cart, Long> {
    Optional<Cart> findByItemId(String itemId);
}
