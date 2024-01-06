package com.thaitour.thaitourapi.controller.catalog.golf;

import com.thaitour.thaitourapi.application.builder.GolfDetailBuilder;
import com.thaitour.thaitourapi.application.finder.GolfFinder;
import com.thaitour.thaitourapi.application.helper.FlashMessageHelper;
import com.thaitour.thaitourapi.domain.dto.FlashMessage;
import com.thaitour.thaitourapi.domain.dto.Response;
import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfRow;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceFinderPayload;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/catalog/golf")
public class GolfController {
    private final GolfDetailBuilder golfDetailBuilder;
    private final GolfFinder golfFinder;

    @PostMapping("/finder")
    public Response<List<GolfDetail>> getPlaceList(
            @RequestBody GolfFinderPayload payload
    ) {
        try {
            return new Response<>(true, golfFinder.findFilterGolf(payload), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
        }

        List<FlashMessage> errors = FlashMessageHelper.getMessages();

        return new Response<>(errors.isEmpty(), null, errors);
    }

    @GetMapping("/{golfId}")
    public Response<GolfDetail> getPlaceDetail(@PathVariable UUID golfId) {
        try {
            return new Response<>(true,
                    golfDetailBuilder.build(golfId)
                    , null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
            return new Response<>(false, null, FlashMessageHelper.getMessages());
        }
    }
}
