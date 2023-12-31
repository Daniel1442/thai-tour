package com.thaitour.thaitourapi.application.helper;

import com.thaitour.thaitourapi.domain.dto.FlashMessage;
import com.thaitour.thaitourapi.domain.enums.FlashMessageTypeEnum;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
public class FlashMessageHelper {

    private static ThreadLocal<List<FlashMessage>> flashMessages;
    private static ThreadLocal<Map<String, List<FlashMessage>>> categorizedMessages;

    public static List<FlashMessage> getMessages() {
        initContext();
        List<FlashMessage> ret = flashMessages.get();
        flashMessages.set(new ArrayList<>());
        return ret;
    }

    public static void addMessage(FlashMessage msg) {
        initContext();
        flashMessages.get().add(msg);
    }

    private static void initContext() {
        log.trace("ThreadLoad flashMessages: {}", flashMessages);

        if (flashMessages == null) {
            flashMessages = new ThreadLocal<>();
            List<FlashMessage> list = new ArrayList<>();
            flashMessages.set(list);
        }

        if (flashMessages.get() == null) {
            List<FlashMessage> list = new ArrayList<>();
            flashMessages.set(list);
        }

        if (categorizedMessages == null) {
            categorizedMessages = new ThreadLocal<>();
            Map<String, List<FlashMessage>> map = new HashMap<>();
            categorizedMessages.set(map);
        }

        if (categorizedMessages.get() == null) {
            Map<String, List<FlashMessage>> map = new HashMap<>();
            categorizedMessages.set(map);
        }

        log.trace("ThreadLoad flashMessages.list: {}", flashMessages.get());
    }

    public static FlashMessage fromException(ThaiTourException e) {
        return new FlashMessage(e.getMessage(), FlashMessageTypeEnum.ERROR);
    }

    public static FlashMessage fromString(String value) {
        return new FlashMessage(value, FlashMessageTypeEnum.ERROR);
    }
}
