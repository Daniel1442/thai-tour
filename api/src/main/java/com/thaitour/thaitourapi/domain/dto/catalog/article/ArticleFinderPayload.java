package com.thaitour.thaitourapi.domain.dto.catalog.article;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArticleFinderPayload {
    private UUID tagId;
}
