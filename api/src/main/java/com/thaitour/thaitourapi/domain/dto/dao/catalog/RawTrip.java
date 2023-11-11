package com.thaitour.thaitourapi.domain.dto.dao.catalog;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RawTrip {
    private UUID id;
    private String name;
    private String image;
    private String location;
    private Float price;
    private Integer reviews;
    private Boolean isActive;
}
