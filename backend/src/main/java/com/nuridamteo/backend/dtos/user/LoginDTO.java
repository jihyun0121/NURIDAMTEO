package com.nuridamteo.backend.dtos.user;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginDTO {
    private String token;

    @JsonProperty("user_id")
    private Long userId;

    private String password;

    private String email;

    private String name;
}
