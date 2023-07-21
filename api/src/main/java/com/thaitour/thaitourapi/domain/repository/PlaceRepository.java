package com.thaitour.thaitourapi.domain.repository;

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
}
