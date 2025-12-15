package com.nuridamteo.backend.entities;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    @JsonProperty("user_id")
    private Long userId;

    @Column(name = "email", nullable = false, unique = true, length = 100)
    @JsonProperty("email")
    private String email;

    @Column(name = "password", nullable = false, length = 255)
    @JsonProperty("password")
    private String password;

    @Column(name = "name", nullable = false, length = 50)
    @JsonProperty("name")
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "level_id")
    @JsonProperty("level_id")
    @JsonIgnore
    private Level level;

    @Column(name = "total_mileage", nullable = false)
    @JsonProperty("total_mileage")
    @Builder.Default
    private Long totalMileage = 0L;

    @Column(name = "accessibility_mode", nullable = false)
    @JsonProperty("accessibility_mode")
    @Builder.Default
    private Boolean accessibilityMode = false;

    @Column(name = "notification_enabled", nullable = false)
    @JsonProperty("notification_enabled")
    @Builder.Default
    private Boolean notificationEnabled = true;

    @Column(name = "is_deleted", nullable = false)
    @JsonProperty("is_deleted")
    @Builder.Default
    private Boolean isDeleted = false;

    @Column(name = "created_at", nullable = false)
    @JsonProperty("created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    @JsonProperty("updated_at")
    private LocalDateTime updatedAt;
}
