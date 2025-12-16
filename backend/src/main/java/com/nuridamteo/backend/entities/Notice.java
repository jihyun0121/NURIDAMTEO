package com.nuridamteo.backend.entities;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.NoticeType;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "notice")
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_id")
    @JsonProperty("notice_id")
    private Long noticeId;

    @Enumerated(EnumType.STRING)
    @Column(name = "notice_type", nullable = false, length = 200)
    @JsonProperty("notice_type")
    @Builder.Default
    private NoticeType noticeType = NoticeType.NOTICE;

    @Column(name = "title", nullable = false, length = 200)
    @JsonProperty("title")
    private String title;

    @Column(name = "content", nullable = false)
    @JsonProperty("content")
    private String content;

    @Column(name = "is_pinned", nullable = false)
    @JsonProperty("is_pinned")
    @Builder.Default
    private Boolean isPinned = false;

    @Column(name = "created_at", nullable = false)
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
