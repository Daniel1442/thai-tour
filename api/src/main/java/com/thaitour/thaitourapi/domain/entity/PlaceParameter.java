package com.thaitour.thaitourapi.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "place_parameter")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class PlaceParameter {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @ManyToOne(targetEntity = Place.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    @ManyToOne(targetEntity = Parameter.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "parameter_id")
    private Parameter parameter;


    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "updated_by")
    private String updatedBy;
}
