package com.nuridamteo.backend.entities;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.ParticipationType;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "participation")
public class Participation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participation_id")
    @JsonProperty("participation_id")
    private Long participationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    @JsonProperty("user_id")
    @JsonIgnore
    private Users user;

    @Column(name = "target_type")
    @JsonProperty("target_type")
    private String targetType;

    @Column(name = "target_id")
    @JsonProperty("target_id")
    private Long targetId;

    @Column(name = "participation_type")
    @JsonProperty("participation_type")
    @Builder.Default
    private ParticipationType participationType = ParticipationType.JOIN;

    @Column(name = "created_at", nullable = false)
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
