package com.thaitour.thaitourapi.domain.entity;

import com.thaitour.thaitourapi.domain.enums.CustomerType;
import com.thaitour.thaitourapi.domain.enums.RoleSystem;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "customer")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class Customer {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @Column(name = "address")
    private String address;

    @Column(name = "ico")
    private String ico;

    @Column(name = "dic")
    private String dic;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private CustomerType type;

    @Column(name = "identificator")
    private String identificator;

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

    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
    private List<CustomerFavorite> customerFavoriteList;
}
