package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.ParticipationDTO;
import com.nuridamteo.backend.services.ParticipationService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/participations")
public class ParticipationController {
    private final ParticipationService participationService;

    @PostMapping
    public ResponseEntity<?> createParticipation(@RequestBody ParticipationDTO dto) {
        ParticipationDTO saved = participationService.createParticipation(dto);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{targetId}")
    public ResponseEntity<?> getParticipation(@PathVariable("targetId") Long targetId) {
        return ResponseEntity.ok(participationService.getParticipation(targetId));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserParticipation(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(participationService.getUserParticipation(userId));
    }

    @DeleteMapping("/{participationId}")
    public ResponseEntity<?> deleteParticipation(@PathVariable("participationId") Long participationId) {
        participationService.deleteParticipation(participationId);
        return ResponseEntity.ok(Map.of("message", "참여 삭제 성공"));
    }
}
