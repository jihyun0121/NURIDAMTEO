package com.nuridamteo.backend.entities;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.LevelName;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "level")
public class Level {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "level_id")
    @JsonProperty("level_id")
    private Long levelId;

    @Enumerated(EnumType.STRING)
    @Column(name = "level_name", nullable = false, length = 50)
    @JsonProperty("level_name")
    @Builder.Default
    private LevelName levelName = LevelName.GUREUM;

    @Column(name = "min_mileage", nullable = false)
    @JsonProperty("min_mileage")
    private Long minMileage;
}
