package com.thaitour.thaitourapi.domain.dao;

import com.thaitour.thaitourapi.application.helper.SortHelper;
import com.thaitour.thaitourapi.domain.dao.mapper.RawPlaceParameterDataMapper;
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
    private static final String SQL_FILTER_PARAMETER_BASE = """ 
                    from parameter p
                    left join parameter_value pv on p.id = pv.parameter_id
                    where p.assign_type = 'PLACE' and p.filter = true
                    group by p.id, p.name;
            """;

    private static final String SQL_FILTER_PARAMETER = """ 
                   select p.id as id,
                   p.name as name,
                   (select distinct case when count(pv.id) = 0 then null else string_agg(concat(pv.id, '_', pv.name), ';') end
                    from parameter p1) as parameterValue
            """
            + SQL_FILTER_PARAMETER_BASE;

    public List<RawPlaceParameter> findAll() {
        Map<String, Object> params = new HashMap<>();


        return namedParameterJdbcTemplate.query(
                SQL_FILTER_PARAMETER,
                params,
                new RawPlaceParameterDataMapper()
        );
    }




}
