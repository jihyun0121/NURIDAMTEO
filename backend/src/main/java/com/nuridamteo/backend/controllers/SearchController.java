package com.nuridamteo.backend.controllers;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.services.*;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/search")
public class SearchController {

    private final SearchService searchService;

    @GetMapping("/proposals")
    public ResponseEntity<?> searchProposals(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(searchService.searchProposals(keyword));
    }

    @GetMapping("/surveys")
    public ResponseEntity<?> searchSurveys(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(searchService.searchSurveys(keyword));
    }

    @GetMapping("/notices")
    public ResponseEntity<?> searchNotices(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(searchService.searchNotices(keyword));
    }

    @GetMapping("/news")
    public ResponseEntity<?> searchNews(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(searchService.searchNews(keyword));
    }

    @GetMapping("/results")
    public ResponseEntity<?> searchResults(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(searchService.searchResults(keyword));
    }
}
