package com.nuridamteo.backend.services;

import java.time.*;
import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.CommentsDTO;
import com.nuridamteo.backend.entities.Comments;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.enums.TargetType;
import com.nuridamteo.backend.repositories.CommentsRepository;
import com.nuridamteo.backend.repositories.ProposalRepository;
import com.nuridamteo.backend.repositories.SurveyRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class CommentsService {
    private final CommentsRepository commentsRepository;
    private final UserRepository userRepository;
    private final SurveyRepository surveyRepository;
    private final ProposalRepository proposalRepository;

    public CommentsDTO createComment(CommentsDTO dto) {
        Users user = userRepository.findById(dto.getUser())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));

        if (dto.getTargetType() == TargetType.SURVEY) {
            surveyRepository.findById(dto.getTargetId())
                    .orElseThrow(() -> new RuntimeException("설문을 찾을 수 없습니다."));
        } else if (dto.getTargetType() == TargetType.PROPOSAL) {
            proposalRepository.findById(dto.getTargetId())
                    .orElseThrow(() -> new RuntimeException("제안을 찾을 수 없습니다."));
        }

        Comments comments = Comments.builder()
                .user(user)
                .targetType(dto.getTargetType())
                .targetId(dto.getTargetId())
                .content(dto.getContent())
                .createdAt(LocalDateTime.now())
                .build();

        Comments saved = commentsRepository.save(comments);
        return commentsDTO(saved);
    }

    @Transactional(readOnly = true)
    public List<CommentsDTO> getComments(Long targetId) {
        return commentsRepository.findByTargetIdOrderByCommentIdDesc(targetId).stream().map(this::commentsDTO).toList();
    }

    @Transactional
    public void deleteComment(Long commentId) {
        if (!commentsRepository.existsById(commentId)) {
            throw new IllegalArgumentException("댓글을 찾을 수 없습니다");
        }
        commentsRepository.deleteById(commentId);
    }

    private CommentsDTO commentsDTO(Comments p) {
        return CommentsDTO.builder()
                .commentId(p.getCommentId())
                .user(p.getUser().getUserId())
                .targetType(p.getTargetType())
                .targetId(p.getTargetId())
                .content(p.getContent())
                .createdAt(p.getCreatedAt())
                .build();
    }
}
