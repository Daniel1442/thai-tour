package com.thaitour.thaitourapi.domain.dto.account;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterPayload {
    private String surname;
    private String lastname;
    private String email;
    private String password;

}
