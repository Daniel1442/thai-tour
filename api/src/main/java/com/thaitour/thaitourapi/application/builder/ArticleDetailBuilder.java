package com.thaitour.thaitourapi.application.builder;

import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleDetail.ArticleDetailContent;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleDetail.ArticleDetailImages;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleDetail.ArticleDetailTag;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail;
import com.thaitour.thaitourapi.domain.entity.Article;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;
@RequiredArgsConstructor
@Service
public class ArticleDetailBuilder {

    private final ArticleRepository articleRepository;


    public ArticleDetail build(UUID articleId) {

        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new ThaiTourException("This article doesn't exist."));

        return ArticleDetail.builder()
                .id(articleId)
                .name(article.getName())
                .image(article.getImage())
                .isActive(article.getIsActive())
                .contents(article.getArticleContents().stream()
                        .map(articleContent -> ArticleDetailContent.builder()
                                .id(articleContent.getId())
                                .value(articleContent.getValue())
                                .articleHeading(articleContent.getArticleHeading())
                                .priority(articleContent.getPriority())
                                .articleId(articleId)
                                .build()
                        ).toList())
                .imageList(article.getArticleImages().stream()
                        .map(articleImage -> ArticleDetailImages.builder()
                                .id(articleImage.getId())
                                .value(articleImage.getValue())
                                .priority(articleImage.getPriority())
                                .articleId(articleId)
                                .build()
                        ).toList())
                .tags(article.getTags().stream()
                        .map(articleTag -> ArticleDetailTag.builder()
                                .id(articleTag.getId())
                                .name(articleTag.getName())
                                .isActive(articleTag.getIsActive())
                                .build()
                        ).toList())
                .build();
    }

}
