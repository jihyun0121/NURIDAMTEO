package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SettingDTO {
    @JsonProperty("email")
    private String email;

    @JsonProperty("name")
    private String name;

    @JsonProperty("level_id")
    private Long level;

    @JsonProperty("total_mileage")
    @Builder.Default
    private Long totalMileage = 0L;

    @JsonProperty("accessibility_mode")
    @Builder.Default
    private Boolean accessibilityMode = false;

    @JsonProperty("notification_enabled")
    @Builder.Default
    private Boolean notificationEnabled = true;

    @JsonProperty("is_deleted")
    @Builder.Default
    private Boolean isDeleted = false;

    @JsonProperty("updated_at")
    private LocalDateTime updatedAt;
}
