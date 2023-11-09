package com.thaitour.thaitourapi.controller.catalog.trip;

import com.thaitour.thaitourapi.application.builder.TripDetailBuilder;
import com.thaitour.thaitourapi.application.helper.FlashMessageHelper;
import com.thaitour.thaitourapi.domain.dto.Response;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripDetail;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/catalog/trip")
public class TripController  {

    private final TripDetailBuilder tripDetailBuilder;

    @GetMapping("/{tripId}")
    public Response<TripDetail> getPlaceDetail(@PathVariable UUID tripId) {
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
