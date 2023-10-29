package com.thaitour.thaitourapi.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum TripContentType {
    LONG_DESCRIPTION("LONG_DESCRIPTION"),
    IMPORTANT_INFO("IMPORTANT_INFO");

    @Getter
    private final String type;
}
