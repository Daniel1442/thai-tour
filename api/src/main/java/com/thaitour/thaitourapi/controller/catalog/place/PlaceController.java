package com.thaitour.thaitourapi.controller.catalog.place;

import com.thaitour.thaitourapi.application.builder.PlaceDetailBuilder;
import com.thaitour.thaitourapi.application.finder.PlaceFinder;
import com.thaitour.thaitourapi.application.helper.FlashMessageHelper;
import com.thaitour.thaitourapi.domain.dto.FlashMessage;
import com.thaitour.thaitourapi.domain.dto.Response;
import com.thaitour.thaitourapi.domain.dto.catalog.parameter.PlaceParameterRow;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
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
@RequestMapping("/api/v1/catalog/place")
public class PlaceController {

    private final PlaceFinder placeFinder;
    private final PlaceDetailBuilder placeDetailBuilder;

    @PostMapping("/finder")
    public Response<Page<PlaceRow>> getPlaceList(
            @RequestBody PlaceFinderPayload payload,
            Pageable pageable
    ) {
        try {
            return new Response<>(true, placeFinder.findPlace(payload,pageable), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
        }

        List<FlashMessage> errors = FlashMessageHelper.getMessages();

        return new Response<>(errors.size() == 0, null, errors);
    }

    @GetMapping("/{placeId}")
    public Response<PlaceDetail> getPlaceDetail(@PathVariable UUID placeId) {
        try {
            return new Response<>(true,
                    placeDetailBuilder.build(placeId)
                    , null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
            return new Response<>(false, null, FlashMessageHelper.getMessages());
        }
    }

    @GetMapping("/favorite-places")
    public Response<List<PlaceRow>> getFavoritePlaces() {
        try {
            return new Response<>(true, placeFinder.findFavoritePlace(), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
            return new Response<>(false, null, FlashMessageHelper.getMessages());
        }
    }
}
