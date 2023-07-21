package com.thaitour.thaitourapi.application.mapper;

import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlace;
import com.thaitour.thaitourapi.domain.entity.Place;
import org.mapstruct.Mapper;


@Mapper
public interface RawPlaceMapper {

    PlaceRow toPlaceRow(RawPlace rawPlace);

    PlaceRow toPlaceDto(Place place);

}
