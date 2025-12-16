package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.CategoryDTO;
import com.nuridamteo.backend.services.InterestService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/interests")
public class InterestController {
    private final InterestService interestService;

    @PostMapping("/{userId}")
    public ResponseEntity<?> selectInterests(@PathVariable Long userId, @RequestBody List<Long> categoryIds) {
        interestService.selectInterests(userId, categoryIds);
        return ResponseEntity.ok(Map.of("message", "관심사 설정 완료"));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<CategoryDTO>> getInterests(@PathVariable Long userId) {
        return ResponseEntity.ok(interestService.getInterests(userId));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<?> updateInterests(@PathVariable Long userId, @RequestBody List<Long> categoryIds) {
        interestService.updateInterests(userId, categoryIds);
        return ResponseEntity.ok(Map.of("message", "관심사 수정 성공"));
    }
}
