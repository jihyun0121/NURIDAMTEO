package com.nuridamteo.backend.dtos;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OptionsDTO {
    @JsonProperty("option_id")
    private Long optionId;

    @JsonProperty("question_id")
    private Long question;

    @JsonProperty("option_content")
    private String optionContent;

    @JsonProperty("option_order")
    private Long optionOrder;
}
