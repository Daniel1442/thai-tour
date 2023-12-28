package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.entity.CustomerFavorite;
import com.thaitour.thaitourapi.domain.enums.CustomerFavoriteType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CustomerFavoriteRepository extends JpaRepository<CustomerFavorite, UUID> {

    CustomerFavorite findOneByResourceIdAndCustomerIdAndType(UUID resourceId, UUID customerId, CustomerFavoriteType customerFavoriteType);
    CustomerFavorite deleteOneByResourceIdAndCustomerIdAndType(UUID resourceId, UUID customerId, CustomerFavoriteType customerFavoriteType);



}
