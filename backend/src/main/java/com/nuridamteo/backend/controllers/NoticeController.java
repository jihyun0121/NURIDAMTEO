package com.nuridamteo.backend.controllers;

import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.services.NoticeService;

import lombok.*;

import org.springframework.http.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notices")
public class NoticeController {
    private final NoticeService noticeService;

    @GetMapping("news")
    public ResponseEntity<?> getNotices() {
        return ResponseEntity.ok(noticeService.getNotices());
    }

    @GetMapping("news")
    public ResponseEntity<?> getNews() {
        return ResponseEntity.ok(noticeService.getNews());
    }
}
