package com.thaitour.thaitourapi.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum AccommodationType {
    HOTEL("HOTEL"),
    APARTMENTS("APARTMENTS"),
    VILLA("VILLA"),
    HOUSE("HOUSE");

    @Getter
    private final String type;
}
