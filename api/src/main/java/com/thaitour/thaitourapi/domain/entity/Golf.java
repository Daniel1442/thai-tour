package com.thaitour.thaitourapi.domain.entity;

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
@Table(name = "golf")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class Golf {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @Column(name = "name")
    private String name;

    @Column(name = "image")
    private String image;

    @Column(name = "label")
    private String label;

    @Column(name = "price")
    private Float price;

    @Column(name = "location")
    private String location;

    @Column(name = "latitude")
    private Float latitude;

    @Column(name = "longitude")
    private Float longitude;

    @Column(name = "yard")
    private String yard;

    @Column(name = "opened")
    private String opened;

    @Column(name = "holes")
    private String holes;
    @Column(name = "par")
    private String par;

    @Column(name = "driving_range")
    private String drivingRange;

    @Column(name = "opening_year")
    private String openingYear;

    @Column(name = "yard_designer")
    private String yardDesigner;

    @OneToMany(mappedBy = "golf")
    private List<GolfContent> contents;

    @OneToMany(mappedBy = "golf")
    private List<GolfImage> images;

    @OneToMany(mappedBy = "golf")
    private List<GolfPrice> prices;

    @OneToMany(mappedBy = "golf", fetch = FetchType.LAZY)
    private List<GolfParameter> parameters;

    @Column(name = "is_favorite")
    private Boolean isFavorite;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "updated_by")
    private String updatedBy;
}


