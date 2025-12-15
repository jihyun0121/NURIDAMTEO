package com.nuridamteo.backend.dtos.user;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.*;

import jakarta.persistence.Column;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProfileDTO {
    private Long user;

    private String name;

    private String gender;

    private LocalDate birthday;

    @Column(nullable = false, length = 50)
    private String residence;

    @JsonProperty("postal_code")
    private String postalCode;
}
