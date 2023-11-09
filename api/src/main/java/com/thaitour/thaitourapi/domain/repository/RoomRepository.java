package com.thaitour.thaitourapi.domain.repository;

import com.thaitour.thaitourapi.domain.entity.Article;
import com.thaitour.thaitourapi.domain.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RoomRepository extends JpaRepository<Room, UUID> {
}
