package com.thaitour.thaitourapi.domain.exception;

import lombok.Data;
import lombok.EqualsAndHashCode;
@EqualsAndHashCode(callSuper = true)
@Data
public class ThaiTourException extends RuntimeException{

    private ExceptionLevel level;

    public enum ExceptionLevel {
        WARNING, ERROR
    }

    public ThaiTourException(String msg) {
        super(msg);
        this.level = ExceptionLevel.ERROR;
    }

    public ThaiTourException(String msg, Throwable throwable) {
        super(msg, throwable);
        this.level = ExceptionLevel.ERROR;
    }

    public ThaiTourException(String message, Object... params) {
        this(String.format(message.replaceAll("\\{\\}", "%s"), params));
    }

}
