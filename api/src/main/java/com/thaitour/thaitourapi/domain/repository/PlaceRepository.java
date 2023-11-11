package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.dto.catalog.place.PlaceRow;
import com.thaitour.thaitourapi.domain.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface PlaceRepository extends JpaRepository<Place, UUID> {

    @Query(
            value = "select * from place pla order by pla.review desc limit 4 ;",
            nativeQuery = true
    )
    List<Place> findFavoritePlaces();

    @Query(
            value = "select pla.id as id, pla.name as name,pla.image as image, pla.location as location, pla.type as type, pla.address as address, pla.review as review, pla.is_active as isActive" +
                    "pv.name as parameterName, pv.icon as icon, pv.tooltip as tooltip, pv.show_on_detail as showOnDetail" +
                    "from place pla" +
                    "        left join public.place_parameter pp on pla.id = pp.place_id\n" +
                    "        left join public.parameter_value pv on pv.id = pp.parameter_value_id\n" +
                    "        where pp.parameter_value_id = :id",
            nativeQuery = true
    )

    PlaceRow filterPlaces(UUID id);
}
