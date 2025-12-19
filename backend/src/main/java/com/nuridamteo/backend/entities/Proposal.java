package com.nuridamteo.backend.entities;

import java.time.*;

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
@Table(name = "proposal")
public class Proposal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proposal_id")
    @JsonProperty("proposal_id")
    private Long proposalId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonProperty("user_id")
    @JsonIgnore
    private Users user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @JsonProperty("category_id")
    @JsonIgnore
    private Category category;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    @Builder.Default
    private Status status = Status.OPEN;

    @Column(name = "start_at", nullable = false)
    @JsonProperty("start_at")
    private LocalDate startAt;

    @Column(name = "end_at", nullable = false)
    @JsonProperty("end_at")
    private LocalDate endAt;

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
