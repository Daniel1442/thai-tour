package com.thaitour.thaitourapi.domain.dto.catalog.place;

import com.thaitour.thaitourapi.domain.enums.AccommodationType;
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
public class PlaceFinderPayload {
    List<UUID> parameterValuesList;
}
