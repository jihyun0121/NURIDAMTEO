package com.nuridamteo.backend.controllers;

import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nuridamteo.backend.dtos.CommentsDTO;
import com.nuridamteo.backend.services.CommentsService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comments")
public class CommentsController {
    private final CommentsService commentsService;

    @PostMapping
    public ResponseEntity<?> createComment(@RequestBody CommentsDTO dto) {
        commentsService.createComment(dto);
        return ResponseEntity.ok(Map.of("message", "댓글 생성 성공"));
    }

    @GetMapping("/{targetId}")
    public ResponseEntity<?> getComments(@PathVariable Long targetId) {
        return ResponseEntity.ok(commentsService.getComments(targetId));
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteComment(@PathVariable Long commentId) {
        commentsService.deleteComment(commentId);
        return ResponseEntity.ok(Map.of("message", "댓글 삭제 성공"));
    }
}
