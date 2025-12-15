package com.nuridamteo.backend.entities;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.Status;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "suggestion")
public class Suggestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "suggestion_id")
    @JsonProperty("suggestion_id")
    private Long suggestionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonProperty("user_id")
    @JsonIgnore
    private Users user;

    @JoinColumn(name = "category_id")
    @JsonProperty("category_id")
    private Category category;

    @Column(name = "title", nullable = false, length = 100)
    @JsonProperty("title")
    private String title;

    @Column(name = "content", nullable = false)
    @JsonProperty("content")
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 10)
    @JsonProperty("status")
    @Builder.Default
    private Status status = Status.OPEN;

    @Column(name = "is_published", nullable = false)
    @JsonProperty("is_published")
    @Builder.Default
    private Boolean isPublishe = true;

    @Column(name = "created_at", nullable = false)
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
