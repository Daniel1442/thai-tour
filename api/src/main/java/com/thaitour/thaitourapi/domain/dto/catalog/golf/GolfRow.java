package com.thaitour.thaitourapi.domain.dto.catalog.golf;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GolfRow {
    private UUID id;
    private String name;
    private String description;
    private String price;
}
