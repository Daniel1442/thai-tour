package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.builder.TripDetailBuilder;
import com.thaitour.thaitourapi.application.builder.TripListBuilder;
import com.thaitour.thaitourapi.application.mapper.RawTripMapper;
import com.thaitour.thaitourapi.domain.dao.ParameterDao;
import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.trip.TripRow;
import com.thaitour.thaitourapi.domain.entity.Trip;
import com.thaitour.thaitourapi.domain.exception.ThaiTourException;
import com.thaitour.thaitourapi.domain.repository.TripParameterRepository;
import com.thaitour.thaitourapi.domain.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class TripFinder {

    private final RawTripMapper rawTripMapper;
    private final TripRepository tripRepository;
    private final TripListBuilder tripListBuilder;
    private final TripParameterRepository tripParameterRepository;


    @Transactional(readOnly = true)
    public List<TripDetail> findFilterTrips(TripFinderPayload payload) {
        List<UUID> tripIds = new ArrayList<>();
        List<TripDetail> trips = new ArrayList<TripDetail>();

        if (payload.getParameterValuesList() != null && !payload.getParameterValuesList().isEmpty()) {
            for (int i = 0; i < payload.getParameterValuesList().size(); i++) {
                List<UUID> list = tripParameterRepository.findTripsIds(payload.getParameterValuesList().get(i));
                if (list != null) {
                    tripIds.addAll(list);
                }
            }
        } else {
            tripIds = tripRepository.findAll().stream().map(Trip::getId).collect(Collectors.toList());
        }

        Set<UUID> set = new HashSet<>(tripIds);
        tripIds.clear();
        tripIds.addAll(set);

        for (UUID golfId : tripIds) {
            tripListBuilder.build(golfId);
            trips.add(tripListBuilder.build(golfId));
        }

        return trips;
    }
}
