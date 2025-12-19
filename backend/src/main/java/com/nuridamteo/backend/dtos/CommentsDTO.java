package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentsDTO {
    @JsonProperty("comment_id")
    private Long commentId;

    @JsonProperty("participation_id")
    private Long participation;

    @JsonProperty("proposal_id")
    private Long proposal;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("content")
    private String content;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
