package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.mileage.AddMileageDTO;
import com.nuridamteo.backend.services.MileageService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mileage")
public class MileageController {
    private final MileageService mileageService;

    @PostMapping
    public ResponseEntity<?> addMileage(@RequestBody AddMileageDTO dto) {
        mileageService.addMileage(dto);
        return ResponseEntity.ok(Map.of("message", "마일리지 지급 성공"));
    }
}
