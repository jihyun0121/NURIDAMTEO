package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.norification.CreateNorificationDTO;
import com.nuridamteo.backend.dtos.norification.NotificationDTO;
import com.nuridamteo.backend.services.NotificationService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notifications")
public class NotificationController {
    private final NotificationService notificationService;

    @PostMapping
    public ResponseEntity<?> createNotifications(@RequestBody CreateNorificationDTO dto) {
        notificationService.createNotifications(dto);
        return ResponseEntity.ok(Map.of("message", "알림 생성 성공"));
    }

    @GetMapping("/{userId}")
    public List<NotificationDTO> getNotifications(@PathVariable("userId") Long userId) {
        return notificationService.getNotifications(userId);
    }
}
