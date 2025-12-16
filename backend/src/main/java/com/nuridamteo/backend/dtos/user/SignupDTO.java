package com.nuridamteo.backend.dtos.user;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.*;

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

    private String address;

    @JsonProperty("address_detail")
    private String addressDetail;

    @JsonProperty("postal_code")
    private String postalCode;
}
