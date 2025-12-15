package com.nuridamteo.backend.dtos;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnswerDTO {
    @JsonProperty("answer_id")
    private Long answerId;

    @JsonProperty("participation_id")
    private String participation;

    @JsonProperty("question_id")
    private Long question;

    @JsonProperty("option_id")
    private Long option;

    @JsonProperty("answer_text")
    private String answerText;
}
