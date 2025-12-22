package com.nuridamteo.backend.entities;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.TargetType;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "comments")
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    @JsonProperty("comment_id")
    private Long commentId;

    @Enumerated(EnumType.STRING)
    @Column(name = "target_type", length = 20)
    @JsonProperty("target_type")
    @Builder.Default
    private TargetType targetType = TargetType.SURVEY;

    @Column(name = "target_id")
    @JsonProperty("target_id")
    private Long targetId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonProperty("user_id")
    @JsonIgnore
    private Users user;

    @Column(columnDefinition = "TEXT", name = "content", nullable = false)
    @JsonProperty("content")
    private String content;

    @Column(name = "created_at", nullable = false)
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
