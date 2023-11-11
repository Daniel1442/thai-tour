package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.mapper.RawTripMapper;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleRow;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripRow;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class TripFinder {

    private final RawTripMapper rawTripMapper;
    private final TripRepository tripRepository;
    @Transactional(readOnly = true)
    public Page<TripRow> findTrips(
            Pageable pageable
    ) throws ThaiTourException {
      return tripRepository.findAll(pageable).map(rawTripMapper::toTripRow);
    }
}
