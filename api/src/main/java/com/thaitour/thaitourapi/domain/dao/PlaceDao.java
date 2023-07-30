package com.thaitour.thaitourapi.domain.dao;

import com.thaitour.thaitourapi.application.helper.SortHelper;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlace;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class PlaceDao {
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private static final String SQL_FILTER_PLACE_BASE = " from public.place pla "
            + " where true = true %conditions% ";

    private static final String SQL_FILTER_PLACE = "select pla.id as id, "
            + "pla.name as name, "
            + "pla.image as image, "
            + "pla.review as review, "
            + "pla.accommodation_type as type, "
            + "pla.value as value, "
            + "pla.location as location, "
            + "pla.address as address, "
            + "pla.is_active as isActive, "
            + "pla.created_at as createdAt, "
            + "pla.updated_at as updatedAt, "
            + "pla.created_by as createdBy, "
            + "pla.updated_by as updatedBy "
            + SQL_FILTER_PLACE_BASE
            + " %sortColumns% ";
    private static final String SQL_FILTER_PLACE_COUNT = "select count(pla.id) "
            + SQL_FILTER_PLACE_BASE;

    private static final Set<String> ALLOWED_SORT_COLUMNS = Set.of("name", "isActive");


    public List<RawPlace> filter(PlaceFinderPayload payload, Pageable pageable) {
        Map<String, Object> params = new HashMap<>();
        params.put("limit", pageable.getPageSize());
        params.put("offset", pageable.getPageSize() * pageable.getPageNumber());

        return namedParameterJdbcTemplate.query(
                generateCondition(
                        SortHelper.getSort(SQL_FILTER_PLACE, ALLOWED_SORT_COLUMNS, pageable),
                        params,
                        payload
                ),
                params,
                new BeanPropertyRowMapper<>(RawPlace.class)
        );
    }
    public Integer filterCount(PlaceFinderPayload payload) {
        Map<String, Object> params = new HashMap<>();

        return namedParameterJdbcTemplate.queryForObject(
                generateCondition(SQL_FILTER_PLACE_COUNT, params, payload),
                params,
                Integer.class
        );
    }

    private String generateCondition(String sql, Map<String, Object> params, PlaceFinderPayload payload) {
        String query = "";

        if (payload.getType() != null) {
            params.put("type", payload.getType().toString());
            query += " and pla.accommodation_type = :type ";
        }

        if (payload.getLocation() != null && !payload.getLocation().isBlank()) {
            params.put("location", payload.getLocation());
            query += " and pla.location = :location ";
        }

        return sql.replace("%conditions%", query);

    }
}
