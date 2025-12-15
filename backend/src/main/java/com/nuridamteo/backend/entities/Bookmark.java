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

public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookmark_id")
    @JsonProperty("bookmark_id")
    private Long bookmarkId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonProperty("user_id")
    @JsonIgnore
    private Users user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "suggestion_id")
    @JsonProperty("suggestion_id")
    @JsonIgnore
    private Suggestion suggestion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "result_id")
    @JsonProperty("result_id")
    @JsonIgnore
    private Result result;
}
