package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.InterestDTO;
import com.nuridamteo.backend.entities.Category;
import com.nuridamteo.backend.services.InterestService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("interests")
public class InterestController {
    private final InterestService interestService;

    @PostMapping("/")
    public ResponseEntity<?> selectInterests(@RequestBody InterestDTO dto) {
        interestService.selectInterests(dto);
        return ResponseEntity.ok(Map.of("message", "회원가입 성공"));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Category>> getInterests(@PathVariable Long userId) {
        return ResponseEntity.ok(interestService.getInterests(userId));
    }
}
