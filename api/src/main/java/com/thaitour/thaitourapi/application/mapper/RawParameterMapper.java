package com.thaitour.thaitourapi.application.mapper;

import com.thaitour.thaitourapi.domain.dto.catalog.parameter.PlaceParameterRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlaceParameter;
import org.mapstruct.Mapper;

@Mapper
public interface RawParameterMapper {
    PlaceParameterRow toPlaceParameterRow(RawPlaceParameter rawPlaceParameter);
}
