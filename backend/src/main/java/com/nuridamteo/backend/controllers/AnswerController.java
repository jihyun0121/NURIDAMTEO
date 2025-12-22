package com.nuridamteo.backend.controllers;

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
}
