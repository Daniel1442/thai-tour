package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.builder.PlaceDetailBuilder;
import com.thaitour.thaitourapi.application.mapper.RawPlaceMapper;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
import com.thaitour.thaitourapi.domain.entity.Place;
import com.thaitour.thaitourapi.domain.repository.PlaceParameterRepository;
import com.thaitour.thaitourapi.domain.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PlaceFinder {


    private final RawPlaceMapper rawPlaceMapper;
    private final PlaceDetailBuilder detailBuilder;
    private final PlaceRepository placeRepository;
    private final PlaceParameterRepository placeParameterRepository;


    @Transactional(readOnly = true)
    public List<PlaceDetail> findFilterPlace(PlaceFinderPayload payload) {
        List<UUID> placeIds = new ArrayList<>();
        List<PlaceDetail> places = new ArrayList<PlaceDetail>();
        if (payload.getParameterValuesList() != null) {
            for (int i = 0; i < payload.getParameterValuesList().size(); i++) {
                placeIds.add(placeParameterRepository.findPlaceId(payload.getParameterValuesList().get(i)));
            }
        } else {
            placeIds = placeRepository.findAll().stream().map(Place::getId).collect(Collectors.toList());
        }

        Set<UUID> set = new HashSet<>(placeIds);
        placeIds.clear();
        placeIds.addAll(set);

        for (int i = 0; i < placeIds.size(); i++) {
            detailBuilder.build(placeIds.get(i));
            places.add(detailBuilder.build(placeIds.get(i)));
        }

        return places;
    }

    @Transactional(readOnly = true)
    public List<PlaceRow> findFavoritePlace() {
        List<Place> favoritePlaceEntities = placeRepository.findFavoritePlaces();

        if (Objects.isNull(favoritePlaceEntities)) {
            return null;
        }

        return favoritePlaceEntities.stream().map(rawPlaceMapper::toPlaceDto).toList();

    }
}
