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
@Table(name = "panel")
public class Panel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "panel_id")
    @JsonProperty("panel_id")
    private Long panelId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "survey_id", nullable = false)
    @JsonProperty("survey_id")
    @JsonIgnore
    private Survey survey;

    @Column(name = "user_id", nullable = false, length = 100)
    @JsonProperty("user_id")
    private Users user;
}
