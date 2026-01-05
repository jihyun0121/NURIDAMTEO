package com.nuridamteo.backend.controllers;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.BookmarkDTO;
import com.nuridamteo.backend.services.BookmarkService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bookmarks")
public class BookmarkController {
    private final BookmarkService bookmarkService;

    @PostMapping
    public ResponseEntity<?> createBookmark(@RequestBody BookmarkDTO dto) {
        bookmarkService.createBookmark(dto);
        return ResponseEntity.ok(Map.of("message", "즐겨찾기 성공"));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getBookmarkUser(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(bookmarkService.getBookmarkUser(userId));
    }

    @GetMapping("/{userId}/proposal")
    public ResponseEntity<?> getBookmarkProposal(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(bookmarkService.getBookmarkProposal(userId));
    }

    @GetMapping("/{userId}/result")
    public ResponseEntity<?> getBookmarkResult(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(bookmarkService.getBookmarkResult(userId));
    }

    @DeleteMapping("/{bookmarkId}")
    public ResponseEntity<?> deleteBookmark(@PathVariable("bookmarkId") Long bookmarkId) {
        bookmarkService.deleteBookmark(bookmarkId);
        return ResponseEntity.ok(Map.of("message", "즐겨찾기 해제 성공"));
    }
}
