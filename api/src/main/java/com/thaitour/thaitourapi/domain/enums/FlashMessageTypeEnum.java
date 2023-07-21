package com.thaitour.thaitourapi.domain.enums;

import com.fasterxml.jackson.annotation.JsonValue;
public enum FlashMessageTypeEnum {
    INFO("info"),
    SPECIAL("special"),
    ERROR("error");

    final String value;

    FlashMessageTypeEnum(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}
