package com.nuridamteo.backend.dtos;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookmarkDTO {
    @JsonProperty("bookmark_id")
    private Long bookmarkId;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("proposal_id")
    private Long proposal;

    @JsonProperty("result_id")
    private Long result;
}
