package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.Status;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SuggestionDTO {
    @JsonProperty("suggestion_id")
    private Long suggestionId;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("category_id")
    private Long category;

    @JsonProperty("title")
    private String title;

    @JsonProperty("content")
    private String content;

    @JsonProperty("status")
    @Builder.Default
    private Status status = Status.OPEN;

    @JsonProperty("is_published")
    @Builder.Default
    private Boolean isPublishe = true;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
