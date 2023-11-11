package com.thaitour.thaitourapi.domain.dto.catalog.parameter;

import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlaceParameter;
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
public class PlaceParameterRow {

    private UUID id;
    private String name;
    private List<PlaceParameterValue> parameterValueList;
    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PlaceParameterValue {
        private UUID id;
        private String name;
    }
}
