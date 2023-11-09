package com.thaitour.thaitourapi.domain.dto.catalog.trip;


import com.thaitour.thaitourapi.domain.enums.TripContentType;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TripDetail {
    private UUID id;
    private String name;
    private String image;
    private String location;
    private Integer capacity;
    private Float price;
    private String length;
    private String food;
    private String included;
    private String tripLocation;
    private String tripType;
    private String guide;
    private String reviews;
    private Boolean isActive;
    private LocalDateTime updatedAt;
    private String updatedBy;
    private LocalDateTime createdAt;
    private String createdBy;
    private List<TripImageList> tripImageListList;
    private List<TripContent> tripContentsList;


    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class TripImageList {
        private String original;
        private String thumbnail;
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class TripContent {
        private Boolean isActive;
        private TripContentType type;
        private String value;
        private UUID id;
    }
}
