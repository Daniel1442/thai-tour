package com.thaitour.thaitourapi.domain.entity;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "room_image")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class RoomImage {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @Column(name = "room_id", columnDefinition = "uuid", nullable = false)
    private UUID roomId;

    @Column(name = "value", columnDefinition = "text")
    private String value;

    @Column(name = "priority")
    private Integer priority;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "created_by", nullable = false, length = 255)
    private String createdBy;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "updated_by", length = 255)
    private String updatedBy;
}
