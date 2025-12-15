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

public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "result_id")
    @JsonProperty("result_id")
    private Long resultId;

    @Column(name = "result_title", nullable = false)
    @JsonProperty("result_title")
    private String resultTitle;

    @Column(name = "result_content", nullable = false)
    @JsonProperty("result_content")
    private String resultContent;

    @Column(name = "author", nullable = false)
    @JsonProperty("author")
    private String author;
}
