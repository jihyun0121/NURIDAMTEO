package com.nuridamteo.backend.dtos.user;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProfileImageDTO {
    private Long user;

    @JsonProperty("image_name")
    private String name;

    private String path;
}
