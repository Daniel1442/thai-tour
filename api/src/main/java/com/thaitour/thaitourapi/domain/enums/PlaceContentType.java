package com.thaitour.thaitourapi.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
@AllArgsConstructor
public enum PlaceContentType {
    LOCATION("LOCATION"),
    EQUIPMENT("EQUIPMENT"),
    ACCOMMODATION("ACCOMMODATION"),
    FOOD("FOOD");

    @Getter
    private final String type;
}
