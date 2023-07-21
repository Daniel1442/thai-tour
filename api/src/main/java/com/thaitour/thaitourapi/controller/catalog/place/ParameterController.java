package com.thaitour.thaitourapi.controller.catalog.place;

import com.thaitour.thaitourapi.application.builder.PlaceDetailBuilder;
import com.thaitour.thaitourapi.application.finder.PlaceFinder;
import com.thaitour.thaitourapi.application.helper.FlashMessageHelper;
import com.thaitour.thaitourapi.domain.dto.Response;
import com.thaitour.thaitourapi.domain.dto.catalog.parameter.PlaceParameterRow;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/catalog/parameters")
public class ParameterController {

    private final PlaceFinder placeFinder;

    @GetMapping("/{placeId}")
    public Response<List<PlaceParameterRow>> getPlaceParameters(@PathVariable UUID placeId) {
        try {
            return new Response<>(true, placeFinder.findPlaceParameter(placeId), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
            return new Response<>(false, null, FlashMessageHelper.getMessages());
        }
    }
}
