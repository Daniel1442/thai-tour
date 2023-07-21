package com.thaitour.thaitourapi.domain.dao;

import com.thaitour.thaitourapi.application.helper.SortHelper;
import com.thaitour.thaitourapi.domain.dto.catalog.parameter.PlaceParameterRow;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlace;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlaceParameter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ParameterDao {
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private static final String SQL_FILTER_PARAMETER_BASE = "from thai_tour.place_parameter plp "
            + "join thai_tour.place pla on plp.place_id = pla.id "
            + "join thai_tour.parameter par on plp.parameter_id = par.id "
            + "where true = true %conditions% ";

    private static final String SQL_FILTER_PARAMETER = "select par.id as id, "
            + "par.name as name, "
            + "par.tooltip as tooltip "
            + SQL_FILTER_PARAMETER_BASE;

    public List<RawPlaceParameter> filter(UUID placeId) {
        Map<String, Object> params = new HashMap<>();


        return namedParameterJdbcTemplate.query(
                generateCondition(
                        SQL_FILTER_PARAMETER,
                        params,
                        placeId
                ),
                params,
                new BeanPropertyRowMapper<>(RawPlaceParameter.class)
        );
    }

    private String generateCondition(String sql, Map<String, Object> params, UUID placeId) {
        String query = "";

        if (placeId != null) {
            params.put("placeId",placeId);
            query += " and plp.place_id = :placeId ";
        }
        return sql.replace("%conditions%", query);

    }


}
