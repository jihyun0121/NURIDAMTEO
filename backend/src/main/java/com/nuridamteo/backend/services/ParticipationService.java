package com.nuridamteo.backend.services;

import java.time.LocalDateTime;
import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.ParticipationDTO;
import com.nuridamteo.backend.entities.Participation;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.enums.TargetType;
import com.nuridamteo.backend.repositories.ParticipationRepository;
import com.nuridamteo.backend.repositories.ProposalRepository;
import com.nuridamteo.backend.repositories.SurveyRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class ParticipationService {
    private final ParticipationRepository participationRepository;
    private final UserRepository userRepository;
    private final ProposalRepository proposalRepository;
    private final SurveyRepository surveyRepository;

    public ParticipationDTO createParticipation(ParticipationDTO dto) {
        Users user = userRepository.findById(dto.getUser())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));

        if (dto.getTargetType() == TargetType.SURVEY) {
            surveyRepository.findById(dto.getTargetId())
                    .orElseThrow(() -> new RuntimeException("설문을 찾을 수 없습니다."));
        } else if (dto.getTargetType() == TargetType.PROPOSAL) {
            proposalRepository.findById(dto.getTargetId())
                    .orElseThrow(() -> new RuntimeException("제안을 찾을 수 없습니다."));
        } else if (dto.getTargetType() == TargetType.PANEL) {
            proposalRepository.findById(dto.getTargetId())
                    .orElseThrow(() -> new RuntimeException("제안을 찾을 수 없습니다."));
        }

        Participation participation = Participation.builder()
                .user(user)
                .targetType(dto.getTargetType())
                .targetId(dto.getTargetId())
                .participationType(dto.getParticipationType())
                .createdAt(LocalDateTime.now())
                .build();

        Participation saved = participationRepository.save(participation);
        return participationDTO(saved);
    }

    @Transactional(readOnly = true)
    public List<ParticipationDTO> getParticipation(Long targetId) {
        return participationRepository.findByTargetIdOrderByParticipationIdDesc(targetId).stream()
                .map(this::participationDTO).toList();
    }

    @Transactional(readOnly = true)
    public List<ParticipationDTO> getUserParticipation(Long userId) {
        return participationRepository.findByUser_UserIdOrderByParticipationIdDesc(userId).stream()
                .map(this::participationDTO).toList();
    }

    @Transactional
    public void deleteParticipation(Long participationId) {
        if (!participationRepository.existsById(participationId)) {
            throw new IllegalArgumentException("설문을 찾을 수 없습니다");
        }
        participationRepository.deleteById(participationId);
    }

    private ParticipationDTO participationDTO(Participation p) {
        return ParticipationDTO.builder()
                .participationId(p.getParticipationId())
                .user(p.getUser().getUserId())
                .targetType(p.getTargetType())
                .targetId(p.getTargetId())
                .participationType(p.getParticipationType())
                .createdAt(p.getCreatedAt())
                .build();
    }
}
