package com.nuridamteo.backend.dtos;

import java.time.LocalDate;
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

    private String title;

    private String content;

    @Builder.Default
    private Status status = Status.OPEN;

    @JsonProperty("start_at")
    private LocalDate startAt;

    @JsonProperty("end_at")
    private LocalDate endAt;

    @JsonProperty("view_count")
    @Builder.Default
    private Long viewCount = 0L;

    @JsonProperty("participation_count")
    @Builder.Default
    private Long participationCount = 0L;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
