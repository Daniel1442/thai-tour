package com.thaitour.thaitourapi.domain.entity;

import java.time.LocalDateTime;
import java.util.UUID;
import java.sql.Timestamp;
import javax.persistence.*;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "trip")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class Trip {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "uuid", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "name", length = 255, nullable = false)
    private String name;

    @Column(name = "location", length = 255, nullable = false)
    private String location;

    @Column(name = "capacity")
    private Integer capacity;

    @Column(name = "price", nullable = false)
    private Float price;

    @Column(name = "length", length = 255)
    private String length;

    @Column(name = "food", length = 255)
    private String food;

    @Column(name = "where", length = 255)
    private String where;

    @Column(name = "trip_type", length = 255)
    private String tripType;

    @Column(name = "guide", length = 255)
    private String guide;

    @Column(name = "included", length = 255)
    private String included;

    @Column(name = "reviews", length = 255)
    private String reviews;

    @Column(name = "is_active", columnDefinition = "boolean default true", nullable = false)
    private Boolean isActive;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "created_by", length = 255, nullable = false)
    private String createdBy;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "updated_by", length = 255)
    private String updatedBy;
}

