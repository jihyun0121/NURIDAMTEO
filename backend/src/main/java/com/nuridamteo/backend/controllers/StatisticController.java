package com.nuridamteo.backend.controllers;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.services.StatisticService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/statistics")
public class StatisticController {
    private final StatisticService statisticService;

    @GetMapping("/questions/{questionId}/options")
    public ResponseEntity<?> getOptionStats(@PathVariable Long questionId) {
        return ResponseEntity.ok(statisticService.getOptionStats(questionId));
    }
}