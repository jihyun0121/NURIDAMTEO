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

    @GetMapping("/notice")
    public ResponseEntity<?> getNotice() {
        return ResponseEntity.ok(noticeService.getNotice());
    }

    @GetMapping("/news")
    public ResponseEntity<?> getNews() {
        return ResponseEntity.ok(noticeService.getNews());
    }

    @GetMapping("/{noticeId}")
    public ResponseEntity<?> getDetail(@PathVariable Long noticeId) {
        return ResponseEntity.ok(noticeService.getDetail(noticeId));
    }
}
