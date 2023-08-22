package com.thaitour.thaitourapi.domain.dao;

import com.thaitour.thaitourapi.application.helper.SortHelper;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleDetail.ArticleDetailTag;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawArticle;
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
public class ArticleDao {
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private static final String SQL_FILTER_PLACE_BASE = " from public.article tar "
            + " left join public.article_tag as atag ON atag.article_id = tar.id "
            + " where true = true %conditions% ";

    private static final String SQL_FILTER_PLACE = "select tar.id as id, "
            + "tar.name as name, "
            + "tar.image as image, "
            + "tar.is_active as isActive, "
            + "tar.date_of_release as dateOfRelease, "
            + "atag.tag_id as tagId "
            + SQL_FILTER_PLACE_BASE
            + " %sortColumns% ";
    private static final String SQL_FILTER_PLACE_COUNT = "select count(tar.id) "
            + SQL_FILTER_PLACE_BASE;

    private static final Set<String> ALLOWED_SORT_COLUMNS = Set.of("name");


    public List<RawArticle> filter(ArticleFinderPayload payload, Pageable pageable) {
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
                new BeanPropertyRowMapper<>(RawArticle.class)
        );
    }
    public Integer filterCount(ArticleFinderPayload payload) {
        Map<String, Object> params = new HashMap<>();

        return namedParameterJdbcTemplate.queryForObject(
                generateCondition(SQL_FILTER_PLACE_COUNT, params, payload),
                params,
                Integer.class
        );
    }

    private String generateCondition(String sql, Map<String, Object> params, ArticleFinderPayload payload) {
        String query = "";

        if (payload.getTagId() != null) {
            params.put("tagId", payload.getTagId());
            query += " and atag.tag_id = :tagId ";
        }
        return sql.replace("%conditions%", query);

    }
}
