package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.mapper.RawParameterMapper;
import com.thaitour.thaitourapi.application.mapper.RawTripMapper;
import com.thaitour.thaitourapi.domain.dao.ParameterDao;
import com.thaitour.thaitourapi.domain.dto.catalog.parameter.ParameterRow;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.ListParameter;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawListParameter;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawParameter;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ParameterFinder {

    private final ParameterDao parameterDao;
    private final RawParameterMapper rawParameterMapper;
    private final RawTripMapper rawTripMapper;

    @Transactional(readOnly = true)
    public List<ParameterRow> findAllPlaceParameters() {
        List<RawParameter> entities = parameterDao.findAllParametersForPlaces();


        return (entities.stream()
        ).map(rawParameterMapper::toParameterRow).toList();
    }

    @Transactional(readOnly = true)
    public List<ParameterRow> findAllTripParameters() {
        List<RawParameter> entities = parameterDao.findAllParametersForTrip();


        return (entities.stream()
        ).map(rawParameterMapper::toParameterRow).toList();
    }


    @Transactional(readOnly = true)
    public List<ListParameter> findParams(
    ) throws ThaiTourException {
        List<RawListParameter> entries = parameterDao.findAllParameterForList();

        return entries.stream()
                .map(rawTripMapper::toListParameter)
                .toList();
    }
}
