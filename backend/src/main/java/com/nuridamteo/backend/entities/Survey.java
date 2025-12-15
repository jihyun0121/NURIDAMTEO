package com.nuridamteo.backend.entities;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.Status;
import com.nuridamteo.backend.enums.SurveyType;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "level")

public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "survey_id")
    @JsonProperty("survey_id")
    private Long surveyId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonProperty("user_id")
    @JsonIgnore
    private Users user;

    @Column(name = "title", nullable = false, length = 200)
    @JsonProperty("title")
    private String title;

    @Column(name = "description")
    @JsonProperty("description")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "survey_type", nullable = false, length = 20)
    @JsonProperty("survey_type")
    @Builder.Default
    private SurveyType surveyType = SurveyType.SURVEY;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    @JsonProperty("category_id")
    @JsonIgnore
    private Category category;

    @Column(name = "author", nullable = false, length = 20)
    @JsonProperty("author")
    private String author;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    @JsonProperty("status")
    @Builder.Default
    private Status status = Status.OPEN;

    @Column(name = "start_at")
    @JsonProperty("start_at")
    private LocalDateTime startAt;

    @Column(name = "end_at")
    @JsonProperty("end_at")
    private LocalDateTime endAt;

    @Column(name = "is_public", nullable = false)
    @JsonProperty("is_public")
    @Builder.Default
    private Boolean isPublic = true;

    @Column(name = "rewarded", nullable = false)
    @JsonProperty("rewarded")
    @Builder.Default
    private Long rewarded = 0L;

    @Column(name = "created_at", nullable = false)
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
