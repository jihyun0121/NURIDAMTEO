package com.nuridamteo.backend.controllers;

import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.services.ResultService;

import lombok.*;

import org.springframework.http.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/result")
public class ResultController {
    private final ResultService resultService;

    @GetMapping
    public ResponseEntity<?> getResults() {
        return ResponseEntity.ok(resultService.getResults());
    }
}
