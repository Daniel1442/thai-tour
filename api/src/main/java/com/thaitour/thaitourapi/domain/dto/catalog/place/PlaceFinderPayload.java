package com.thaitour.thaitourapi.domain.dto.catalog.place;

import com.thaitour.thaitourapi.domain.enums.AccommodationType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PlaceFinderPayload {

    private String location;
    private AccommodationType type;
}
