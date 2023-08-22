package com.thaitour.thaitourapi.domain.dto.catalog.article;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDetail {
    private UUID id;
    private String name;
    private String image;
    private boolean isActive;
    private LocalDateTime dateOfRelease;
    private List<ArticleDetailContent> contents;
    private List<ArticleDetailImages> imageList;
    private List<ArticleDetailTag> tags;
    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ArticleDetailContent {
        private String value;
        private String articleHeading;
        private Integer priority;
        private UUID id;
        private UUID articleId;


    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ArticleDetailImages {
        private String value;
        private Integer priority;
        private UUID id;
        private UUID articleId;

    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ArticleDetailTag {
        private UUID id;
        private String name;
        private Boolean isActive;

    }
}
