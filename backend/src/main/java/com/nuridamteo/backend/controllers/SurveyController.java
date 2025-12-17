package com.nuridamteo.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.services.SurveyService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/surveys")
public class SurveyController {
    private final SurveyService surveyService;

    @GetMapping
    public ResponseEntity<?> getSurvey() {
        return ResponseEntity.ok(surveyService.getSurvey());
    }
}
