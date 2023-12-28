package com.thaitour.thaitourapi.application.service;

import com.thaitour.thaitourapi.application.validator.CustomerDataValidator;
import com.thaitour.thaitourapi.domain.dto.account.LoginPayload;
import com.thaitour.thaitourapi.domain.dto.account.LoginResponse;
import com.thaitour.thaitourapi.domain.dto.account.RegisterPayload;
import com.thaitour.thaitourapi.domain.entity.Customer;
import com.thaitour.thaitourapi.domain.enums.CustomerType;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public void registration(RegisterPayload payload) {

        Customer customer = customerRepository.findByEmail(payload.getEmail());

        if (customer != null) {
            throw new ThaiTourException("Tento email je již použítý! Zkuste prosím jiný.");
        }

        customer = new Customer();

        CustomerDataValidator.validateRegistrationPayload(payload);

        customer.setSurname(payload.getSurname());
        customer.setLastname(payload.getLastname());
        customer.setEmail(payload.getEmail());
        customer.setUsername(payload.getSurname().charAt(0) + ". " + payload.getLastname());
        customer.setCreatedBy("CUSTOMER");
        customer.setType(CustomerType.CUSTOMER);
        customer.setIsActive(true);
        customer.setPassword(payload.getPassword());

        customerRepository.save(customer);
    }


    public LoginResponse login(LoginPayload payload) {

        CustomerDataValidator.validateLoginPayload(payload);
        Customer customer = customerRepository.findOneByEmailAndPassword(payload.getEmail(), payload.getPassword());

        if (customer == null) {
            throw new ThaiTourException("Tento email není u nás zaregistrovaný.");
        }

        LoginResponse response = new LoginResponse();

        response.setUserId(customer.getId());
        response.setUsername(customer.getUsername());
        response.setUserId(customer.getId());

        return response;
    }

}
