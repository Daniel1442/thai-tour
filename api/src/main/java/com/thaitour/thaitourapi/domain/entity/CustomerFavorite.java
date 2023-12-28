package com.thaitour.thaitourapi.domain.entity;

import com.thaitour.thaitourapi.domain.enums.CustomerFavoriteType;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "customer_favorite")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = {"id"})
public class CustomerFavorite {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @Column(name = "resource_id")
    private UUID resourceId;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private CustomerFavoriteType type;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "created_by")
    private String createdBy;

}

