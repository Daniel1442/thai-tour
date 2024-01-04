package com.thaitour.thaitourapi.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
@AllArgsConstructor
public enum GolfContentType {
    DESCRIPTION("DESCRIPTION"),
    PRICE_INFO("PRICE_INFO");

    @Getter
    private final String type;
}
