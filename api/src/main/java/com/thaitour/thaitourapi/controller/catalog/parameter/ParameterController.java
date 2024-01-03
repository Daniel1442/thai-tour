package com.thaitour.thaitourapi.controller.catalog.parameter;

import com.thaitour.thaitourapi.application.finder.ParameterFinder;
import com.thaitour.thaitourapi.application.helper.FlashMessageHelper;
import com.thaitour.thaitourapi.domain.dto.Response;
import com.thaitour.thaitourapi.domain.dto.catalog.parameter.ParameterRow;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/catalog/parameters")
public class ParameterController {

    private final ParameterFinder parameterFinder;

    @GetMapping("/place/list")
    public Response<List<ParameterRow>> getPlaceParameters() {
        try {
            return new Response<>(true, parameterFinder.findAllPlaceParameters(), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
            return new Response<>(false, null, FlashMessageHelper.getMessages());
        }
    }


    @GetMapping("/trip/list")
    public Response<List<ParameterRow>> getTripParameters() {
        try {
            return new Response<>(true, parameterFinder.findAllTripParameters(), null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
            return new Response<>(false, null, FlashMessageHelper.getMessages());
        }
    }
}
