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
public class RawTripParameter {
    private UUID parameterValueId;
    private String name;
    private String icon;
}
