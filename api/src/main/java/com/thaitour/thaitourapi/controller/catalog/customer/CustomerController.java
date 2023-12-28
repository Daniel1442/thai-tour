package com.thaitour.thaitourapi.controller.catalog.customer;

import com.thaitour.thaitourapi.application.helper.FlashMessageHelper;
import com.thaitour.thaitourapi.application.service.CustomerService;
import com.thaitour.thaitourapi.application.service.EmailSenderService;
import com.thaitour.thaitourapi.domain.dto.FlashMessage;
import com.thaitour.thaitourapi.domain.dto.Response;
import com.thaitour.thaitourapi.domain.dto.account.LoginPayload;
import com.thaitour.thaitourapi.domain.dto.account.LoginResponse;
import com.thaitour.thaitourapi.domain.dto.account.RegisterPayload;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/customer")
public class CustomerController {

    private final CustomerService customerService;


    @PostMapping("/login")
    public Response<LoginResponse> loginUser(
            @RequestBody LoginPayload payload
    ) {
        try {
            return new Response<>(true,
                    customerService.login(payload)
                    , null);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
            return new Response<>(false, null, FlashMessageHelper.getMessages());
        }
    }


    @PostMapping("/register")
    public Response<Void> registerUser(
            @RequestBody RegisterPayload payload
    ) {
        try {
            customerService.registration(payload);
        } catch (ThaiTourException e) {
            FlashMessageHelper.addMessage(FlashMessageHelper.fromException(e));
        }

        List<FlashMessage> errors = FlashMessageHelper.getMessages();

        return new Response<>(errors.isEmpty(), null, errors);
    }


}
