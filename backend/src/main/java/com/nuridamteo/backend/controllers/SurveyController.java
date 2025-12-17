package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.survey.QuestionDTO;
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

    @GetMapping("/survey")
    public ResponseEntity<?> getSurveyList() {
        return ResponseEntity.ok(surveyService.getSurveyList());
    }

    @GetMapping("/panel")
    public ResponseEntity<?> getPanelList() {
        return ResponseEntity.ok(surveyService.getPanelList());
    }

    @GetMapping("/{surveyId}/questions")
    public ResponseEntity<?> getQuestionsBySurvey(@PathVariable Long surveyId) {
        List<QuestionDTO> question = surveyService.getQuestionsByForm(surveyId);
        return ResponseEntity.ok(question);
    }
}
