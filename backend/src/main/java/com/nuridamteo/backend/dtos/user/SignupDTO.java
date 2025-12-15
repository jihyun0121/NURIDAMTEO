package com.nuridamteo.backend.dtos.user;

import java.time.LocalDate;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SignupDTO {
    private String email;

    @Builder.Default
    private Long level = 1L;

    private String password;

    private String name;

    private String gender;

    private LocalDate birthday;

    private String residence;

    private String postalCode;
}
