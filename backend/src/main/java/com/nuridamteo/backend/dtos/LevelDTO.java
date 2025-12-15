package com.nuridamteo.backend.dtos;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.LevelName;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LevelDTO {
    @JsonProperty("level_id")
    private Long levelId;

    @JsonProperty("level_name")
    @Builder.Default
    private LevelName levelName = LevelName.GUREUM;

    @JsonProperty("min_mileage")
    private Long minMileage;
}
