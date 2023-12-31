package com.thaitour.thaitourapi.domain.entity;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "room")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class Room {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    @Column(name = "name", nullable = false, length = 255)
    private String name;

    @Column(name = "area", nullable = false, length = 255)
    private String area;

    @Column(name = "bed", nullable = false, length = 255)
    private String bed;

    @Column(name = "capacity")
    private Integer capacity;

    @Column(name = "price", nullable = false)
    private Float price;

    @Column(name = "is_active", columnDefinition = "boolean default true", nullable = false)
    private Boolean isActive;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private List<RoomParameter> parameters;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private List<RoomImage> roomImages;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "created_by", nullable = false, length = 255)
    private String createdBy;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "updated_by", length = 255)
    private String updatedBy;
}

