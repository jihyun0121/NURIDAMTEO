package com.nuridamteo.backend.dtos;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResultDTO {
    @JsonProperty("result_id")
    private Long resultId;

    @JsonProperty("result_title")
    private String resultTitle;

    @JsonProperty("result_content")
    private String resultContent;

    @JsonProperty("author")
    private String author;
}
