package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.mapper.RawParameterMapper;
import com.thaitour.thaitourapi.domain.dao.ParameterDao;
import com.thaitour.thaitourapi.domain.dto.catalog.parameter.PlaceParameterRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlaceParameter;
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

    @Transactional(readOnly = true)
    public List<PlaceParameterRow> findAll() {
        List<RawPlaceParameter> entities = parameterDao.findAll();


        return (entities.stream()
        ).map(rawParameterMapper::toPlaceParameterRow).toList();
    }
}
