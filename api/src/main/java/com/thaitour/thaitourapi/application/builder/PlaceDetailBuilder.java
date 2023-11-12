package com.thaitour.thaitourapi.application.builder;

import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail.PlaceContent;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail.PlaceImageList;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail.PlaceParameters;
import com.thaitour.thaitourapi.domain.dto.catalog.room.RoomRow;
import com.thaitour.thaitourapi.domain.entity.Place;
import com.thaitour.thaitourapi.domain.entity.Room;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@RequiredArgsConstructor
@Service
public class PlaceDetailBuilder {

    private final PlaceRepository placeRepository;
    public PlaceDetail build(UUID placeId) {

        Place place = placeRepository.findById(placeId).orElseThrow(() -> new ThaiTourException("This place doesn't exist."));

        return PlaceDetail.builder()
                .id(placeId)
                .image(place.getImage())
                .name(place.getName())
                .placeImageListList(place.getImages().stream()
                        .map(placeImage -> PlaceImageList.builder()
                                .original(placeImage.getTarget())
                                .thumbnail(placeImage.getTarget())
                                .build()).toList())
                .placeContentsList(place.getContents().stream()
                        .map(placeContent -> PlaceContent.builder()
                                .id(placeContent.getId())
                                .value(placeContent.getValue())
                                .type(placeContent.getContentType())
                                .isActive(placeContent.getIsActive()
                                ).build()).toList())
                .placeParameterList(place.getParameters().stream()
                        .map(placeParameters -> PlaceParameters.builder()
                                .id(placeParameters.getId())
                                .icon(placeParameters.getParameterValue().getIcon())
                                .name(placeParameters.getParameterValue().getName())
                                .tooltip(placeParameters.getParameterValue().getTooltip())
                                .showOnDetail(placeParameters.getParameterValue().getShowOnDetail())
                                .build()).toList())
                .rooms(place.getRooms().stream()
                        .map(placeRooms -> RoomRow.builder()
                                .id(placeRooms.getId())
                                .name(placeRooms.getName())
                                .area(placeRooms.getArea())
                                .bed(placeRooms.getBed())
                                .capacity(placeRooms.getCapacity())
                                .price(placeRooms.getPrice())
                                .roomParameters(placeRooms.getParameters().stream()
                                        .map(roomParameter -> RoomRow.RoomParameters.builder()
                                                .id(roomParameter.getId())
                                                .name(roomParameter.getParameterValue().getName())
                                                .icon(roomParameter.getParameterValue().getIcon())
                                                .tooltip(roomParameter.getParameterValue().getTooltip())
                                                .build()).toList()).build()
                        ).toList())
                .location(place.getLocation())
                .address(place.getAddress())
                .review(place.getReview())
                .isActive(place.getIsActive())
                .type(place.getAccommodationType())
                .createdBy(place.getCreatedBy())
                .createdAt(place.getCreatedAt())
                .updatedBy(place.getUpdatedBy())
                .updatedAt(place.getCreatedAt())
                .build();
    }

}
