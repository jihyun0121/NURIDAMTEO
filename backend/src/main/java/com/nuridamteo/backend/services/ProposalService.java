package com.nuridamteo.backend.services;

import java.time.LocalDateTime;
import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.ProposalDTO;
import com.nuridamteo.backend.entities.Category;
import com.nuridamteo.backend.entities.Proposal;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.CategoryRepository;
import com.nuridamteo.backend.repositories.ProposalRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class ProposalService {
        private final ProposalRepository proposalRepository;
        private final UserRepository userRepository;
        private final CategoryRepository categoryRepository;

        public ProposalDTO createProposal(Long userId, ProposalDTO dto) {
                Users user = userRepository.findById(userId)
                                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));
                Category category = categoryRepository.findById(dto.getCategory())
                                .orElseThrow(() -> new IllegalArgumentException("카테고리를 찾을 수 없습니다"));

                Proposal proposal = Proposal.builder()
                                .user(user)
                                .category(category)
                                .title(dto.getTitle())
                                .content(dto.getContent())
                                .startAt(dto.getStartAt())
                                .endAt(dto.getEndAt())
                                .createdAt(LocalDateTime.now())
                                .build();

                Proposal saved = proposalRepository.save(proposal);
                return proposalDTO(saved);
        }

        @Transactional(readOnly = true)
        public List<ProposalDTO> getProposals() {
                return proposalRepository
                                .findAllByOrderByProposalIdDesc().stream()
                                .map(this::proposalDTO).toList();
        }

        @Transactional(readOnly = true)
        public ProposalDTO getProposal(Long proposalId) {
                Proposal proposal = proposalRepository.findById(proposalId)
                                .orElseThrow(() -> new IllegalArgumentException("질문을 찾을 수 없습니다"));

                return proposalDTO(proposal);
        }

        @Transactional
        public ProposalDTO setState(Long proposalId, ProposalDTO dto) {
                Proposal proposal = proposalRepository.findById(proposalId)
                                .orElseThrow(() -> new IllegalArgumentException("제안을 찾을 수 없습니다"));

                proposal.setStatus(dto.getStatus());

                return proposalDTO(proposal);
        }

        @Transactional
        public ProposalDTO updateView(Long proposalId) {
                Proposal proposal = proposalRepository.findById(proposalId)
                                .orElseThrow(() -> new IllegalArgumentException("제안을 찾을 수 없습니다."));

                proposal.setViewCount(proposal.getViewCount() + 1);
                return proposalDTO(proposal);
        }

        @Transactional
        public ProposalDTO updateParticipate(Long proposalId) {
                Proposal proposal = proposalRepository.findById(proposalId)
                                .orElseThrow(() -> new IllegalArgumentException("제안을 찾을 수 없습니다."));

                proposal.setParticipationCount(proposal.getParticipationCount() + 1);
                return proposalDTO(proposal);
        }

        private ProposalDTO proposalDTO(Proposal s) {
                return ProposalDTO.builder()
                                .proposalId(s.getProposalId())
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