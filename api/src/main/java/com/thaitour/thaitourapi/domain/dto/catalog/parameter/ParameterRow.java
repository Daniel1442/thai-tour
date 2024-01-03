package com.thaitour.thaitourapi.domain.dto.catalog.parameter;

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
public class ParameterRow {

    private UUID id;
    private String name;
    private List<ParameterValue> parameterValueList;
    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ParameterValue {
        private UUID id;
        private String name;
    }
}
