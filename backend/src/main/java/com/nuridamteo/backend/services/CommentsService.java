package com.nuridamteo.backend.services;

import java.time.*;
import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.comment.CommentsDTO;
import com.nuridamteo.backend.dtos.comment.GetCommentDTO;
import com.nuridamteo.backend.entities.Comments;
import com.nuridamteo.backend.entities.Profile;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.enums.TargetType;
import com.nuridamteo.backend.repositories.CommentsRepository;
import com.nuridamteo.backend.repositories.ProfileRepository;
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
    private final ProfileRepository profileRepository;

    public CommentsDTO createComment(CommentsDTO dto) {
        Users user = userRepository.findById(dto.getUser())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));

        if (dto.getTargetType() == TargetType.SURVEY) {
            surveyRepository.findById(dto.getTargetId())
                    .orElseThrow(() -> new RuntimeException("설문을 찾을 수 없습니다"));
        } else if (dto.getTargetType() == TargetType.PROPOSAL) {
            proposalRepository.findById(dto.getTargetId())
                    .orElseThrow(() -> new RuntimeException("제안을 찾을 수 없습니다"));
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
    public List<GetCommentDTO> getComments(TargetType targetType, Long targetId) {
        return commentsRepository.findByTargetTypeAndTargetIdOrderByCommentIdDesc(targetType, targetId)
                .stream().map(this::getCommentDTO).toList();
    }

    private GetCommentDTO getCommentDTO(Comments p) {
        String name = profileRepository.findByUser_UserId(p.getUser().getUserId())
                .map(Profile::getName)
                .orElse("알수없음");

        return GetCommentDTO.builder()
                .commentId(p.getCommentId())
                .user(p.getUser().getUserId())
                .name(name)
                .targetType(p.getTargetType())
                .targetId(p.getTargetId())
                .content(p.getContent())
                .createdAt(p.getCreatedAt())
                .build();
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
