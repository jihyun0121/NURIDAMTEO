package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.Status;
import com.nuridamteo.backend.enums.SurveyType;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SurveyDTO {
    @JsonProperty("survey_id")
    private Long surveyId;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("title")
    private String title;

    @JsonProperty("description")
    private String description;

    @JsonProperty("survey_type")
    @Builder.Default
    private SurveyType surveyType = SurveyType.SURVEY;

    @JsonProperty("category_id")
    private Long category;

    @JsonProperty("author")
    private String author;

    @JsonProperty("status")
    @Builder.Default
    private Status status = Status.OPEN;

    @JsonProperty("start_at")
    private LocalDateTime startAt;

    @JsonProperty("end_at")
    private LocalDateTime endAt;

    @JsonProperty("is_public")
    @Builder.Default
    private Boolean isPublic = true;

    @JsonProperty("rewarded")
    @Builder.Default
    private Long rewarded = 0L;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
