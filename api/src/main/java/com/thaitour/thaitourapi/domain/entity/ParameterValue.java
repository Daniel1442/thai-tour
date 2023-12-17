package com.thaitour.thaitourapi.domain.entity;

import com.thaitour.thaitourapi.domain.enums.ParameterAssingType;
import com.thaitour.thaitourapi.domain.enums.ParameterValueType;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "parameter_value")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class ParameterValue {

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

    @Column(name = "icon")
    private String icon;

    @Column(name = "show_on_detail")
    private Boolean showOnDetail;

    @ManyToOne(cascade = CascadeType.ALL, fetch = LAZY)
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
