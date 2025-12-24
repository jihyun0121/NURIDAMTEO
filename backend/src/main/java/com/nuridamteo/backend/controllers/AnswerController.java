package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.AnswerDTO;
import com.nuridamteo.backend.services.AnswerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/answers")
public class AnswerController {
    private final AnswerService answerService;

    @PostMapping
    public ResponseEntity<AnswerDTO> createAnswer(@RequestBody AnswerDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(answerService.createAnswer(dto));
    }

    @GetMapping("/{answerId}")
    public ResponseEntity<List<AnswerDTO>> getAnswers(@PathVariable("answerId") Long answerId) {
        return ResponseEntity.ok(answerService.getAnswers(answerId));
    }

    @GetMapping("/survey/{surveyId}")
    public ResponseEntity<List<AnswerDTO>> getAnswersBySurvey(@PathVariable("surveyId") Long surveyId) {
        return ResponseEntity.ok(answerService.getAnswersBySurvey(surveyId));
    }

    @GetMapping("/question/{questionId}")
    public ResponseEntity<List<AnswerDTO>> getAnswersByQuestion(@PathVariable("questionId") Long questionId) {
        return ResponseEntity.ok(answerService.getAnswersByQuestion(questionId));
    }

    @GetMapping("/participations/{participationId}")
    public ResponseEntity<List<AnswerDTO>> getAnswersByParticipation(
            @PathVariable("participationId") Long participationId) {
        return ResponseEntity.ok(answerService.getAnswersByParticipation(participationId));
    }
}
