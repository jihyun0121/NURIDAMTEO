package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.survey.OptionsDTO;
import com.nuridamteo.backend.dtos.survey.QuestionDTO;
import com.nuridamteo.backend.services.SurveyService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/surveys")
public class SurveyController {
    private final SurveyService surveyService;

    @GetMapping("/{surveyId}")
    public ResponseEntity<?> getSurvey(@PathVariable("surveyId") Long surveyId) {
        return ResponseEntity.ok(surveyService.getSurvey(surveyId));
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
    public ResponseEntity<?> getQuestionsBySurvey(@PathVariable("surveyId") Long surveyId) {
        List<QuestionDTO> question = surveyService.getQuestionsByForm(surveyId);
        return ResponseEntity.ok(question);
    }

    @GetMapping("/{questionId}/options")
    public ResponseEntity<?> getOptionsByQuestion(@PathVariable("questionId") Long questionId) {
        List<OptionsDTO> question = surveyService.getOptionsByQuestion(questionId);
        return ResponseEntity.ok(question);
    }

    @GetMapping("/{surveyId}/selection")
    public ResponseEntity<Boolean> checkSurveySelection(@PathVariable("surveyId") Long surveyId,
            @RequestParam Long userId) {
        return ResponseEntity.ok(surveyService.checkSurveySelection(surveyId, userId));
    }

    @PutMapping("/{surveyId}/view")
    public ResponseEntity<?> updateView(@PathVariable("surveyId") Long surveyId) {
        return ResponseEntity.ok(surveyService.updateView(surveyId));
    }

    @PutMapping("/{surveyId}/participate")
    public ResponseEntity<?> updateParticipate(@PathVariable("surveyId") Long surveyId) {
        return ResponseEntity.ok(surveyService.updateParticipate(surveyId));
    }
}
