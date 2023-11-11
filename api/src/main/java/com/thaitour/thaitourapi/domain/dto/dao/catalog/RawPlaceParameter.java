package com.thaitour.thaitourapi.domain.dto.dao.catalog;

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
public class RawPlaceParameter {
    private UUID id;
    private String name;
    private List<RawPlaceParameterValue> parameterValueList;
    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class RawPlaceParameterValue {
        private UUID id;
        private String name;
    }
}
