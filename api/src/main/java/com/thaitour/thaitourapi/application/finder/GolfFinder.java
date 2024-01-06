package com.thaitour.thaitourapi.application.finder;

import com.thaitour.thaitourapi.application.builder.GolfDetailBuilder;
import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfDetail;
import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfFinderPayload;
import com.thaitour.thaitourapi.domain.dto.catalog.golf.GolfParameter;
import com.thaitour.thaitourapi.domain.entity.Golf;
import com.thaitour.thaitourapi.domain.repository.GolfParameterRepository;
import com.thaitour.thaitourapi.domain.repository.GolfRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class GolfFinder {

    private final GolfRepository golfRepository;
    private final GolfDetailBuilder golfDetailBuilder;
    private final GolfParameterRepository golfParameterRepository;

    @Transactional(readOnly = true)
    public List<GolfDetail> findFilterGolf(GolfFinderPayload payload) {
        List<UUID> golfIds = new ArrayList<>();
        List<GolfDetail> golfs = new ArrayList<GolfDetail>();

        if (payload.getParameterValuesList() != null && !payload.getParameterValuesList().isEmpty()) {
            for (int i = 0; i < payload.getParameterValuesList().size(); i++) {

            List<UUID> list = golfParameterRepository.findGolfsId(payload.getParameterValuesList().get(i)   );
            if (list != null) {
                golfIds.addAll(list);
            }
            }
        } else {
            golfIds = golfRepository.findAll().stream().map(Golf::getId).collect(Collectors.toList());
        }

        Set<UUID> set = new HashSet<>(golfIds);
        golfIds.clear();
        golfIds.addAll(set);

        for (UUID golfId : golfIds) {
            golfDetailBuilder.build(golfId);
            golfs.add(golfDetailBuilder.build(golfId));
        }

        return golfs;
    }
}
