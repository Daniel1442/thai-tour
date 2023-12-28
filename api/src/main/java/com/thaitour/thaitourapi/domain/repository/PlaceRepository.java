package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
import com.thaitour.thaitourapi.domain.entity.Place;
import com.thaitour.thaitourapi.domain.enums.CustomerFavoriteType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface PlaceRepository extends JpaRepository<Place, UUID> {

    @Query(
            value = "select * from place pla order by pla.review desc limit 4 ;",
            nativeQuery = true
    )
    List<Place> findFavoritePlaces();

    @Query(value = "SELECT p FROM Place p WHERE p.id IN (:placeIds) ")
    List<Place> getPlaces(List<UUID> placeIds);


    @Query(value = "SELECT p FROM Place p inner join CustomerFavorite cf on cf.resourceId = p.id and cf.customer.id = (:customerId) and cf.type = (:type) and cf.isActive = true ")
    List<Place> findCustomerFavoritePlaces(UUID customerId, CustomerFavoriteType type);
}
