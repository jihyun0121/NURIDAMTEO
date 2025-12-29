package com.nuridamteo.backend.services;

import java.util.*;

import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import com.nuridamteo.backend.dtos.BookmarkDTO;
import com.nuridamteo.backend.entities.Bookmark;
import com.nuridamteo.backend.entities.Proposal;
import com.nuridamteo.backend.entities.Result;
import com.nuridamteo.backend.entities.Users;
import com.nuridamteo.backend.repositories.BookmarkRepository;
import com.nuridamteo.backend.repositories.ProposalRepository;
import com.nuridamteo.backend.repositories.ResultRepository;
import com.nuridamteo.backend.repositories.UserRepository;

import lombok.*;

@Service
@RequiredArgsConstructor
public class BookmarkService {
    private final BookmarkRepository bookmarkRepository;
    private final UserRepository userRepository;
    private final ResultRepository resultRepository;
    private final ProposalRepository proposalRepository;

    public BookmarkDTO createBookmark(BookmarkDTO dto) {
        Users user = userRepository.findById(dto.getUser())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));

        Result result = null;
        Proposal proposal = null;

        if (dto.getResult() != null) {
            result = resultRepository.findById(dto.getResult())
                    .orElseThrow(() -> new RuntimeException("결과를 찾을 수 없습니다"));
        } else if (dto.getProposal() != null) {
            proposal = proposalRepository.findById(dto.getProposal())
                    .orElseThrow(() -> new RuntimeException("제안을 찾을 수 없습니다"));
        } else {
            throw new IllegalArgumentException("결과 또는 제안 중 하나는 반드시 있어야 합니다");
        }

        Bookmark bookmark = Bookmark.builder()
                .user(user)
                .result(result)
                .proposal(proposal)
                .build();

        Bookmark saved = bookmarkRepository.save(bookmark);
        return bookmarkDTO(saved);
    }

    @Transactional(readOnly = true)
    public List<BookmarkDTO> getBookmarkProposal(Long userId) {
        return bookmarkRepository.findByUser_UserIdAndProposalIsNotNullOrderByBookmarkIdDesc(userId)
                .stream()
                .map(this::bookmarkDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<BookmarkDTO> getBookmarkResult(Long userId) {
        return bookmarkRepository.findByUser_UserIdAndResultIsNotNullOrderByBookmarkIdDesc(userId)
                .stream()
                .map(this::bookmarkDTO)
                .toList();
    }

    private BookmarkDTO bookmarkDTO(Bookmark p) {
        return BookmarkDTO.builder()
                .bookmarkId(p.getBookmarkId())
                .user(p.getUser().getUserId())
                .proposal(p.getProposal() != null ? p.getProposal().getProposalId() : null)
                .result(p.getResult() != null ? p.getResult().getResultId() : null)
                .build();
    }

}
