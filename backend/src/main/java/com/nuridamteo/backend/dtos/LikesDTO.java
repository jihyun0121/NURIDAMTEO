package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LikesDTO {
    @JsonProperty("like_id")
    private Long likeId;

    @JsonProperty("suggestions_id")
    private Long suggestions;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
