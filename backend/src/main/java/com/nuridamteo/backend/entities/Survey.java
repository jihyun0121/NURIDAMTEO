package com.nuridamteo.backend.entities;

import java.time.LocalDate;
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
@Table(name = "survey")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "survey_id", nullable = false)
    @JsonProperty("survey_id")
    private Long surveyId;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, length = 20)
    private String author;

    private String description;

    private String result;

    private Long recruit;

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

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private Status status = Status.OPEN;

    @Column(name = "start_at")
    @JsonProperty("start_at")
    private LocalDate startAt;

    @Column(name = "end_at")
    @JsonProperty("end_at")
    private LocalDate endAt;

    @Column(nullable = false)
    @Builder.Default
    private Long rewarded = 0L;

    @Column(name = "view_count", nullable = false)
    @JsonProperty("view_count")
    @Builder.Default
    private Long viewCount = 0L;

    @Column(name = "participation_count", nullable = false)
    @JsonProperty("participation_count")
    @Builder.Default
    private Long participationCount = 0L;

    @Column(name = "created_at", nullable = false)
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
