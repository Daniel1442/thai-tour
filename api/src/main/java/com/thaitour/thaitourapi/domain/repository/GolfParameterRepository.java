package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.entity.GolfParameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface GolfParameterRepository extends JpaRepository<GolfParameter, UUID> {
    @Query(
            value = "select gp.golf.id from GolfParameter gp where gp.parameterValue.id = :parameterValueId"
    )
    List<UUID> findGolfsId(UUID parameterValueId);
}
