package com.thaitour.thaitourapi.application.builder;

import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfDetail;
import com.thaitour.thaitourapi.domain.entity.Golf;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.GolfRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.UUID;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class GolfDetailBuilder {

    private final GolfRepository golfRepository;

    public GolfDetail build(UUID golfId){

        Golf golf = golfRepository.findById(golfId).orElseThrow(() -> new ThaiTourException("This golf field does not exist"));

        return GolfDetail.builder()
                .id(golfId)
                .name(golf.getName())
                .image(golf.getImage())
                .label(golf.getLabel())
                .price(golf.getPrice())
                .images(golf.getImages().stream().map(placeImage -> GolfDetail.GolfImageList.builder()
                        .original(placeImage.getTarget())
                        .thumbnail(placeImage.getTarget())
                        .build()).toList())
                .contents(golf.getContents().stream()
                        .map(golfContent -> GolfDetail.GolfContentList.builder()
                                .id(golfContent.getId())
                                .priority(golfContent.getPriority())
                                .value(golfContent.getValue())
                                .type(golfContent.getContentType())
                                .isActive(golfContent.getIsActive()
                                ).build()).sorted(Comparator.comparing(GolfDetail.GolfContentList::getPriority)).collect(Collectors.toList()))
                .prices(golf.getPrices().stream()
                        .map(golfPrices -> GolfDetail.GolfPriceList.builder()
                                .id(golfPrices.getId())
                                .label(golfPrices.getLabel())
                                .price(golfPrices.getPrice())
                                .priority(golfPrices.getPriority())
                                .build()).toList())
                .location(golf.getLocation())
                .latitude(golf.getLatitude())
                .longitude(golf.getLongitude())
                .yard(golf.getYard())
                .opened(golf.getOpened())
                .holes(golf.getHoles())
                .par(golf.getPar())
                .drivingRange(golf.getDrivingRange())
                .openingYear(golf.getOpeningYear())
                .yardDesigner(golf.getYardDesigner())
                .isFavorite(golf.getIsFavorite())
                .isActive(golf.getIsActive())
                .createdBy(golf.getCreatedBy())
                .createdAt(golf.getCreatedAt())
                .updatedBy(golf.getUpdatedBy())
                .updatedAt(golf.getCreatedAt())
                .build();
    }


}
