package com.nuridamteo.backend.controllers;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.AttendanceDTO;
import com.nuridamteo.backend.services.AttendanceService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/attendance")
public class AttendanceController {
    private final AttendanceService attendanceService;

    @PostMapping("/check/{userId}")
    public ResponseEntity<AttendanceDTO> checkAttendance(@PathVariable Long userId) {
        return ResponseEntity.ok(
                attendanceService.checkAttendance(userId));
    }

    @GetMapping("/today/{userId}")
    public ResponseEntity<AttendanceDTO> getTodayAttendance(@PathVariable Long userId) {
        return ResponseEntity.ok(
                attendanceService.getTodayAttendance(userId));
    }
}
