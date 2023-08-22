package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.mapper.RawArticleMapper;
import com.thaitour.thaitourapi.domain.dao.ArticleDao;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleRow;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawArticle;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawPlace;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ArticleFinder {

    private final ArticleDao articleDao;
    private final RawArticleMapper rawArticleMapper;

    @Transactional(readOnly = true)
    public Page<ArticleRow> findArticle(
            ArticleFinderPayload payload,
            Pageable pageable
    ) throws ThaiTourException {
        List<RawArticle> entries = articleDao.filter(payload, pageable);
        return new PageImpl<>(
                entries.stream()
                        .map(rawArticleMapper::toArticleRow)
                        .toList(),
                pageable,
                articleDao.filterCount(payload)
        );
    }

}
