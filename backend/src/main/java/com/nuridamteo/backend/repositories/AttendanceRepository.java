package com.nuridamteo.backend.repositories;

import java.time.*;
import java.util.*;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.Attendance;
import com.nuridamteo.backend.entities.Users;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    Optional<Attendance> findByUserAndAttendanceDateBetween(Users user, LocalDateTime start, LocalDateTime end);

    List<Attendance> findAllByUserAndAttendanceDateBetween(Users user, LocalDateTime start, LocalDateTime end);
}
