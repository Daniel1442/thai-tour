package com.thaitour.thaitourapi.controller.catalog.article;

import com.thaitour.thaitourapi.application.builder.ArticleDetailBuilder;
import com.thaitour.thaitourapi.application.finder.ArticleFinder;
import com.thaitour.thaitourapi.application.helper.FlashMessageHelper;
import com.thaitour.thaitourapi.domain.dto.FlashMessage;
import com.thaitour.thaitourapi.domain.dto.Response;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.article.ArticleRow;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/catalog/article")
public class ArticleController {

    private final ArticleDetailBuilder articleDetailBuilder;
    private final ArticleFinder articleFinder;

    @PostMapping("/finder")
    public Response<Page<ArticleRow>> getArticleList(
            @RequestBody ArticleFinderPayload payload,
            Pageable pageable
    ) {
        try {
            return new Response<>(true, articleFinder.findArticle(payload,pageable), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
        }

        List<FlashMessage> errors = FlashMessageHelper.getMessages();

        return new Response<>(errors.size() == 0, null, errors);
    }

    @GetMapping("/{articleId}")
    public Response<ArticleDetail> getArticleDetail(@PathVariable UUID articleId) {
        try {
            return new Response<>(true, articleDetailBuilder.build(articleId), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
            return new Response<>(false, null, FlashMessageHelper.getMessages());
        }
    }
}
