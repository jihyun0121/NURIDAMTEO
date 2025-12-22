package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.TargetType;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentsDTO {
    @JsonProperty("comment_id")
    private Long commentId;

    @Enumerated(EnumType.STRING)
    @JsonProperty("target_type")
    @Builder.Default
    private TargetType targetType = TargetType.SURVEY;

    @JsonProperty("target_id")
    private Long targetId;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("content")
    private String content;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
