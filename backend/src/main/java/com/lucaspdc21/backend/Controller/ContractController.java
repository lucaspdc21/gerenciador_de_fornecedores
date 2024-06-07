package com.lucaspdc21.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.lucaspdc21.backend.Entity.Contract;
import com.lucaspdc21.backend.Entity.Supplier;
import com.lucaspdc21.backend.Repository.ContractRepository;
import com.lucaspdc21.backend.Repository.SupplierRepository;

import java.util.Optional;

@RestController
@RequestMapping("/api/contracts")
public class ContractController {

    private final ContractRepository contractRepository;
    private final SupplierRepository supplierRepository;
    public ContractController(ContractRepository contractRepository, SupplierRepository supplierRepository) {
        this.contractRepository = contractRepository;
        this.supplierRepository = supplierRepository;
    }

    @PostMapping("/{supplierId}")
    @ResponseStatus(HttpStatus.CREATED)
    public Contract save(@PathVariable Long supplierId, @RequestBody Contract contract) {
        Optional<Supplier> supplier = supplierRepository.findById(supplierId);
        if (supplier.isPresent()) {
            contract.setSupplier(supplier.get());
            return contractRepository.save(contract);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Supplier not found");
        }
    }
}