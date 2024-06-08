package com.lucaspdc21.backend.Entity;


import java.util.Set;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Supplier {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String descricao;

    private String setor;

    private String email;

    private String cnpj;

    private String telefone;

    private String site;

    private String endereco;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "supplier")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Set<Contract> contracts;
    
}