package com.thaitour.thaitourapi.domain.dto.catalog.place;

import com.thaitour.thaitourapi.domain.dto.catalog.room.RoomRow;
import com.thaitour.thaitourapi.domain.enums.AccommodationType;
import com.thaitour.thaitourapi.domain.enums.PlaceContentType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlaceDetail {
    private UUID id;
    private String name;
    private String image;
    private String location;
    private AccommodationType type;
    private String address;
    private String value;
    private Integer review;
    private Boolean isActive;
    private LocalDateTime updatedAt;
    private String updatedBy;
    private LocalDateTime createdAt;
    private String createdBy;
    private List<PlaceImageList> placeImageListList;
    private List<PlaceContent> placeContentsList;
    private List<PlaceParameters> placeParameterList;
    private List<RoomRow> rooms;

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PlaceImageList {
        private String original;
        private String thumbnail;
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PlaceContent {
        private Boolean isActive;
        private PlaceContentType type;
        private String value;
        private UUID id;

    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PlaceParameters {
        private String name;
        private String icon;
        private Boolean showOnDetail;
        private String tooltip;
        private UUID id;
    }
}
