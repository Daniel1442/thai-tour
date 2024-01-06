package com.thaitour.thaitourapi.domain.dto.catalog.golf;

import com.thaitour.thaitourapi.domain.enums.GolfContentType;
import com.thaitour.thaitourapi.domain.enums.PlaceContentType;
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
public class GolfDetail {
    private UUID id;
    private String name;
    private String image;
    private String label;
    private Float price;
    private String location;
    private Float latitude;
    private Float longitude;
    private String yard;
    private String opened;
    private String holes;
    private String par;
    private String drivingRange;
    private String openingYear;
    private String yardDesigner;
    private List<GolfContentList> contents;
    private List<GolfImageList> images;
    private List<GolfPriceList> prices;
    private List<GolfParameterList> parameters;
    private Boolean isFavorite;
    private Boolean isActive;
    private LocalDateTime createdAt;
    private String createdBy;
    private LocalDateTime updatedAt;
    private String updatedBy;

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class GolfImageList {
        private String original;
        private String thumbnail;
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class GolfContentList {
        private Boolean isActive;
        private GolfContentType type;
        private Integer priority;
        private String value;
        private UUID id;

    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class GolfParameterList {
        private String name;
        private String icon;
        private Boolean showOnDetail;
        private String tooltip;
        private UUID id;
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class GolfPriceList {
        private String label;
        private Integer priority;
        private Float price;
        private String tooltip;
        private UUID id;
    }
}
