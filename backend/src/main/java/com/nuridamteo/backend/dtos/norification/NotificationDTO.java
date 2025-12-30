package com.nuridamteo.backend.dtos.norification;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NotificationDTO {
    @JsonProperty("notification_id")
    private Long notificationId;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("proposal_id")
    private Long proposal;

    private String message;

    @JsonProperty("notification_type")
    private String notificationType;

    @JsonProperty("is_read")
    @Builder.Default
    private Boolean isRead = false;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;

    @JsonProperty("read_at")
    private LocalDateTime readAt;
}
