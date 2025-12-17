package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.SuggestionDTO;
import com.nuridamteo.backend.services.SuggestionService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/suggestions")
public class SuggestionController {
    private final SuggestionService suggestionService;

    @PostMapping("/{userId}")
    public ResponseEntity<?> createSuggestion(@PathVariable Long userId, @RequestBody SuggestionDTO dto) {
        suggestionService.createSuggestion(userId, dto);
        return ResponseEntity.ok(Map.of("message", "제안 생성 성공"));
    }

    @GetMapping
    public ResponseEntity<?> getSuggestions() {
        List<SuggestionDTO> suggestion = suggestionService.getSuggestions();
        return ResponseEntity.ok(suggestion);
    }
}