package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MileageDTO {
    @JsonProperty("mileage_id")
    private Long mileageId;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("reason_detail")
    private String reasonDetail;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;

    @JsonProperty("expiration_at")
    private LocalDateTime expirationAt;
}
