package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID> {

    Customer findOneByEmailAndPassword(String email, String password);

    Customer findByEmail(String email);

}
