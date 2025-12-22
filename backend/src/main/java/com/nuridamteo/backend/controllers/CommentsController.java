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
}
