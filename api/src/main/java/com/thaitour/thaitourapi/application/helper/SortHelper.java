package com.thaitour.thaitourapi.application.helper;

import org.springframework.data.domain.Pageable;

import java.util.Set;

public class SortHelper {

    private static final Set<String> ASC_DESC = Set.of("ASC", "DESC");

    public static String getSort(String query, Set<String> availableColumn, Pageable pageable) {

        if (pageable == null
                || pageable.getSort().isEmpty()
                || pageable.getSort().isUnsorted()) {

            return query.replace("%sortColumns%", "");
        }

        String[] split = pageable.getSort().toString().split(": ");

        if (split.length != 2
                || !availableColumn.contains(split[0])
                || !ASC_DESC.contains(split[1].toUpperCase())) {

            return query.replace("%sortColumns%", "");
        }

        String condition = String.format("order by %s",pageable.getSort().toString().replace(":", ""));

        return query.replace("%sortColumns%", condition);
    }

}

