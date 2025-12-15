package com.nuridamteo.backend.dtos.user;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;

import jakarta.persistence.Column;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class UserProfileDTO {
    @JsonProperty("user_id")
    private Long userId;

    private String email;

    private String name;

    private String gender;

    private LocalDate birthday;

    @Column(nullable = false, length = 50)
    private String residence;

    @JsonProperty("postal_code")
    private String postalCode;

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

    @JsonProperty("created_at")
    private LocalDateTime createdAt;

    @JsonProperty("updated_at")
    private LocalDateTime updatedAt;
}
