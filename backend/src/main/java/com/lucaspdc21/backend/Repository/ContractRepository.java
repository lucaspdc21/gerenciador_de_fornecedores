package com.lucaspdc21.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lucaspdc21.backend.Entity.Contract;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {

}
