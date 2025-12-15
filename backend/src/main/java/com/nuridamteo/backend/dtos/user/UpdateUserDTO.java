package com.nuridamteo.backend.dtos.user;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.entities.Users;

import jakarta.persistence.Column;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateUserDTO {
    private Users user;

    private String name;

    private String gender;

    private LocalDate birthday;

    @Column(nullable = false, length = 50)
    private String residence;

    @JsonProperty("postal_code")
    private String postalCode;
}
