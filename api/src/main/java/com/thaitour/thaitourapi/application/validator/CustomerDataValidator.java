package com.thaitour.thaitourapi.application.validator;

import com.thaitour.thaitourapi.domain.dto.account.LoginPayload;
import com.thaitour.thaitourapi.domain.dto.account.RegisterPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.place.FavoritePlacePayload;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;

public class CustomerDataValidator {

    public static void validateRegistrationPayload(RegisterPayload payload) {

        if (payload.getEmail() == null || payload.getEmail().isEmpty()) {
            throw new ThaiTourException("Není vyplněný email! Prosím vyplnte. ");
        }

        if (payload.getPassword() == null || payload.getPassword().isEmpty()) {
            throw new ThaiTourException("Není vyplněný heslo! Prosím vyplnte. ");
        }

        if (payload.getSurname() == null || payload.getSurname().isEmpty()) {
            throw new ThaiTourException("Není vyplněný jméno! Prosím vyplnte. ");
        }

        if (payload.getLastname() == null || payload.getLastname().isEmpty()) {
            throw new ThaiTourException("Není vyplněný příjmení! Prosím vyplnte. ");
        }
    }

    public static void validateLoginPayload(LoginPayload payload) {
        if (payload.getEmail() == null || payload.getEmail().isEmpty()) {
            throw new ThaiTourException("Není vyplněný email! Prosím vyplnte. ");
        }

        if (payload.getPassword() == null || payload.getPassword().isEmpty()) {
            throw new ThaiTourException("Není vyplněný heslo! Prosím vyplnte. ");
        }
    }

    public static void validateToggleFavorite(FavoritePlacePayload payload) {
        if (payload.getResourceId() == null) {
            throw new ThaiTourException("Místo nenalezeno.");
        }

        if (payload.getCustomerId() == null) {
            throw new ThaiTourException("Uživatel nenalezen.");
        }
    }

}
