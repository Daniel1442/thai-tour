package com.thaitour.thaitourapi.domain.dto.dao.catalog;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RawArticle {
    private UUID id;
    private UUID tagId;
    private String image;
    private String name;
    private Boolean isActive;
    private Date dateOfRelease;
}
