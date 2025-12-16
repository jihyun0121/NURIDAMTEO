package com.nuridamteo.backend.entities;

import com.fasterxml.jackson.annotation.*;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "profileImage")
public class ProfileImage {
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

    @Column(name = "image_name", nullable = false)
    @JsonProperty("profile_id")
    private String imageName;

    @Column(nullable = false)
    private String path;
}