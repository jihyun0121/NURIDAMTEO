package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;

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

    @JsonProperty("survey_id")
    private Long survey;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
