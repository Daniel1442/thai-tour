package com.thaitour.thaitourapi.application.mapper;

import com.thaitour.thaitourapi.domain.dto.catalog.customer.CustomerFavoriteDto;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlace;
import com.thaitour.thaitourapi.domain.entity.CustomerFavorite;
import com.thaitour.thaitourapi.domain.entity.Place;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper
public interface RawPlaceMapper {

    PlaceRow toPlaceRow(RawPlace rawPlace);

    PlaceRow toPlaceDto(Place place);

    CustomerFavoriteDto toCustomerFavoriteDto(CustomerFavorite customerFavorite);

}
