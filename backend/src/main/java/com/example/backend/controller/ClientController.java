package com.example.backend.controller;

import com.example.backend.model.Client;
import com.example.backend.service.FinancialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

    @Autowired
    private FinancialService financialService;

    @GetMapping
    public List<Client> getAllClients() {
        return financialService.getAllClients();
    }

    @PostMapping("/add")
    public Client addClient(@RequestBody Client client) {
        return financialService.addClient(client);
    }
}
