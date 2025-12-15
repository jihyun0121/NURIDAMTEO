package com.nuridamteo.backend.dtos;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterestDTO {
    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("category_id")
    private Long category;
}
