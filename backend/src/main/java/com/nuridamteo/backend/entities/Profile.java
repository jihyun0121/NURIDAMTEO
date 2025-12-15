package com.nuridamteo.backend.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.*;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "profile")
public class Profile {
    @Id
    @Column(name = "profile_id")
    @JsonProperty("postal_code")
    private Long profile_id;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonProperty("user_id")
    @JsonIgnore
    private Users user;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 20)
    private String gender;

    @Column(nullable = false)
    private LocalDate birthday;

    @Column(nullable = false, length = 50)
    private String residence;

    @Column(name = "postal_code", nullable = false, length = 20)
    @JsonProperty("postal_code")
    private String postalCode;
}