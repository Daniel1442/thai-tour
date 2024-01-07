package com.thaitour.thaitourapi.application.builder;

import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripDetail.TripContent;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripDetail.TripImageList;
import com.thaitour.thaitourapi.domain.entity.Trip;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.UUID;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TripDetailBuilder {
    private final TripRepository tripRepository;
    public TripDetail build(UUID tripId) {

        Trip trip = tripRepository.findById(tripId).orElseThrow(() -> new ThaiTourException("This trip doesn't exist."));

        return TripDetail.builder()
                .id(tripId)
                .image(trip.getImage())
                .name(trip.getName())
                .tripImageListList(trip.getImages().stream()
                        .map(tripImage -> TripImageList.builder()
                                .original(tripImage.getTarget())
                                .thumbnail(tripImage.getTarget())
                                .build()).toList())
                .tripContentsList(trip.getContents().stream()
                        .map(tripContent -> TripContent.builder()
                                .id(tripContent.getId())
                                .value(tripContent.getValue())
                                .type(tripContent.getContentType())
                                .isActive(tripContent.getIsActive()
                                ).build()).toList())
                .guide(trip.getGuide())
                .location(trip.getLocation())
                .capacity(trip.getCapacity())
                .price(trip.getPrice())
                .length(trip.getLength())
                .food(trip.getFood())
                .tripType(trip.getTripType())
                .tripStart(trip.getTripStart())
                .tripRepetitions(trip.getTripRepetition())
                .tripLocation(trip.getGuide())
                .included(trip.getGuide())
                .reviews(trip.getGuide())
                .isActive(trip.getIsActive())
                .createdBy(trip.getCreatedBy())
                .createdAt(trip.getCreatedAt())
                .updatedBy(trip.getUpdatedBy())
                .updatedAt(trip.getCreatedAt())
                .build();
    }
}
