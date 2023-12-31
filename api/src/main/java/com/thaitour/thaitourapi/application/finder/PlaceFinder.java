package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.builder.PlaceDetailBuilder;
import com.thaitour.thaitourapi.application.mapper.RawPlaceMapper;
import com.thaitour.thaitourapi.domain.dto.catalog.customer.CustomerFavoriteDto;
import com.thaitour.thaitourapi.domain.dto.catalog.place.*;
import com.thaitour.thaitourapi.domain.entity.CustomerFavorite;
import com.thaitour.thaitourapi.domain.entity.Place;
import com.thaitour.thaitourapi.domain.repository.CustomerFavoriteRepository;
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
    private final CustomerFavoriteRepository customerFavoriteRepository;
    private final PlaceParameterRepository placeParameterRepository;


    @Transactional(readOnly = true)
    public List<PlaceDetail> findFilterPlace(PlaceFinderPayload payload) {
        List<UUID> placeIds = new ArrayList<>();
        List<PlaceDetail> places = new ArrayList<PlaceDetail>();

        if (payload.getParameterValuesList() != null && !payload.getParameterValuesList().isEmpty()) {
            for (int i = 0; i < payload.getParameterValuesList().size(); i++) {
                List<UUID> list = placeParameterRepository.findPlaceId(payload.getParameterValuesList().get(i));
                if (list != null) {
                    placeIds.addAll(list);
                }
            }
        } else if (payload.getParameterValuesList().size() == 0) {
            placeIds = placeRepository.findAll().stream().map(Place::getId).collect(Collectors.toList());
        }

        Set<UUID> set = new HashSet<>(placeIds);
        placeIds.clear();
        placeIds.addAll(set);

        for (UUID placeId : placeIds) {
            detailBuilder.build(placeId);
            places.add(detailBuilder.build(placeId));
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


    @Transactional(readOnly = true)
    public List<PlaceRow> findCustomerFavoritePlace(FavoritePlaceFinderPayload payload) {
        List<Place> favoritePlaceEntities = placeRepository.findCustomerFavoritePlaces(payload.getCustomerId(), payload.getType());

        if (Objects.isNull(favoritePlaceEntities)) {
            return null;
        }

        return favoritePlaceEntities.stream().map(rawPlaceMapper::toPlaceDto).toList();

    }

    @Transactional(readOnly = true)
    public CustomerFavoriteDto findCustomerFavoritePlace(FavoritePlacePayload payload) {
        CustomerFavorite favoritePlaceEntities = customerFavoriteRepository.findOneByResourceIdAndCustomerIdAndType(payload.getResourceId(), payload.getCustomerId(), payload.getType());

        if (Objects.isNull(favoritePlaceEntities)) {
            return null;
        }

        return  rawPlaceMapper.toCustomerFavoriteDto(favoritePlaceEntities);

    }
}
