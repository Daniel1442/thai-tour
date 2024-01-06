package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.entity.TripParameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface TripParameterRepository extends JpaRepository<TripParameter, UUID> {

    @Query(
            value = "select tp.trip.id from TripParameter tp where tp.parameterValue.id = :parameterValueId"
    )
    UUID findTripId(UUID parameterValueId);

    @Query(
            value = "select tp.trip.id from TripParameter tp where tp.parameterValue.id = :parameterValueId"
    )
    List<UUID> findTripsIds(UUID parameterValueId);
}
