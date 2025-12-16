package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;
import com.nuridamteo.backend.enums.NoticeType;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NoticeDTO {
    @JsonProperty("notice_id")
    private Long noticeId;

    @JsonProperty("notice_type")
    @Builder.Default
    private NoticeType noticeType = NoticeType.NOTICE;

    @JsonProperty("title")
    private String title;

    @JsonProperty("content")
    private String content;

    @JsonProperty("is_pinned")
    @Builder.Default
    private Boolean isPinned = false;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
