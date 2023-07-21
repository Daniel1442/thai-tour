package com.thaitour.thaitourapi.application.builder;

import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail.PlaceContent;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail.PlaceImageList;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail.PlaceParameters;
import com.thaitour.thaitourapi.domain.entity.Place;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@RequiredArgsConstructor
@Service
public class PlaceDetailBuilder {

    private final PlaceRepository placeRepository;

    //    private final PlaceRepository parameterRepository;
    public PlaceDetail build(UUID placeId) {

        Place place = placeRepository.findById(placeId).orElseThrow(() -> new ThaiTourException("This place doesn't exist."));

        return PlaceDetail.builder()
                .id(placeId)
                .image(place.getImage())
                .name(place.getName())
                .placeImageListList(place.getImages().stream()
                        .map(placeImage -> PlaceImageList.builder()
                                .id(placeImage.getId())
                                .target(placeImage.getTarget())
                                .priority(placeImage.getPriority())
                                .isActive(placeImage.getIsActive()
                                ).build()).toList())
                .placeContentsList(place.getContents().stream()
                        .map(placeContent -> PlaceContent.builder()
                                .id(placeContent.getId())
                                .value(placeContent.getValue())
                                .type(placeContent.getContentType())
                                .isActive(placeContent.getIsActive()
                                ).build()).toList())
                .location(place.getLocation())
                .address(place.getAddress())
                .review(place.getReview())
                .isActive(place.getIsActive())
                .type(place.getAccommodationType())
                .value(place.getValue())
                .createdBy(place.getCreatedBy())
                .createdAt(place.getCreatedAt())
                .updatedBy(place.getUpdatedBy())
                .updatedAt(place.getCreatedAt())
                .build();
    }

}
