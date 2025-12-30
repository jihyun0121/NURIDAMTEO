package com.nuridamteo.backend.dtos.norification;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateNorificationDTO {
    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("proposal_id")
    private Long proposal;

    private String message;

    @JsonProperty("notification_type")
    private String notificationType;
}
