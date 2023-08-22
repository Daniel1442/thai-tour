package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ArticleRepository extends JpaRepository<Article, UUID> {

}
