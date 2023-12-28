package com.thaitour.thaitourapi.domain.dto.catalog.place;
import com.thaitour.thaitourapi.domain.enums.CustomerFavoriteType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.UUID;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FavoritePlaceFinderPayload {

    private UUID customerId;
    private CustomerFavoriteType type;

}
