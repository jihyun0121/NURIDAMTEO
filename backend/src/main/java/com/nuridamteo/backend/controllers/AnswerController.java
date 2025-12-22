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
    public ResponseEntity<List<AnswerDTO>> getAnswers(@PathVariable Long answerId) {
        return ResponseEntity.ok(answerService.getAnswers(answerId));
    }

    @GetMapping("/survey/{surveyId}")
    public ResponseEntity<List<AnswerDTO>> getAnswersBySurvey(@PathVariable Long surveyId) {
        return ResponseEntity.ok(answerService.getAnswersBySurvey(surveyId));
    }

    @GetMapping("/question/{questionId}")
    public ResponseEntity<List<AnswerDTO>> getAnswersByQuestion(@PathVariable Long questionId) {
        return ResponseEntity.ok(answerService.getAnswersByQuestion(questionId));
    }
}
