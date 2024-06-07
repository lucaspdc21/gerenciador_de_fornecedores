package com.lucaspdc21.backend.Controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.lucaspdc21.backend.Entity.Supplier;
import com.lucaspdc21.backend.Repository.SupplierRepository;

import lombok.Data;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;


@CrossOrigin
@RestController
@RequestMapping("/api/suppliers")
public class SupplierController {
    private SupplierRepository supplierRepository;
    public SupplierController(SupplierRepository supplierRepository){
        this.supplierRepository = supplierRepository;
    }

    @GetMapping("/test")
    public String getTest() {
        return "Hello World";
    }
    

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public Supplier getSupplierById(@PathVariable Long id){
        return supplierRepository.findById(id).orElseThrow(
            ()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Supplier not found")
        );
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Supplier save( @RequestBody Supplier supplier){
        return supplierRepository.save(supplier);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update( @PathVariable Long id,
                        @RequestBody Supplier supplier ){
        supplierRepository.findById(id).map( 
            se -> {
                    supplier.setId(se.getId());
                    supplierRepository.save(supplier);
                    return se;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "Supplier not found") );
    }
    
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete( @PathVariable Long id ){
        supplierRepository.findById(id)
                .map( sup -> {
                    supplierRepository.delete(sup );
                    return sup;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Supplier not found") );

    }
    @GetMapping
    public List<Supplier> getAllClients() {
        return supplierRepository.findAll();
    }

}
