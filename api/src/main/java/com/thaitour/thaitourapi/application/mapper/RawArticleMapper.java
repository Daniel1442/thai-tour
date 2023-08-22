package com.thaitour.thaitourapi.application.mapper;

import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleRow;
import com.thaitour.thaitourapi.domain.dto.dao.catalog.RawArticle;
import org.mapstruct.Mapper;

@Mapper

public interface RawArticleMapper {

    ArticleRow toArticleRow(RawArticle rawArticle);
}
