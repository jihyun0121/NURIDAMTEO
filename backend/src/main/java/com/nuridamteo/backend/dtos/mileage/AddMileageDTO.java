package com.nuridamteo.backend.dtos.mileage;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AddMileageDTO {
    private Long mileage;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("reason_detail")
    private String reasonDetail;
}
