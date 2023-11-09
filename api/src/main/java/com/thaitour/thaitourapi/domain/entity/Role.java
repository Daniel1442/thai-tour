package com.thaitour.thaitourapi.domain.entity;

import com.thaitour.thaitourapi.domain.enums.RoleSystem;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "role")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class Role {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @Column(name = "system")
    @Enumerated(EnumType.STRING)
    private RoleSystem system;

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    @Column(name = "is_active")
    private Boolean isActive;
}
