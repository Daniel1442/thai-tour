package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.mapper.RawPlaceMapper;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
import com.thaitour.thaitourapi.domain.entity.Place;
import com.thaitour.thaitourapi.domain.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PlaceFinder {


    private final RawPlaceMapper rawPlaceMapper;
    private final PlaceRepository placeRepository;


    @Transactional(readOnly = true)
    public List<PlaceRow> findFilterPlace(PlaceFinderPayload payload) {
        return payload.getParameterValuesList().stream()
                .map(placeRepository::filterPlaces)
                .collect(Collectors.toList());
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
