package com.thaitour.thaitourapi.domain.dto.catalog.trip;

import com.thaitour.thaitourapi.domain.enums.AccommodationType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TripRow {
    private UUID id;
    private String image;
    private String name;
    private String location;
    private Integer capacity;
    private Float price;
    private String length;
    private String food;
    private String tripLocation;
    private String tripType;
    private String guide;
    private String included;
    private String reviews;
    private Boolean isActive;
}
