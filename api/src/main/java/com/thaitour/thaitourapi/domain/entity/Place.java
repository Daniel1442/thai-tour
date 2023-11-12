package com.thaitour.thaitourapi.domain.entity;


import com.thaitour.thaitourapi.domain.enums.AccommodationType;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "place")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class Place {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "place")
    private List<PlaceContent> contents;

    @OneToMany(mappedBy = "place")
    private List<PlaceImage> images;

    @OneToMany(mappedBy = "place")
    private List<Room> rooms;

    @OneToMany(mappedBy = "place", fetch = FetchType.LAZY)
    private List<PlaceParameter> parameters;

    @Column(name = "image")
    private String image;

    @Column(name = "location")
    private String location;
    @Column(name = "address")
    private String address;

    @Column(name = "review")
    private Integer review;

    @Column(name = "is_favorite")
    private Boolean isFavorite;

    @Column(name = "price")
    private Float price;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "accommodation_type")
    @Enumerated(EnumType.STRING)
    private AccommodationType accommodationType;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "updated_by")
    private String updatedBy;
}

