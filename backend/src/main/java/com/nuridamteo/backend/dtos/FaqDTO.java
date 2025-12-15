package com.nuridamteo.backend.dtos;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FaqDTO {
    @JsonProperty("faq_id")
    private Long faqId;

    @JsonProperty("question")
    private String question;

    @JsonProperty("answer")
    private String answer;

    @JsonProperty("order_num")
    @Builder.Default
    private Long orderNum = 0L;
}
