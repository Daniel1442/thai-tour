package com.thaitour.thaitourapi.application.mapper;

import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripParameter;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawTripParameter;
import com.thaitour.thaitourapi.domain.entity.Trip;
import org.mapstruct.Mapper;

@Mapper
public interface RawTripMapper {
    TripRow toTripRow(Trip trip);


    TripParameter toTripParameter(RawTripParameter rawTripParameter);
}
