package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.mapper.RawParameterMapper;
import com.thaitour.thaitourapi.application.mapper.RawPlaceMapper;
import com.thaitour.thaitourapi.domain.dao.ParameterDao;
import com.thaitour.thaitourapi.domain.dao.PlaceDao;
import com.thaitour.thaitourapi.domain.dto.catalog.parameter.PlaceParameterRow;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlace;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlaceParameter;
import com.thaitour.thaitourapi.domain.entity.Place;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class PlaceFinder {

    private final PlaceDao placeDao;
    private final ParameterDao parameterDao;
    private final RawPlaceMapper rawPlaceMapper;
    private final RawParameterMapper rawParamerMapper;
    private final PlaceRepository placeRepository;

    @Transactional(readOnly = true)
    public Page<PlaceRow> findPlace(
            PlaceFinderPayload payload,
            Pageable pageable
    ) throws ThaiTourException {
        List<RawPlace> entries = placeDao.filter(payload, pageable);

        return new PageImpl<>(
                entries.stream()
                        .map(rawPlaceMapper::toPlaceRow)
                        .toList(),
                pageable,
                placeDao.filterCount(payload)
        );
    }

    @Transactional(readOnly = true)
    public List<PlaceParameterRow> findPlaceParameter(UUID paramterId) {

        List<RawPlaceParameter> entries = parameterDao.filter(paramterId);

        return entries.stream()
                .map(rawParamerMapper::toPlaceParameterRow)
                .toList();

    }

    @Transactional(readOnly = true)
    public List<PlaceRow> findFavoritePlace() {
        List<Place> favoritePlaceEntities = placeRepository.findFavoritePlaces();

        if (Objects.isNull(favoritePlaceEntities)){
            return null;
        }

        return  favoritePlaceEntities.stream().map(rawPlaceMapper::toPlaceDto).toList();

    }
}
