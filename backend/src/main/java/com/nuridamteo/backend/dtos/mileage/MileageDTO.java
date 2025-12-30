package com.nuridamteo.backend.dtos.mileage;

import java.time.*;

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

    @JsonProperty("total_mileage")
    @Builder.Default
    private Long totalMileage = 0L;

    @Builder.Default
    private Long mileage = 0L;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;
}
