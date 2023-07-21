package com.thaitour.thaitourapi.domain.dto.dao.catalog;

import com.thaitour.thaitourapi.domain.enums.AccommodationType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RawPlace {

    private UUID id;
    private String name;
    private String image;
    private String location;
    private AccommodationType type;
    private String value;
    private String address;
    private Integer review;
    private Boolean isActive;
    private Date updatedAt;
    private String updatedBy;
    private Date createdAt;
    private String createdBy;
}
