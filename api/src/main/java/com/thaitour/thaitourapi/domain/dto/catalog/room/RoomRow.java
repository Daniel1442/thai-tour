package com.thaitour.thaitourapi.domain.dto.catalog.room;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RoomRow {
    private UUID id;
    private String name;
    private String area;
    private String bed;
    private Integer capacity;
    private Float price;
    private List<RoomParameters> roomParameters;


    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class RoomParameters {
        private String name;
        private String icon;
        private String tooltip;
        private UUID id;
    }
}
