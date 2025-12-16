package com.nuridamteo.backend.services;

import java.time.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.AttendanceDTO;
import com.nuridamteo.backend.entities.Attendance;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.AttendanceRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
@Transactional
public class AttendanceService {
    private final AttendanceRepository attendanceRepository;
    private final UserRepository userRepository;

    public AttendanceDTO checkAttendance(Long userId) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));

        LocalDate today = LocalDate.now();
        LocalDateTime start = today.atStartOfDay();
        LocalDateTime end = today.atTime(LocalTime.MAX);

        attendanceRepository.findByUserAndAttendanceDateBetween(user, start, end)
                .ifPresent(a -> {
                    throw new RuntimeException("이미 출석되었습니다");
                });

        Attendance attendance = Attendance.builder()
                .user(user)
                .attendanceDate(LocalDateTime.now())
                .build();

        return attendanceDTO(attendanceRepository.save(attendance));
    }

    private AttendanceDTO attendanceDTO(Attendance attendance) {
        return AttendanceDTO.builder()
                .attendanceId(attendance.getAttendanceId())
                .user(attendance.getUser().getUserId())
                .attendanceDate(attendance.getAttendanceDate())
                .build();
    }
}
