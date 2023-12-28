package com.thaitour.thaitourapi.domain.dto.catalog.customer;
import com.thaitour.thaitourapi.domain.enums.CustomerFavoriteType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.UUID;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerFavoriteDto {

    private UUID customerId;
    private UUID resourceId;
    private Boolean isActive;
    private CustomerFavoriteType type;
    private LocalDateTime createdAt;
    private String createdBy;


}
