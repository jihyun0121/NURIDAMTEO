package com.nuridamteo.backend.dtos.survey;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.QuestionType;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionDTO {
    @JsonProperty("question_id")
    private Long questionId;

    @JsonProperty("survey_id")
    private Long survey;

    @JsonProperty("question_content")
    private String questionContent;

    @JsonProperty("question_type")
    @Builder.Default
    private QuestionType questionType = QuestionType.CHECK;

    @JsonProperty("question_order")
    private Long questionOrder;
}
