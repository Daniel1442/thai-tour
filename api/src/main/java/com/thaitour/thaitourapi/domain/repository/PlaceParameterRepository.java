package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.entity.PlaceParameter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PlaceParameterRepository extends JpaRepository<PlaceParameter, UUID> {

}
