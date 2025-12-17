package com.nuridamteo.backend.entities;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.QuestionType;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    @JsonProperty("question_id")
    private Long questionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "survey_id", nullable = false)
    @JsonProperty("survey_id")
    @JsonIgnore
    private Survey survey;

    @Column(columnDefinition = "TEXT", name = "question_content", nullable = false)
    @JsonProperty("question_content")
    private String questionContent;

    @Enumerated(EnumType.STRING)
    @Column(name = "question_type", length = 10)
    @JsonProperty("question_type")
    @Builder.Default
    private QuestionType questionType = QuestionType.CHECK;

    @Column(name = "question_order")
    @JsonProperty("question_order")
    private Long questionOrder;
}
