package com.nuridamteo.backend.entities;

import java.time.*;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.ParticipationType;
import com.nuridamteo.backend.enums.TargetType;

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
    @JoinColumn(name = "user_id", nullable = false)
    @JsonProperty("user_id")
    @JsonIgnore
    private Users user;

    @Enumerated(EnumType.STRING)
    @Column(name = "target_type", length = 20)
    @JsonProperty("target_type")
    @Builder.Default
    private TargetType targetType = TargetType.SURVEY;

    @Column(name = "target_id")
    @JsonProperty("target_id")
    private Long targetId;

    @Enumerated(EnumType.STRING)
    @Column(name = "participation_type", length = 20)
    @JsonProperty("participation_type")
    @Builder.Default
    private ParticipationType participationType = ParticipationType.JOIN;

    @Column(name = "created_at", nullable = false)
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
