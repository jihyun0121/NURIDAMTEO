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
        participationService.createParticipation(dto);
        return ResponseEntity.ok(Map.of("message", "참여 생성 성공"));
    }

    @GetMapping("/{targetId}")
    public ResponseEntity<?> getParticipation(@PathVariable Long targetId) {
        return ResponseEntity.ok(participationService.getParticipation(targetId));
    }
}
