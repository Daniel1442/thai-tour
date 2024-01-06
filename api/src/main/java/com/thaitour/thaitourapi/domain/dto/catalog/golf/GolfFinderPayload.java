package com.thaitour.thaitourapi.domain.dto.catalog.golf;

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
public class GolfFinderPayload {

    List<UUID> parameterValuesList;

}
