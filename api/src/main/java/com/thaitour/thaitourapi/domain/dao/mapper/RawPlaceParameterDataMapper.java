package com.thaitour.thaitourapi.domain.dao.mapper;

import com.sun.istack.NotNull;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawParameter;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawParameter.RawParameterValue;
import org.springframework.jdbc.core.BeanPropertyRowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public class RawPlaceParameterDataMapper extends BeanPropertyRowMapper<RawParameter> {

    public RawParameter mapRow(@NotNull ResultSet rs, int row) throws SQLException {
        return RawParameter.builder()
                .id(rs.getObject("id", UUID.class))
                .name(rs.getString("name"))
                .parameterValueList(mapParameterList(rs.getString("parameterValue")))
                .build();
    }

    private List<RawParameterValue> mapParameterList(String parameterList) {
        if (parameterList == null) {
            return new ArrayList<>();
        }

        return Arrays.stream(parameterList.split(";")).toList().stream().map(pL -> {
            String[] value = pL.split("_");
            return new RawParameterValue(UUID.fromString(value[0]), value[1]);
        }).sorted(Comparator.comparing(RawParameterValue::getName)).toList();
    }

}
