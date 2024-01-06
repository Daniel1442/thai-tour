package com.thaitour.thaitourapi.domain.dto.catalog.golf;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GolfParameter {
    private UUID id;
    private UUID golfId;
    private UUID parameterId;
    private UUID parameterValueId;
    private LocalDateTime createdAt;
    private String createdBy;
    private LocalDateTime updatedAt;
    private String updatedBy;
}
