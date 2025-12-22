package com.nuridamteo.backend.dtos;

import java.time.*;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.ParticipationType;
import com.nuridamteo.backend.enums.TargetType;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParticipationDTO {
    @JsonProperty("participation_id")
    private Long participationId;

    @JsonProperty("user_id")
    private Long user;

    @Enumerated(EnumType.STRING)
    @JsonProperty("target_type")
    @Builder.Default
    private TargetType targetType = TargetType.SURVEY;

    @JsonProperty("target_id")
    private Long targetId;

    @Enumerated(EnumType.STRING)
    @JsonProperty("participation_type")
    @Builder.Default
    private ParticipationType participationType = ParticipationType.JOIN;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
