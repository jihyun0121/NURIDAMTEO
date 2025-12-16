package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.InterestDTO;
import com.nuridamteo.backend.services.InterestService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("categories")
public class InterestController {
    private final InterestService interestService;

    @GetMapping("/")
    public ResponseEntity<?> selectInterests(@RequestBody InterestDTO dto) {
        interestService.selectInterests(dto);
        return ResponseEntity.ok(Map.of("message", "회원가입 성공"));
    }
}
