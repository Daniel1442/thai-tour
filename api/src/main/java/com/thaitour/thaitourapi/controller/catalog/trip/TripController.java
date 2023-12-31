package com.thaitour.thaitourapi.controller.catalog.trip;

import com.thaitour.thaitourapi.application.builder.TripDetailBuilder;
import com.thaitour.thaitourapi.application.finder.TripFinder;
import com.thaitour.thaitourapi.application.helper.FlashMessageHelper;
import com.thaitour.thaitourapi.domain.dto.FlashMessage;
import com.thaitour.thaitourapi.domain.dto.Response;
import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.ListParameter;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripRow;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/catalog/trip")
public class TripController  {

    private final TripDetailBuilder tripDetailBuilder;
    private final TripFinder tripFinder;

    @PostMapping("/finder")
    public Response<List<TripDetail>> getPlaceList(
            @RequestBody TripFinderPayload payload
    ) {
        try {
            return new Response<>(true, tripFinder.findFilterTrips(payload), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
        }

        List<FlashMessage> errors = FlashMessageHelper.getMessages();

        return new Response<>(errors.isEmpty(), null, errors);
    }

    @GetMapping("/{tripId}")
    public Response<TripDetail> getTripDetail(@PathVariable UUID tripId) {
        try {
            return new Response<>(true,
                    tripDetailBuilder.build(tripId)
                    , null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
            return new Response<>(false, null, FlashMessageHelper.getMessages());
        }
    }
}
