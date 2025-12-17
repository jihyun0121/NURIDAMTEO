package com.nuridamteo.backend.dtos.survey;

import java.time.*;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.Status;
import com.nuridamteo.backend.enums.SurveyType;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SurveyFormDTO {
    @JsonProperty("survey_id")
    private Long surveyId;

    private String title;

    private String author;

    private String description;

    private String result;

    private Long recruit;

    @JsonProperty("survey_type")
    @Builder.Default
    private SurveyType surveyType = SurveyType.SURVEY;

    @JsonProperty("category_id")
    @JsonIgnore
    private Long category;

    @Builder.Default
    private Status status = Status.OPEN;

    @JsonProperty("start_at")
    private LocalDate startAt;

    @JsonProperty("end_at")
    private LocalDate endAt;

    @Builder.Default
    private Long rewarded = 0L;

    @JsonProperty("view_count")
    @Builder.Default
    private Long viewCount = 0L;

    @JsonProperty("participation_count")
    @Builder.Default
    private Long participationCount = 0L;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
