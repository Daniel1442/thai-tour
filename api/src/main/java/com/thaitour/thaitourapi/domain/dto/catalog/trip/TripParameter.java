package com.thaitour.thaitourapi.domain.dto.catalog.trip;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TripParameter {

    private UUID parameterValueId;
    private String name;
    private String icon;

}
