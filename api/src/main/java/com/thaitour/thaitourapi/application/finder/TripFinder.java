package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.mapper.RawTripMapper;
import com.thaitour.thaitourapi.domain.dao.ParameterDao;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleRow;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripParameter;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawArticle;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawTripParameter;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TripFinder {

    private final RawTripMapper rawTripMapper;
    private final ParameterDao parameterDao;
    private final TripRepository tripRepository;
    @Transactional(readOnly = true)
    public Page<TripRow> findTrips(
            Pageable pageable
    ) throws ThaiTourException {
      return tripRepository.findAll(pageable).map(rawTripMapper::toTripRow);
    }

    @Transactional(readOnly = true)
    public List<TripParameter> findTripParams(
    ) throws ThaiTourException {
        List<RawTripParameter> entries = parameterDao.findAllParameterForTrips();

        return entries.stream()
                .map(rawTripMapper::toTripParameter)
                .toList();
    }
}
