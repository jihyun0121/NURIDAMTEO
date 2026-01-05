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

    @GetMapping("/surveys/survey")
    public ResponseEntity<?> searchSurveys(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(searchService.searchSurveys(keyword));
    }

    @GetMapping("/surveys/panel")
    public ResponseEntity<?> searchPanels(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(searchService.searchPanels(keyword));
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

    @GetMapping("/category/proposals")
    public ResponseEntity<?> searchCategoryProposals(@RequestParam("categoryId") Long categoryId) {
        return ResponseEntity.ok(searchService.searchCategoryProposals(categoryId));
    }

    @GetMapping("/category/surveys/survey")
    public ResponseEntity<?> searchCategorySurveys(@RequestParam("categoryId") Long categoryId) {
        return ResponseEntity.ok(searchService.searchCategorySurveys(categoryId));
    }

    @GetMapping("/category/surveys/panel")
    public ResponseEntity<?> searchCategoryPanel(@RequestParam("categoryId") Long categoryId) {
        return ResponseEntity.ok(searchService.searchCategoryPanels(categoryId));
    }
}
