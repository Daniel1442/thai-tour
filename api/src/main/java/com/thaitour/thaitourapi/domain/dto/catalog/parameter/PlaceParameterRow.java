package com.thaitour.thaitourapi.domain.dto.catalog.parameter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PlaceParameterRow {
    private UUID id;
    private String name;
    private String tooltip;
}
