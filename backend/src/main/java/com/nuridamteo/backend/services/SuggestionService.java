package com.nuridamteo.backend.services;

import java.time.LocalDateTime;
import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.SuggestionDTO;
import com.nuridamteo.backend.entities.Category;
import com.nuridamteo.backend.entities.Suggestion;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.CategoryRepository;
import com.nuridamteo.backend.repositories.SuggestionRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class SuggestionService {
    private final SuggestionRepository suggestionRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;

    public SuggestionDTO createSuggestion(Long userId, SuggestionDTO dto) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));
        Category category = categoryRepository.findById(dto.getCategory())
                .orElseThrow(() -> new IllegalArgumentException("카테고리를 찾을 수 없습니다"));

        Suggestion suggestion = Suggestion.builder()
                .user(user)
                .category(category)
                .title(dto.getTitle())
                .content(dto.getContent())
                .startAt(dto.getStartAt())
                .endAt(dto.getEndAt())
                .createdAt(LocalDateTime.now())
                .build();

        Suggestion saved = suggestionRepository.save(suggestion);
        return suggestionDTO(saved);
    }

    @Transactional(readOnly = true)
    public List<SuggestionDTO> getSuggestions() {
        return suggestionRepository
                .findAllByOrderBySuggestionIdDesc().stream()
                .map(this::suggestionDTO).toList();
    }

    @Transactional(readOnly = true)
    public SuggestionDTO getSuggestion(Long suggestionId) {
        Suggestion suggestion = suggestionRepository.findById(suggestionId)
                .orElseThrow(() -> new IllegalArgumentException("질문을 찾을 수 없습니다"));

        return suggestionDTO(suggestion);
    }

    @Transactional
    public SuggestionDTO setState(Long suggestionId, SuggestionDTO dto) {
        Suggestion suggestion = suggestionRepository.findById(suggestionId)
                .orElseThrow(() -> new IllegalArgumentException("제안을 찾을 수 없습니다"));

        suggestion.setStatus(dto.getStatus());

        return suggestionDTO(suggestion);
    }

    private SuggestionDTO suggestionDTO(Suggestion s) {
        return SuggestionDTO.builder()
                .suggestionId(s.getSuggestionId())
                .user(s.getUser().getUserId())
                .category(s.getCategory().getCategoryId())
                .title(s.getTitle())
                .content(s.getContent())
                .status(s.getStatus())
                .startAt(s.getStartAt())
                .endAt(s.getEndAt())
                .viewCount(s.getViewCount())
                .participationCount(s.getParticipationCount())
                .createdAt(s.getCreatedAt())
                .build();
    }
}