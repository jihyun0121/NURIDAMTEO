package com.nuridamteo.backend.dtos.survey;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PanelDTO {
    @JsonProperty("panel_id")
    private Long panelId;

    @JsonProperty("survey_id")
    private Long survey;

    @JsonProperty("user_id")
    private Long user;
}
