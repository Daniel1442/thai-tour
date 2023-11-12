package com.thaitour.thaitourapi.controller.catalog.place;

import com.thaitour.thaitourapi.application.builder.PlaceDetailBuilder;
import com.thaitour.thaitourapi.application.finder.PlaceFinder;
import com.thaitour.thaitourapi.application.helper.FlashMessageHelper;
import com.thaitour.thaitourapi.domain.dto.FlashMessage;
import com.thaitour.thaitourapi.domain.dto.Response;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/catalog/place")
public class PlaceController {

    private final PlaceFinder placeFinder;
    private final PlaceDetailBuilder placeDetailBuilder;

    @PostMapping("/finder")
    public Response<List<PlaceDetail>> getPlaceList(
            @RequestBody PlaceFinderPayload payload
    ) {
        try {
            return new Response<>(true, placeFinder.findFilterPlace(payload), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
        }

        List<FlashMessage> errors = FlashMessageHelper.getMessages();

        return new Response<>(errors.isEmpty(), null, errors);
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
