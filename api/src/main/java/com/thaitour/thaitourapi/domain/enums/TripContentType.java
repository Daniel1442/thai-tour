package com.thaitour.thaitourapi.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum TripContentType {
    DESCRIPTION("DESCRIPTION"),
    IMPORTANT_INFO("IMPORTANT_INFO"),
    NOTE("NOTE");

    @Getter
    private final String type;
}
