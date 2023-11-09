package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TripRepository extends JpaRepository<Trip, UUID> {
}
