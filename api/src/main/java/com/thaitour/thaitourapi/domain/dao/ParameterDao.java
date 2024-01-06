package com.thaitour.thaitourapi.domain.dao;

import com.thaitour.thaitourapi.domain.dao.mapper.RawPlaceParameterDataMapper;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawListParameter;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawParameter;
import com.thaitour.thaitourapi.domain.enums.ParameterAssingType;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ParameterDao {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final String SQL_GET_ALL_PARAMS_FOR_LIST_BASE = "from parameter p "
            + "inner join public.trip_parameter tp on p.id = tp.parameter_id "
            + "left join public.parameter_value pv on p.id = pv.parameter_id ";

    private static final String SQL_GET_ALL_PARAMS_FOR_LIST = "select pv.id as id, "
    +  "pv.name as name, "
    +  "pv.icon as icon "
    + SQL_GET_ALL_PARAMS_FOR_LIST_BASE
    +  "group by pv.name, pv.id, pv.icon ";

    private static final String SQL_FILTER_PARAMETER_BASE = "from parameter p "
            + "left join parameter_value pv on p.id = pv.parameter_id "
            + "where true=true %conditions% ";

    private static final String SQL_FILTER_PARAMETER = "select p.id as id, "
            + "p.name as name, "
            + "(select distinct case when count(pv.id) = 0 then null else string_agg(concat(pv.id, '_', pv.name), ';') end from parameter p1) as parameterValue "
            + SQL_FILTER_PARAMETER_BASE
            + "group by p.id, p.name ";

    public List<RawParameter> findAllParametersForPlaces() {
        Map<String, Object> params = new HashMap<>();

        return namedParameterJdbcTemplate.query(
                generateCondition(
                        ParameterAssingType.PLACE, params
                ),
                params,
                new RawPlaceParameterDataMapper()
        );
    }

    public List<RawParameter> findAllParametersForTrip() {
        Map<String, Object> params = new HashMap<>();

        return namedParameterJdbcTemplate.query(
                generateCondition(
                        ParameterAssingType.TRIP, params
                ),
                params,
                new RawPlaceParameterDataMapper()
        );
    }

    public List<RawListParameter> findAllParameterForList() {
        Map<String, Object> params = new HashMap<>();

        return namedParameterJdbcTemplate.query(
                SQL_GET_ALL_PARAMS_FOR_LIST,
                params,
                new BeanPropertyRowMapper<>(RawListParameter.class)
        );
    }

    private String generateCondition(ParameterAssingType parameterAssingType,
            Map<String, Object> params) {
        String query = "";

        if (parameterAssingType != null) {
            params.put("parameterAssingType", parameterAssingType);
            query += " and p.assign_type = '"+parameterAssingType+"' and p.filter = true ";
        }

        return ParameterDao.SQL_FILTER_PARAMETER.replace("%conditions%", query);
    }

}