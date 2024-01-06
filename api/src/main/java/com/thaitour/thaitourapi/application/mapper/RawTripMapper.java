package com.thaitour.thaitourapi.application.mapper;

import com.thaitour.thaitourapi.domain.dto.catalog.trip.ListParameter;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawListParameter;
import com.thaitour.thaitourapi.domain.entity.Trip;
import org.mapstruct.Mapper;

@Mapper
public interface RawTripMapper {
    TripRow toTripRow(Trip trip);


    ListParameter toListParameter(RawListParameter rawListParameter);
}
