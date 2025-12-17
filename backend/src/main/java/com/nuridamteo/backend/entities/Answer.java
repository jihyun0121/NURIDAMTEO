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
@Table(name = "answer")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    @JsonProperty("answer_id")
    private Long answerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "participation_id", nullable = false, unique = true)
    @JsonProperty("participation_id")
    @JsonIgnore
    private Participation participation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id", nullable = false, unique = true)
    @JsonProperty("question_id")
    @JsonIgnore
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "option_id", unique = true)
    @JsonProperty("option_id")
    @JsonIgnore
    private Options option;

    @Column(columnDefinition = "TEXT", name = "answer_text")
    @JsonProperty("answer_text")
    private String answerText;
}
