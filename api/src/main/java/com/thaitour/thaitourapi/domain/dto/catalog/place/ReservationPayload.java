package com.thaitour.thaitourapi.domain.dto.catalog.place;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReservationPayload {
    private String sender;
    private String subject;
    private String text;
}
