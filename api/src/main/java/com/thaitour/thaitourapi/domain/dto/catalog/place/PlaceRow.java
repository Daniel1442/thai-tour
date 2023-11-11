package com.thaitour.thaitourapi.domain.dto.catalog.place;

import com.thaitour.thaitourapi.domain.enums.AccommodationType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.UUID;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PlaceRow {
    private UUID id;
    private String name;
    private String image;
    private String location;
    private AccommodationType type;
    private String address;
    private Integer review;
    private Boolean isActive;
    private List<ParameterValues> parameterValuesList;

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ParameterValues {
        private String parameterName;
        private String icon;
        private Boolean showOnDetail;
        private String tooltip;
    }
}
