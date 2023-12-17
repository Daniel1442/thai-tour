package com.thaitour.thaitourapi.domain.entity;

import com.thaitour.thaitourapi.domain.enums.AccommodationType;

import javax.persistence.*;

import com.thaitour.thaitourapi.domain.enums.ParameterAssingType;
import com.thaitour.thaitourapi.domain.enums.ParameterValueType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "parameter")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class Parameter {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @Column(name = "name")
    private String name;

    @Column(name = "priority")
    private Integer priority;

    @Column(name = "tooltip")
    private String tooltip;

    @Column(name="filter")
    private Boolean filter;

    @Column(name = "value_type")
    @Enumerated(EnumType.STRING)
    private ParameterValueType valueType;

    @Column(name = "assign_type")
    @Enumerated(EnumType.STRING)
    private ParameterAssingType assingType;

    @OneToMany(mappedBy = "parameter", cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, orphanRemoval = true, fetch = LAZY)
    private List<ParameterValue> values;

    @Column(name = "hint")
    private String hint;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "updated_by")
    private String updatedBy;
}

