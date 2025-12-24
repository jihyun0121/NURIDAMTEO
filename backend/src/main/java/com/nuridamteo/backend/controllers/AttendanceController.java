package com.nuridamteo.backend.controllers;

import java.util.*;

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
    public ResponseEntity<AttendanceDTO> checkAttendance(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(
                attendanceService.checkAttendance(userId));
    }

    @GetMapping("/today/{userId}")
    public ResponseEntity<AttendanceDTO> getTodayAttendance(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(
                attendanceService.getTodayAttendance(userId));
    }

    @GetMapping("/month/{userId}")
    public ResponseEntity<List<AttendanceDTO>> getMonthlyAttendance(
            @PathVariable("userId") Long userId,
            @RequestParam int year,
            @RequestParam int month) {
        return ResponseEntity.ok(
                attendanceService.getMonthlyAttendance(userId, year, month));
    }
}
