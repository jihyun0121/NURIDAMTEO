package com.nuridamteo.backend.dtos;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.*;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttendanceDTO {
    @JsonProperty("attendance_id")
    private Long attendanceId;

    @JsonProperty("user_id")
    private Long user;

    @JsonProperty("attendance_date")
    private LocalDateTime attendanceDate;
}
