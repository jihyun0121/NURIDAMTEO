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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_id")
    @JsonProperty("profile_id")
    private Long profile_id;

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
    private String address;

    @Column(name = "address_detail", length = 50)
    @JsonProperty("address_detail")
    private String addressDetail;

    @Column(name = "postal_code", nullable = false, length = 20)
    @JsonProperty("postal_code")
    private String postalCode;
}