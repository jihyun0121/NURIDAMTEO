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
@Table(name = "level")

public class Faq {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "faq_id")
    @JsonProperty("faq_id")
    private Long faqId;

    @Column(name = "question", nullable = false, length = 300)
    @JsonProperty("question")
    private String question;

    @Column(name = "answer", nullable = false)
    @JsonProperty("answer")
    private String answer;

    @Column(name = "order_num", nullable = false)
    @JsonProperty("order_num")
    @Builder.Default
    private Long orderNum = 0L;
}
