package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.entity.Place;
import com.thaitour.thaitourapi.domain.entity.PlaceParameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface PlaceParameterRepository extends JpaRepository<PlaceParameter, UUID> {

    @Query(
            value = "select pp.place.id from PlaceParameter pp where pp.parameterValue.id = :parameterValueId"
    )
    UUID findPlaceId(UUID parameterValueId);

}
