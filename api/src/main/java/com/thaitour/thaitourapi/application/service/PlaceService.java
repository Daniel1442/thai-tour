package com.thaitour.thaitourapi.application.service;

import com.thaitour.thaitourapi.application.validator.CustomerDataValidator;
import com.thaitour.thaitourapi.domain.dto.catalog.place.FavoritePlacePayload;
import com.thaitour.thaitourapi.domain.entity.Customer;
import com.thaitour.thaitourapi.domain.entity.CustomerFavorite;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.CustomerFavoriteRepository;
import com.thaitour.thaitourapi.domain.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PlaceService {

    @Autowired
    private CustomerFavoriteRepository customerFavoriteRepository;

    @Autowired
    CustomerRepository customerRepository;

    public void toggleFavorite(FavoritePlacePayload payload) {
        CustomerDataValidator.validateToggleFavorite(payload);

        CustomerFavorite customerFavorite = customerFavoriteRepository.findOneByResourceIdAndCustomerIdAndType(
                payload.getResourceId(), payload.getCustomerId(), payload.getType());

        if (customerFavorite == null) {
            createNewFavorite(payload);
        } else {
            toggleFavoriteStatus(customerFavorite);
        }
    }

    private void createNewFavorite(FavoritePlacePayload payload) {
        CustomerFavorite customerFavorite = new CustomerFavorite();
        Optional<Customer> customer = customerRepository.findById(payload.getCustomerId());

        customer.ifPresent(c -> {
            customerFavorite.setCustomer(c);
            customerFavorite.setResourceId(payload.getResourceId());
            customerFavorite.setType(payload.getType());
            customerFavorite.setIsActive(true);
            customerFavorite.setCreatedBy("USER");
            customerFavoriteRepository.save(customerFavorite);
        });
    }

    private void toggleFavoriteStatus(CustomerFavorite customerFavorite) {
        customerFavorite.setIsActive(!customerFavorite.getIsActive());
        customerFavoriteRepository.save(customerFavorite);
    }

}
