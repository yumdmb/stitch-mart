package com.example.backend.repository;

import com.example.backend.model.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, Long> {
    List<Appointment> findByDate(LocalDate date);
}
