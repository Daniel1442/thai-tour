package com.thaitour.thaitourapi.application.mapper;

import com.thaitour.thaitourapi.domain.dto.catalog.parameter.ParameterRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawParameter;
import org.mapstruct.Mapper;

@Mapper
public interface RawParameterMapper {
    ParameterRow toParameterRow(RawParameter rawParameter);
}
