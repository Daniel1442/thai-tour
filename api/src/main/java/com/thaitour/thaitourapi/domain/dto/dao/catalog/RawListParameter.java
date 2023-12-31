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
public class RawListParameter {
    private UUID id;
    private String name;
    private String icon;
}
